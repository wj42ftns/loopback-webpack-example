// create an always-enabled debug namespace.
var debugName = 'webpack';
var debug = require('debug');
debug.enable(debugName);
debug = debug(debugName);

var path = require('path');
var temp = require('temp');
var chalk = require('chalk');
var argv = require('yargs').argv;
var relativeSourceFiles = require('./relativeSourceFiles');

module.exports = ({ projectRoot, appRoot, buildDir }) => () => {
  const relativeSrcFiles = relativeSourceFiles(projectRoot);
  debug(`Building into ${chalk.cyan.bold('./' + buildDir)}`);

  // if --save-instructions is omitted, we clean up the boot instructions
  // temp file automatically.
  if (!argv.saveInstructions)
    temp = temp.track();

  // use loopback-boot to compile the boot instructions and save them to a
  // temporary file. we create a resolve alias below so that
  // require('boot-instructions.json') will be resolved correctly.
  debug('Compiling boot instructions');

  var options = {
    appRootDir: appRoot,
    config: require(path.join(appRoot, 'config.json')),
    dataSources: require(path.join(appRoot, 'datasources.json')),
    models: require(path.join(appRoot, 'model-config.json')),
    middleware: require(path.join(appRoot, 'middleware.json')),
  };
  var compile = require('loopback-boot/lib/compiler');
  var instructions = compile(options);

  // remove config and dataSources since they will be installed at
  // runtime from external files.
  delete instructions.config;
  delete instructions.dataSources;

  relativeSrcFiles(instructions.models);
  relativeSrcFiles(instructions.components);
  var middleware = instructions.middleware && instructions.middleware.middleware;
  relativeSrcFiles(middleware);

  return instructions;
};
