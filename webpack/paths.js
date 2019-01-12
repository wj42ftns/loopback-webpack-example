'use strict'

const path = require('path');

const paths = {
  projectRoot: path.resolve(__dirname, '../'),
  appRoot: path.resolve(__dirname, '../server'),
  buildDir: path.resolve(__dirname, '../build'),
  entry: path.resolve(__dirname, '../server/server.js')
};

module.exports = paths;
