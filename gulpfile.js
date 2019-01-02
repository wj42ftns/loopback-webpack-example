'use strict'

// create an always-enabled debug namespace.
var debugName = 'webpack';
var debug = require('debug');
debug.enable(debugName);
debug = debug(debugName);

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');
var temp = require('temp');
var chalk = require('chalk');
var webpack = require('webpack');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var argv = require('yargs').argv;

var paths = {
  projectRoot: __dirname,
  appRoot: path.join(__dirname, 'server'),
  buildDir: 'build',
  buildRoot: path.join(__dirname, 'build')
};
var relativeSourceFiles = require('./webpack/relativeSourceFiles')(paths.projectRoot);
var prepareNodeModulesExternals = require('./webpack/prepareNodeModulesExternals');
var prepareDependencyMap = require('./webpack/prepareDependencyMap')(paths.projectRoot);
var prepareBootFiles = require('./webpack/prepareBootFiles');
var externalsHandler = require('./webpack/externalsHandler');


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
    debug(`Building into ${chalk.cyan.bold('./' + paths.buildDir)}`);

    // if --save-instructions is omitted, we clean up the boot instructions
    // temp file automatically.
    if(!argv.saveInstructions)
        temp = temp.track();

    // use loopback-boot to compile the boot instructions and save them to a
    // temporary file. we create a resolve alias below so that
    // require('boot-instructions.json') will be resolved correctly.
    debug('Compiling boot instructions');

    var options = {
        appRootDir:  paths.appRoot,
        config:      require(path.join(paths.appRoot, 'config.json')),
        dataSources: require(path.join(paths.appRoot, 'datasources.json')),
        models:      require(path.join(paths.appRoot, 'model-config.json')),
        middleware:  require(path.join(paths.appRoot, 'middleware.json')),
    };
    var compile = require('loopback-boot/lib/compiler');
    var ins = compile(options);

    // remove config and dataSources since they will be installed at
    // runtime from external files.
    delete ins.config;
    delete ins.dataSources;

    relativeSourceFiles(ins.models);
    relativeSourceFiles(ins.components);
    var middleware = ins.middleware && ins.middleware.middleware;
    relativeSourceFiles(middleware);

    // without it not worked!
    // eslint-disable-next-line no-unused-vars
    var bootFiles = prepareBootFiles(paths.projectRoot, ins);

    var instructionsFile = temp.openSync({prefix: 'boot-instructions-', suffix: '.json'});
    fs.writeSync(instructionsFile.fd, JSON.stringify(ins, null, argv.saveInstructions && '\t'));
    fs.closeSync(instructionsFile.fd);
    debug(`Saved boot instructions to ${chalk.cyan.bold(instructionsFile.path)}`);

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
                format: `  ${debugName} Packing: [${chalk.yellow.bold(':bar')}] ` +
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
