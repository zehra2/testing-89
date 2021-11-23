import React, { lazy, Suspense, Fragment } from 'react';
import Location from './modules/Location';

const App = lazy(() => import('./App'));
const IframeRouter = lazy(() => import('./components/iframe-router/IframeRouter'));

const AppLazy = () => (
  <Suspense fallback={<Fragment />}>{Location.isInLoginButtonIframe() ? <IframeRouter /> : <App />}</Suspense>
);

export default AppLazy;
