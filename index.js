const Koa = require('koa');
const webpack = require('webpack');
const Router = require('koa-router');
const path = require('path');
const static = require('koa-static');
const koaWebpack = require('koa-webpack-dev-middleware');
const convert = require('koa-convert');
const isObject = require('lodash/isObject');

const options = require('./webpack.config');

const http = require('http');

const template = require('./template');

const router = new Router();

const app = new Koa();

const compiler = webpack(options);

app.use(static('./build'));

function normalizeAssets(assets) {
  if (isObject(assets)) {
    return Object.values(assets);
  }

  return Array.isArray(assets) ? assets : [assets];
}

router.get('/', (ctx, next) => {
  const assetsByChunkName = ctx.state.webpackStats.toJson().assetsByChunkName;

  const jsList = normalizeAssets(assetsByChunkName.main)
    .filter(path => path.endsWith('.js'))
    .map(path => `<script src="${path}"></script>`)
    .join('/n');

  ctx.body = template(jsList);
  next()
});

app
  .use(koaWebpack(compiler, { serverSideRender: true }))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);