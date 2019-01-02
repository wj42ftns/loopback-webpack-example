var relative = require('./relative');

module.exports = (projectRoot) => (arr = []) => arr.forEach(function (item) {
  if (item.sourceFile)
    item.sourceFile = relative(projectRoot)(item.sourceFile);
});
