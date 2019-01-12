module.exports = function getNodeModuleExternals(nodeModules, request) {
  const [pathBase] = request.split(/[/\\]/);
  if (nodeModules.has(pathBase)) {
    return `commonjs ${request}`;
  }
}
