var path = require('path');
var fs = require('fs');

module.exports = () => {
  // create the set of node_modules which we will externalise below. we skip
  // binary modules and loopback-boot which must be bundled by webpack in order
  // to resolve dynamic dependencies.
  var nodeModules = new Set();
  try {
    fs.readdirSync(path.join('node_modules'))
      .forEach(function (dir) {
        if (dir !== '.bin' && dir !== 'loopback-boot')
          nodeModules.add(dir);
      });
  } catch (e) {
    // do nothing
  }

  return nodeModules;
}

