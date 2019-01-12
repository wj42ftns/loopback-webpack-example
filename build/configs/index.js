const development = require('./development.json');
const test = require('./test.json');
const production = require('./production.json');

const env = process.env.NODE_ENV || 'development';
require(`./${env}.json`);

let config;
switch (env) {
  case 'development':
    config = development;
    break;
  case 'test':
    config = test;
    break;
  case 'production':
    config = production;
    break;
  default:
    throw new Error(`Not found config for: "${env}" enviroment!`);
}

module.exports = config;
