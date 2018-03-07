import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './views';
import store from './store';

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
);

if (typeof document !== 'undefined') {
  ReactDOM.hydrate(<AppRouter />, document.getElementById('root'));
}
