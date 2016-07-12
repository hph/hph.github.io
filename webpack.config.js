'use strict';

const resolve = require('path').resolve;
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babel = require('./package').babel;


module.exports = {
  context: resolve('./src'),
  entry: {
    app: ['./index'],
  },
  output: {
    path: resolve('./build'),
    filename: '[name].js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: babel.presets,
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  resolve: {
    extensions: ['', '.js', '.css'],
  },
  postcss: (bundler) => [
    autoprefixer,
  ],
};
