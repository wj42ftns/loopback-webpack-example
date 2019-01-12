'use strict'

const paths = require('./paths');
// const chalk = require('chalk');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const prepareInstructions = require('./prepareInstructions')(paths);
const prepareNodeModulesExternals = require('./prepareNodeModulesExternals');
const prepareDependencyMap = require('./prepareDependencyMap')(paths.projectRoot);
const prepareBootFiles = require('./prepareBootFiles');
const externalsHandler = require('./externalsHandler');
const createBootInstructionsJson = require('./createBootInstructionsJson');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEV = NODE_ENV === 'development';

const ins = prepareInstructions();
// without it don't worked!
// eslint-disable-next-line no-unused-vars
const bootFiles = prepareBootFiles(paths.projectRoot, ins);
//
const instructionsFile = createBootInstructionsJson(ins);
const dependencyMap = prepareDependencyMap(ins);
const nodeModulesExternals = prepareNodeModulesExternals();

module.exports = {
  context: paths.projectRoot,
  devtool: IS_DEV ? 'source-map' : 'none',
  mode: IS_DEV ? 'development' : 'production',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  entry: {
    main: paths.entry
  },
  externals: [
    externalsHandler(nodeModulesExternals)
  ],
  output: {
    libraryTarget: 'commonjs',
    path: paths.buildDir,
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  resolve: {
    extensions: ['.json', '.js', '*'],
    modules: [
      'node_modules',
      paths.projectRoot
    ],
    alias: {
      'boot-instructions.json': instructionsFile.path
    }
  },
  node: {
    __dirname: false,
    __filename: false
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'configs', to: `${paths.buildDir}/configs` },
    ]),
    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: 'development' // default
    // }),
    // new ProgressBarPlugin({
    //   format: `  webpack Packing: [${chalk.yellow.bold(':bar')}] ` +
    //     `${chalk.green.bold(':percent')} (${chalk.cyan.bold(':elapseds')})`,
    //   width: 40,
    //   summary: false,
    //   clear: false
    // }),
    new webpack.ContextReplacementPlugin(/\bloopback-boot[/\\]lib/, '', dependencyMap)
  ],
  module: {
    // suppress warnings for require(expr) since we are expecting these from
    // loopback-boot.
    exprContextCritical: false,
    rules: [
      /*{
          test: /\.js$/i,
          include: [
              path.join(paths.projectRoot, 'server'),
              path.join(paths.projectRoot, 'common'),
              path.join(paths.projectRoot, 'node_modules', 'loopback-boot'),
          ],
          loader: 'babel'
      }*/
    ]
  },
  stats: {
    colors: IS_DEV,
    modules: IS_DEV,
    reasons: IS_DEV,
    errorDetails: IS_DEV
  }
};
