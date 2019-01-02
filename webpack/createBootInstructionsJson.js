// create an always-enabled debug namespace.
var debugName = 'webpack';
var debug = require('debug');
debug.enable(debugName);
debug = debug(debugName);

var temp = require('temp');
var chalk = require('chalk');
var argv = require('yargs').argv;
var fs = require('fs');

module.exports = (ins) => {
  var instructionsFile = temp.openSync({ prefix: 'boot-instructions-', suffix: '.json' });
  fs.writeSync(instructionsFile.fd, JSON.stringify(ins, null, argv.saveInstructions && '\t'));
  fs.closeSync(instructionsFile.fd);
  debug(`Saved boot instructions to ${chalk.cyan.bold(instructionsFile.path)}`);

  return instructionsFile;
};
