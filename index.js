const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaWebpack = require('koa-webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');

const options = require('./webpack.config');
const template = require('./template');

const { getStyles, getScripts } = require('./get-assets');

const router = new Router();

const app = new Koa();

const compiler = webpack(options);

router.get('/', (ctx, next) => {
  const scriptList = getScripts(ctx);
  const styleList = getStyles(ctx);

  ctx.body = template(scriptList, styleList);
  next()
});

app
  .use(static('./build'))
  .use(koaWebpack(compiler, { serverSideRender: true }))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);