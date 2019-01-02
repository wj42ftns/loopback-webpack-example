'use strict'

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var paths = {
  projectRoot: __dirname,
  appRoot: path.join(__dirname, 'server'),
  buildDir: 'build',
  buildRoot: path.join(__dirname, 'build')
};
var prepareInstructions = require('./webpack/prepareInstructions')({
  projectRoot: paths.projectRoot,
  appRoot: paths.appRoot,
  buildDir: paths.buildDir,
});
var prepareNodeModulesExternals = require('./webpack/prepareNodeModulesExternals');
var prepareDependencyMap = require('./webpack/prepareDependencyMap')(paths.projectRoot);
var prepareBootFiles = require('./webpack/prepareBootFiles');
var externalsHandler = require('./webpack/externalsHandler');
var createBootInstructionsJson = require('./webpack/createBootInstructionsJson');


gulp.task('default', function(done) {
    Webpack().run(function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
            colors: true,
        }));
        done();
    });
});

function Webpack() {
  const ins = prepareInstructions();

  // without it not worked!
  // eslint-disable-next-line no-unused-vars
  const bootFiles = prepareBootFiles(paths.projectRoot, ins);
  const instructionsFile = createBootInstructionsJson(ins);
  const dependencyMap = prepareDependencyMap(ins);
  const nodeModulesExternals = prepareNodeModulesExternals();
    return webpack({
        context: paths.projectRoot,
        entry: './server/server.js',
        target: 'node',
        devtool: 'source-map',
        externals: [
          externalsHandler(nodeModulesExternals)
        ],
        output: {
            libraryTarget: 'commonjs',
            path: paths.buildRoot,
            filename: '[name].bundle.js',
            chunkFilename: '[id].bundle.js'
        },
        node: {
            __dirname: false,
            __filename: false
        },
        resolve: {
            extensions: ['', '.json', '.js'],
            modulesDirectories: ['node_modules'],
            alias: {
                'boot-instructions.json': instructionsFile.path
            }
        },
        plugins: [
            new ProgressBarPlugin({
                format: `  webpack Packing: [${chalk.yellow.bold(':bar')}] ` +
                `${chalk.green.bold(':percent')} (${chalk.cyan.bold(':elapseds')})`,
                width: 40,
                summary: false,
                clear: false
            }),
            new webpack.ContextReplacementPlugin(/\bloopback-boot[/\\]lib/, '', dependencyMap)
        ],
        module: {
            // suppress warnings for require(expr) since we are expecting these from
            // loopback-boot.
            exprContextCritical: false,
            loaders: [
                /*{
                    test: /\.js$/i,
                    include: [
                        path.join(paths.projectRoot, 'server'),
                        path.join(paths.projectRoot, 'common'),
                        path.join(paths.projectRoot, 'node_modules', 'loopback-boot'),
                    ],
                    loader: 'babel'
                },*/
                {
                    test: [/\.json$/i],
                    loader: 'json-loader'
                },
            ]
        },
        stats: {colors: true, modules: true, reasons: true, errorDetails: true}
    });
}
