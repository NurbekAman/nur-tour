const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [path.resolve(__dirname, './client/index.js')],
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
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
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