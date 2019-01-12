const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'production',
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new CleanWebpackPlugin(
      ['build'],
      {
        root: path.resolve(__dirname, '../'),
      }
    ),
  ].filter(Boolean),
  optimization: {
    minimize: true,
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
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: [
  //         /(node_modules|bower_components)/
  //       ],
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"]
  //         }
  //       }
  //     }
  //   ]
  // },
});
