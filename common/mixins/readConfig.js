const config = require('configs');

module.exports = function (Model) {
  Model.readConfig = (req, cb) => {
    cb(null, config);
  };

  Model.remoteMethod('readConfig', {
    accepts: [
      { arg: 'req', type: 'object', http: { source: 'req' } }
    ],
    http: {
      path: '/readConfig',
      verb: 'get'
    },
    description: 'readConfig',
    returns: { arg: 'config', type: 'object', root: true }
  });
};
