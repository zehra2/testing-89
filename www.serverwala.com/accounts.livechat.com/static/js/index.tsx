import './polyfills/index';

import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { IWindow } from './interfaces/window';
import CommmonStore from './stores/CommonStore';
import { isDev } from './Config';

import AppLazy from './AppLazy';

declare const window: IWindow;

if (!Element.prototype.remove) {
  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  };
}

Sentry.init({
  dsn: `${process.env.REACT_APP_SENTRY}`,
  release: process.env.REACT_APP_RELEASE_TIMESTAMP,
  debug: isDev
});

Sentry.configureScope(scope => {
  scope.setTag('version', 'global');
});

ReactDOM.render(<AppLazy />, document.getElementById('root'));

window.Accounts = {
  // This is public API of our React App
  setAgentLogin(agentLogin: string) {
    CommmonStore.set({ email: agentLogin });
  }
};
