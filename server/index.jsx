import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import MustacheEngine from 'mustache-express';
import routes from '../public/views';

const router = express.Router();

router.get('/*', (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
  res.render('../dist/index.html.mustache', { content });
});

const app = express();
app.engine('mustache', MustacheEngine());
app.set('view engine', 'mustache');
app.use(/\/((?!static).)*/, router);
app.use('/static', express.static(path.resolve(__dirname, '../dist'), {
  index: false,
}));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
