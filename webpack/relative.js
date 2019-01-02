var path = require('path');

// rewrite all paths relative to the project root.
module.exports = projectRoot => p => './' + path.relative(projectRoot, p).replace(/\\/g, '/');
