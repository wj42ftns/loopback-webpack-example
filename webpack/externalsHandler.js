// we define a master externals handler that takes care of externalising
// node_modules (largely copied from webpack-node-externals) except for
// loopback-boot. We also externalise our config.json and datasources.json
// configuration files.
module.exports = nodeModules => (context, request, callback) => {
  // externalise dynamic config files.
  // NOTE: if you intend to deploy these config files in the same
  // directory as the bundle, change the result to `./${match[1]}.json`
  let match;
  match = request.match(/(?:^|[/\\])(config|datasources)\.json$/);
  if (match) {
    return callback(null, `../server/${match[1]}.json`);
  }
  // externalise if the path begins with a node_modules name or if it's
  // an absolute path containing /node_modules/ (the latter results from
  // loopback component and middleware dependencies).
  const pathBase = request.split(/[/\\]/)[0];
  if (nodeModules.has(pathBase)) {
    return callback(null, 'commonjs ' + request);
  }
  match = request.match(/[/\\]node_modules[/\\](.*)$/);
  if (match) {
    return callback(null, 'commonjs ' + match[1].replace(/\\/g, '/'));
  }


  match = request.match(/^configs$/);
  if (match) {
    return callback(null, './configs');
  }


  // otherwise internalise (bundle) the request.
  callback();
};
