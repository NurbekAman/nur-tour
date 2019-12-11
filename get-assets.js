const isObject = require('lodash/isObject');
const compose = require('lodash/fp/compose');

function normalizeAssets(assets) {
  if (isObject(assets)) {
    return Object.values(assets);
  }

  return Array.isArray(assets) ? assets : [assets];
}

function getParameters(ctx) {
  const assetsByChunkName = ctx.state.webpackStats.toJson().assetsByChunkName;
  const fs = ctx.state.fs;
  const outputPath = ctx.state.webpackStats.toJson().outputPath;

  return {
    assetsByChunkName,
    fs,
    outputPath,
  };
}

function collectCssList({ assetsByChunkName, fs, outputPath }) {
  return normalizeAssets(assetsByChunkName.main)
    .filter(path => path.endsWith('.scss'))
    .map(path => fs.readFileSync(outputPath + '/' + path))
    .join('\n');
}

function collectScripts({ assetsByChunkName }) {
  return normalizeAssets(assetsByChunkName.main)
    .filter(path => path.endsWith('.js'))
    .map(path => `<script src="${path}"></script>`)
    .join('/n');
}

const getScripts = compose(
  collectScripts,
  getParameters,
);

const getStyles = compose(
  collectCssList,
  getParameters,
);

module.exports = {
  getScripts,
  getStyles,
};