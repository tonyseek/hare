const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './public/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash:6].js',
    publicPath: '/static',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './public'),
      path.resolve(__dirname, './node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'HARE_API_URL',
    ]),
    new CleanWebpackPlugin(['dist/*', 'views/*']),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './views/index.html.mustache'),
      template: './public/index.html',
      inject: 'body',
    }),
  ],
};
