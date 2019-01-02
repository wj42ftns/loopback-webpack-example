var path = require('path');
const prepareBootFiles = require('./prepareBootFiles');

  // Construct the dependency map for loopback-boot. It resolves all of the
  // dynamic module dependencies specified by the boot instructions:
  //  * model definition js files
  //  * component dependencies
  //  * middleware dependencies
  //  * boot scripts
  //  Note: model JSON files are included in the instructions themselves so
  //  are not bundled directly.
module.exports = (projectRoot) => (ins) => {
  var middleware = ins.middleware && ins.middleware.middleware;

  let dependencyMap = {};
  const resolve = resolveSourceFiles(dependencyMap, projectRoot);
  dependencyMap = resolve(ins.models);
  dependencyMap = resolve(ins.components);
  dependencyMap = resolve(middleware);
  const bootFiles = prepareBootFiles(projectRoot, ins);
  bootFiles && bootFiles.forEach(function (boot) {
    dependencyMap[boot] = path.resolve(projectRoot, boot);
  });

  return dependencyMap;
}

function resolveSourceFiles(dependencyMap, projectRoot) {
  return (arr = []) => {
    arr.forEach(function (item) {
      if (item.sourceFile)
        dependencyMap[item.sourceFile] = path.resolve(projectRoot, item.sourceFile);
    });

    return dependencyMap;
  }
}
