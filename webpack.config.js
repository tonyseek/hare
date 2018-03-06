const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './public/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[hash:6].js',
    publicPath: '/',
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
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      inject: 'body',
    }),
  ],
};
