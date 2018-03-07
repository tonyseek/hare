import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import mustache from 'mustache-express';
import routes from '../public/views';
import { API_DOMAIN, API_HTTPS } from './config';

const router = express.Router();

router.get('/*', (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
  res.render('index.html.mustache', { content });
});

const app = express();
const port = Number.parseInt(process.env.PORT || '3000');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.use('/api', proxy(API_DOMAIN, { https: API_HTTPS }));
app.use('*', router);
app.listen(port, () => console.log(`Open http://127.0.0.1:${port}`));
