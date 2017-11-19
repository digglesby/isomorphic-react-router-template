import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import {
  createIsomorphicWebpack
} from 'isomorphic-webpack';
import {
  renderToString
} from 'react-dom/server';
import webpackConfiguration from './webpack.config.js';
import Helmet from 'react-helmet';

const CONFIG = require('./config/config.js');

const compiler = webpack(webpackConfiguration);
const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: '/static',
  quiet: false,
  stats: {
    assets: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    hash: false,
    timings: false,
    version: false
  }
}));

const {
  createCompilationPromise,
  evalBundleCode
} = createIsomorphicWebpack(webpackConfiguration, {
  useCompilationPromise: true
});

app.use(async (req, res, next) => {
  await createCompilationPromise();

  next();
});

const renderFullPage = (body,helmet) => {
  const helm_regexp = / data-react-helmet="true"/g;

  return `
  <!doctype html>
  <html ${helmet.htmlAttributes.toString().replace(helm_regexp, '')}>
    <head>
      ${helmet.title.toString().replace(helm_regexp, '')}
      ${helmet.meta.toString().replace(helm_regexp, '')}
      ${helmet.link.toString().replace(helm_regexp, '')}
    </head>
    <body>
      <div id='app'>${body}</div>
      <script src='/static/app.js'></script>
      <link rel='stylesheet' type='text/css' href='/static/main.css'>
    </body>
  </html>`;
};

app.use('/static', express.static('static'));

app.get('*', (req, res) => {
  const requestUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  const app = renderToString(evalBundleCode(requestUrl).default);
  const helmet = Helmet.renderStatic();

  res.send(renderFullPage(app,helmet));
});


if (!CONFIG.DEV){
  var webServer;
  var port;

  if (CONFIG.SSL){
    webServer = https.createServer({
      key: CONFIG.PRIVATE_KEY,
      cert: CONFIG.CERTIFICATE
    }, app);

    port = 443;
  }else{
    webServer = http.createServer(app);

    port = 80;
  }

  webServer.listen(port);
}else{
  app.listen(CONFIG.PORT);
}
