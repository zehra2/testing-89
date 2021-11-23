import { eventToSentryRequest, sessionToSentryRequest } from '@sentry/core';
import { Event, Outcome, Response, SentryRequest, Session, TransportOptions } from '@sentry/types';
import { SentryError, supportsReferrerPolicy, SyncPromise } from '@sentry/utils';

import { BaseTransport } from './base';
import { FetchImpl, getNativeFetchImplementation } from './utils';

/** `fetch` based transport */
export class FetchTransport extends BaseTransport {
  /**
   * Fetch API reference which always points to native browser implementation.
   */
  private _fetch: typeof fetch;

  public constructor(options: TransportOptions, fetchImpl: FetchImpl = getNativeFetchImplementation()) {
    super(options);
    this._fetch = fetchImpl;
  }

  /**
   * @inheritDoc
   */
  public sendEvent(event: Event): PromiseLike<Response> {
    return this._sendRequest(eventToSentryRequest(event, this._api), event);
  }

  /**
   * @inheritDoc
   */
  public sendSession(session: Session): PromiseLike<Response> {
    return this._sendRequest(sessionToSentryRequest(session, this._api), session);
  }

  /**
   * @param sentryRequest Prepared SentryRequest to be delivered
   * @param originalPayload Original payload used to create SentryRequest
   */
  private _sendRequest(sentryRequest: SentryRequest, originalPayload: Event | Session): PromiseLike<Response> {
    if (this._isRateLimited(sentryRequest.type)) {
      this.recordLostEvent(Outcome.RateLimitBackoff, sentryRequest.type);

      return Promise.reject({
        event: originalPayload,
        type: sentryRequest.type,
        reason: `Transport for ${sentryRequest.type} requests locked till ${this._disabledUntil(
          sentryRequest.type,
        )} due to too many requests.`,
        status: 429,
      });
    }

    const options: RequestInit = {
      body: sentryRequest.body,
      method: 'POST',
      // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
      // https://caniuse.com/#feat=referrer-policy
      // It doesn't. And it throw exception instead of ignoring this parameter...
      // REF: https://github.com/getsentry/raven-js/issues/1233
      referrerPolicy: (supportsReferrerPolicy() ? 'origin' : '') as ReferrerPolicy,
    };
    if (this.options.fetchParameters !== undefined) {
      Object.assign(options, this.options.fetchParameters);
    }
    if (this.options.headers !== undefined) {
      options.headers = this.options.headers;
    }

    return this._buffer
      .add(
        () =>
          new SyncPromise<Response>((resolve, reject) => {
            void this._fetch(sentryRequest.url, options)
              .then(response => {
                const headers = {
                  'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                  'retry-after': response.headers.get('Retry-After'),
                };
                this._handleResponse({
                  requestType: sentryRequest.type,
                  response,
                  headers,
                  resolve,
                  reject,
                });
              })
              .catch(reject);
          }),
      )
      .then(undefined, reason => {
        // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
        if (reason instanceof SentryError) {
          this.recordLostEvent(Outcome.QueueOverflow, sentryRequest.type);
        } else {
          this.recordLostEvent(Outcome.NetworkError, sentryRequest.type);
        }
        throw reason;
      });
  }
}
