var relative = require('./relative');

module.exports = (projectRoot, ins) => {
  var bootFiles = ins.files && ins.files.boot;
  if (bootFiles) {
    bootFiles = ins.files.boot = bootFiles.map(relative(projectRoot));
  }

  return bootFiles;
};
