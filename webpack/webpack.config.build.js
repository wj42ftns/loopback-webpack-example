const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = require('./webpack.config');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_NOT_DEV = NODE_ENV !== 'development';

module.exports = merge(webpackConfig, {
  mode: 'production',
  plugins: [
    IS_NOT_DEV && new UglifyJsPlugin({ // it's better than native minimize - because get LICENSE to another file.
      sourceMap: true,
      extractComments: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CleanWebpackPlugin(
      ['build'],
      {
        root: path.resolve(__dirname, '../'),
      }
    ),
  ].filter(Boolean),
  optimization: {
    minimize: false,
    runtimeChunk: false,
    splitChunks: {
      chunks: 'async',
      minSize: 1000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Regular expression
        exclude: /(node_modules|bower_components)/,//excluded node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]  //Preset used for env setup
          }
        }
      }
    ]
  },
});
