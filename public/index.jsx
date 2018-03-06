import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './views';

const AppRouter = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
);

if (typeof document !== 'undefined') {
  ReactDOM.hydrate(<AppRouter />, document.getElementById('root'));
}
