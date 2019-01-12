const getNodeModuleExternals = require('./getNodeModuleExternals');
const runInstructions = require('./runInstructions');

module.exports = nodeModules => async (context, request, callback) => {
  const instructions = [
    [/(?:^|[/\\])(config|datasources)\.json$/, (match) => `../server/${match[1]}.json`],
    getNodeModuleExternals.bind(null, nodeModules),
    [/[/\\]node_modules[/\\](.*)$/, (match) => `commonjs ${match[1].replace(/\\/g, '/')}`],
    [/^configs$/, './configs'],
  ];

  const result = runInstructions(request, instructions);
  if (result) {
    return callback(null, result);
  }

  callback();
};


