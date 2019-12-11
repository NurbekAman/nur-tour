const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, './client/index.tsx')],
  mode: 'development',
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './build/'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: { transpileOnly: true, configFile: path.resolve(__dirname, './tsconfig.json') },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
    ]
  }
}