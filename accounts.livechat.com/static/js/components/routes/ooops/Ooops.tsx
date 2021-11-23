import React from 'react';
import { defaultProduct } from 'modules/Product';
import Button from '../../buttons/Button';
import ChatWidget from '../../../modules/ChatWidget';
import Location from '../../../modules/Location';
import { Title } from '../../common/title/Title';

interface IProps {
  flow: string;
  identityException: string;
  oauthException: string;
  exceptionDetails: string;
  redirectUri: string;
}

export default class Ooops extends React.Component<IProps> {
  /* eslint-disable @typescript-eslint/camelcase */

  loginButtonAppError() {
    const error: any = {};

    if (this.props.identityException) {
      error.identity_exception = this.props.identityException;
    }

    if (this.props.oauthException) {
      error.oauth_exception = this.props.oauthException;
    }

    if (this.props.exceptionDetails) {
      error.exception_details = this.props.exceptionDetails;
    }

    Location.sendPostMessage({
      error
    });

    return null;
  }

  classicAppError() {
    let description;

    switch (this.props.oauthException) {
      case 'invalid_request':
        description =
          'The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.';
        break;

      case 'unauthorized_client':
        description = 'The client is not authorized to request a token using this method.';
        break;

      case 'access_denied':
        description = 'The resource owner or authorization server denied the request.';
        break;

      case 'unsupported_response_type':
        description = 'The authorization server does not support obtaining a token using this method.';
        break;

      case 'invalid_scope':
        description = 'The requested scope is invalid, insufficient, unknown or malformed.';
        break;

      case 'server_error':
        description =
          'The authorization server encountered an unexpected condition that prevented it from fulfilling the request.';
        break;

      case 'temporarily_unavailable':
        description =
          'The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server.';
        break;

      case 'unsupported_grant_type':
        description = 'The authorization grant type is not supported by the authorization server.';
        break;

      case 'invalid_grant':
        description =
          'The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.';
        break;

      case 'invalid_client':
        description =
          'Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method).';
        break;

      default:
        break;
    }

    let exceptionDetails;
    switch (this.props.exceptionDetails) {
      case 'client_id_not_found':
        exceptionDetails = 'wrong client id, client id does not exists';
        break;

      case 'redirect_uri_not_set':
        exceptionDetails = 'client misconfiguration, client has not set redirect uri';
        break;

      case 'invalid_redirect_uri':
        exceptionDetails = "redirect uri is not one of client's allowed redirects";
        break;

      default:
        break;
    }

    return (
      <div className="form">
        <Title caption="Ooops!">
          There was a problem with signing in to your account. Clicking <strong>Sign in again</strong> will clean up
          your session and get you to the application.
          <br />
        </Title>
        <p>
          <Button onClick={defaultProduct}>Sign in again</Button>
        </p>
        {description && (
          <div className="ooops-details font15">
            <p>Technical description you can send us to help us resolve this problem:</p>
            <pre>
              <p>{description}</p>
              {exceptionDetails && (
                <p>
                  Exception details: <span className="ooops-details__exception-details">{exceptionDetails}</span>
                </p>
              )}
            </pre>
          </div>
        )}
        <div className="login-with-google">
          <span className="login-with-google__or">
            <span className="font15">or</span>
          </span>
          <p>
            {' '}
            <span className="fake-link" onClick={ChatWidget.handleContactSupport}>
              Contact us
            </span>{' '}
            if the problem persists.
          </p>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.flow === 'button') {
      return this.loginButtonAppError();
    }
    return this.classicAppError();
  }
}
