import '@babel/polyfill';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import proxy from 'express-http-proxy';
import mustache from 'mustache-express';
import * as sentry from '@sentry/node';
import routes from '../public/views';
import configureStore from '../public/store';
import {
  LOG_FORMAT,
  SENTRY_DSN,
  API_DOMAIN,
  API_HTTPS,
} from '../public/config';

sentry.init({ dsn: SENTRY_DSN });

const router = express.Router();

router.get('/*', (req, res) => {
  const store = configureStore();
  const context = {};
  const content = () => renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  content();
  const isFinished = context.isFinished || Promise.resolve();
  isFinished.finally(() => {
    const state = serialize(store.getState(), { isJSON: true });
    // render again here
    res.render('index.html.mustache', { content: content(), state });
  });
});

const app = express();
const port = Number.parseInt(process.env.PORT || '3000');

// The request handler must be the first middleware on the app
app.use(sentry.Handlers.requestHandler());

// The error handler must be before any other error middleware
app.use(sentry.Handlers.errorHandler());

app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(morgan(LOG_FORMAT));
app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.use('/api', proxy(API_DOMAIN, { https: API_HTTPS }));
app.use('*', router);
app.listen(port, () => console.log(`Open http://127.0.0.1:${port}`));
