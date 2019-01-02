(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../tmp/boot-instructions-11902-17313-16vwm81.j13k.json":
/*!************************************************************!*\
  !*** /tmp/boot-instructions-11902-17313-16vwm81.j13k.json ***!
  \************************************************************/
/*! exports provided: env, models, middleware, components, mixins, files, default */
/***/ (function(module) {

module.exports = {"env":"development","models":[{"name":"User","config":{"dataSource":"db"},"definition":{"name":"User","properties":{"realm":{"type":"string"},"username":{"type":"string"},"password":{"type":"string","required":true},"credentials":{"type":"object","deprecated":true},"challenges":{"type":"object","deprecated":true},"email":{"type":"string","required":true},"emailVerified":"boolean","verificationToken":"string","status":"string","created":"date","lastUpdated":"date","id":{"id":1,"generated":true}},"options":{"caseSensitiveEmail":true},"hidden":["password","verificationToken"],"acls":[{"principalType":"ROLE","principalId":"$everyone","permission":"DENY"},{"principalType":"ROLE","principalId":"$everyone","permission":"ALLOW","property":"create"},{"principalType":"ROLE","principalId":"$owner","permission":"ALLOW","property":"deleteById"},{"principalType":"ROLE","principalId":"$everyone","permission":"ALLOW","property":"login"},{"principalType":"ROLE","principalId":"$everyone","permission":"ALLOW","property":"logout"},{"principalType":"ROLE","principalId":"$owner","permission":"ALLOW","property":"findById"},{"principalType":"ROLE","principalId":"$owner","permission":"ALLOW","property":"updateAttributes"},{"principalType":"ROLE","principalId":"$owner","permission":"ALLOW","property":"replaceById"},{"principalType":"ROLE","principalId":"$everyone","permission":"ALLOW","property":"confirm"},{"principalType":"ROLE","principalId":"$everyone","permission":"ALLOW","property":"resetPassword","accessType":"EXECUTE"}],"relations":{"accessTokens":{"type":"hasMany","model":"AccessToken","foreignKey":"userId","options":{"disableInclude":true}}}},"sourceFile":"./node_modules/loopback/common/models/user.js"},{"name":"AccessToken","config":{"dataSource":"db","public":false},"definition":{"name":"AccessToken","properties":{"id":{"type":"string","id":true},"ttl":{"type":"number","ttl":true,"default":1209600,"description":"time to live in seconds (2 weeks by default)"},"created":{"type":"Date"}},"relations":{"user":{"type":"belongsTo","model":"User","foreignKey":"userId"}},"acls":[{"principalType":"ROLE","principalId":"$everyone","permission":"DENY"}]},"sourceFile":"./node_modules/loopback/common/models/access-token.js"},{"name":"ACL","config":{"dataSource":"db","public":false},"definition":{"name":"ACL","properties":{"model":{"type":"string","description":"The name of the model"},"property":{"type":"string","description":"The name of the property, method, scope, or relation"},"accessType":"string","permission":"string","principalType":"string","principalId":"string","id":{"id":1,"generated":true}}},"sourceFile":"./node_modules/loopback/common/models/acl.js"},{"name":"RoleMapping","config":{"dataSource":"db","public":false},"definition":{"name":"RoleMapping","description":"Map principals to roles","properties":{"id":{"type":"string","id":true,"generated":true},"principalType":{"type":"string","description":"The principal type, such as user, application, or role"},"principalId":{"type":"string","index":true}},"relations":{"role":{"type":"belongsTo","model":"Role","foreignKey":"roleId"}}},"sourceFile":"./node_modules/loopback/common/models/role-mapping.js"},{"name":"Role","config":{"dataSource":"db","public":false},"definition":{"name":"Role","properties":{"id":{"type":"string","id":true,"generated":true},"name":{"type":"string","required":true},"description":"string","created":"date","modified":"date"},"relations":{"principals":{"type":"hasMany","model":"RoleMapping","foreignKey":"roleId"}}},"sourceFile":"./node_modules/loopback/common/models/role.js"},{"name":"CoffeeShop","config":{"dataSource":"mysqlDs","public":true},"definition":{"name":"CoffeeShop","base":"PersistedModel","properties":{"name":{"type":"string","required":true},"city":{"type":"string","required":true}},"validations":[],"relations":{},"acls":[],"methods":[]},"sourceFile":"./common/models/coffee-shop.js"}],"middleware":{"phases":["initial","session","auth","parse","routes","files","final"],"middleware":[{"sourceFile":"./node_modules/loopback","config":{"phase":"initial:before"},"fragment":"favicon"},{"sourceFile":"./node_modules/compression","config":{"phase":"initial"}},{"sourceFile":"./node_modules/loopback","config":{"paths":["${restApiRoot}"],"phase":"routes"},"fragment":"rest"},{"sourceFile":"./node_modules/loopback","config":{"params":"/home/wj42/work/training/loopback-webpack-example/client","phase":"files"},"fragment":"static"},{"sourceFile":"./node_modules/loopback","config":{"phase":"final"},"fragment":"urlNotFound"},{"sourceFile":"./node_modules/errorhandler","config":{"phase":"final:after"}}]},"components":[{"sourceFile":"./node_modules/loopback-component-explorer/index.js","config":{"mountPath":"/explorer"}}],"mixins":[],"files":{"boot":["./server/boot/authentication.js","./server/boot/create-sample-models.js","./server/boot/root.js","./server/boot/routes.js"]}};

/***/ }),

/***/ "./common/models/coffee-shop.js":
/*!**************************************!*\
  !*** ./common/models/coffee-shop.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(CoffeeShop) {
  CoffeeShop.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;

    console.log('Current hour is ' + currentHour);

    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };

  CoffeeShop.remoteMethod(
    'status',
    {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );
};


/***/ }),

/***/ "./config.json":
/*!****************************************!*\
  !*** external "../server/config.json" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("../server/config.json");

/***/ }),

/***/ "./datasources.json":
/*!*********************************************!*\
  !*** external "../server/datasources.json" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("../server/datasources.json");

/***/ }),

/***/ "./node_modules/loopback-boot/lib sync recursive":
/*!*********************************************!*\
  !*** ./node_modules/loopback-boot/lib sync ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common/models/coffee-shop.js": "./common/models/coffee-shop.js",
	"./node_modules/compression": "/home/wj42/work/training/loopback-webpack-example/node_modules/compression",
	"./node_modules/errorhandler": "/home/wj42/work/training/loopback-webpack-example/node_modules/errorhandler",
	"./node_modules/loopback": "loopback",
	"./node_modules/loopback-component-explorer/index.js": "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback-component-explorer/index.js",
	"./node_modules/loopback/common/models/access-token.js": "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/access-token.js",
	"./node_modules/loopback/common/models/acl.js": "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/acl.js",
	"./node_modules/loopback/common/models/role-mapping.js": "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/role-mapping.js",
	"./node_modules/loopback/common/models/role.js": "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/role.js",
	"./node_modules/loopback/common/models/user.js": "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/user.js",
	"./server/boot/authentication.js": "./server/boot/authentication.js",
	"./server/boot/create-sample-models.js": "./server/boot/create-sample-models.js",
	"./server/boot/root.js": "./server/boot/root.js",
	"./server/boot/routes.js": "./server/boot/routes.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/loopback-boot/lib sync recursive";

/***/ }),

/***/ "./node_modules/loopback-boot/lib/executor.js":
/*!****************************************************!*\
  !*** ./node_modules/loopback-boot/lib/executor.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var assert = __webpack_require__(/*! assert */ "assert");
var semver = __webpack_require__(/*! semver */ "semver");
var debug = __webpack_require__(/*! debug */ "debug")('loopback:boot:executor');
var async = __webpack_require__(/*! async */ "async");
var path = __webpack_require__(/*! path */ "path");
var format = __webpack_require__(/*! util */ "util").format;
var g = __webpack_require__(/*! strong-globalize */ "strong-globalize")();
var requireNodeOrEsModule = __webpack_require__(/*! ./require */ "./node_modules/loopback-boot/lib/require.js");

/**
 * Execute bootstrap instructions gathered by `boot.compile`.
 *
 * @param {Object} app The loopback app to boot.
 * @options {Object} instructions Boot instructions.
 * @param {Function} [callback] Callback function.
 *
 * @header boot.execute(instructions)
 */

module.exports = function execute(app, instructions, callback) {
  callback = callback || function() {};

  app.booting = true;

  patchAppLoopback(app);
  assertLoopBackVersion(app);

  setEnv(app, instructions);
  setHost(app, instructions);
  setPort(app, instructions);
  setApiRoot(app, instructions);
  applyAppConfig(app, instructions);

  setupDataSources(app, instructions);
  setupModels(app, instructions);
  setupMiddleware(app, instructions);
  setupComponents(app, instructions);

  // Run the boot scripts in series synchronously or asynchronously
  // Please note async supports both styles
  async.series([
    function(done) {
      runBootScripts(app, instructions, done);
    },
    function(done) {
      enableAnonymousSwagger(app, instructions);
      done();
    },
    // Ensure both the "booted" event and the callback are always called
    // in the next tick of the even loop.
    // See http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony
    process.nextTick,
  ], function(err) {
    app.booting = false;

    if (err) return callback(err);

    app.emit('booted');

    callback();
  });
};

function patchAppLoopback(app) {
  if (app.loopback) return;
  // app.loopback was introduced in 1.9.0
  // patch the app object to make loopback-boot work with older versions too
  try {
    app.loopback = __webpack_require__(/*! loopback */ "loopback");
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      g.error(
          'When using {{loopback-boot}} with {{loopback}} <1.9, ' +
          'the {{loopback}} module must be available ' +
          'for `{{require(\'loopback\')}}`.');
    }
    throw err;
  }
}

function assertLoopBackVersion(app) {
  var RANGE = '1.x || 2.x || ^3.0.0-alpha';

  var loopback = app.loopback;
  // remove any pre-release tag from the version string,
  // because semver has special treatment of pre-release versions,
  // while loopback-boot treats pre-releases the same way as regular versions
  var version = (loopback.version || '1.0.0').replace(/-.*$/, '');
  if (!semver.satisfies(version, RANGE)) {
    var msg = g.f(
      'The `{{app}}` is powered by an incompatible {{loopback}} version %s. ' +
      'Supported versions: %s',
      loopback.version || '(unknown)',
      RANGE);
    throw new Error(msg);
  }
}

function setEnv(app, instructions) {
  var env = instructions.env;
  if (env !== undefined)
    app.set('env', env);
}

function setHost(app, instructions) {
  // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
  var host =
    process.env.npm_config_host ||
    process.env.OPENSHIFT_SLS_IP ||
    process.env.OPENSHIFT_NODEJS_IP ||
    process.env.HOST ||
    process.env.VCAP_APP_HOST ||
    instructions.config.host ||
    process.env.npm_package_config_host ||
    app.get('host');

  if (host !== undefined) {
    assert(typeof host === 'string', g.f('{{app.host}} must be a {{string}}'));
    app.set('host', host);
  }
}

function setPort(app, instructions) {
  // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
  var port = find([
    process.env.npm_config_port,
    process.env.OPENSHIFT_SLS_PORT,
    process.env.OPENSHIFT_NODEJS_PORT,
    process.env.PORT,
    process.env.VCAP_APP_PORT,
    instructions.config.port,
    process.env.npm_package_config_port,
    app.get('port'),
    3000,
  ], function(p) {
    return p != null;
  });

  if (port !== undefined) {
    var portType = typeof port;
    assert(portType === 'string' || portType === 'number',
      g.f('{{app.port}} must be a {{string}} or {{number}}'));
    app.set('port', port);
  }
}

function find(array, predicate) {
  return array.filter(predicate)[0];
}

function setApiRoot(app, instructions) {
  var restApiRoot =
    instructions.config.restApiRoot ||
    app.get('restApiRoot') ||
    '/api';

  assert(restApiRoot !== undefined, g.f('{{app.restBasePath}} is required'));
  assert(typeof restApiRoot === 'string',
    g.f('{{app.restApiRoot}} must be a {{string}}'));
  assert(/^\//.test(restApiRoot),
    g.f('{{app.restApiRoot}} must start with "/"'));
  app.set('restApiRoot', restApiRoot);
}

function applyAppConfig(app, instructions) {
  var appConfig = instructions.config;
  for (var configKey in appConfig) {
    var cur = app.get(configKey);
    if (cur === undefined || cur === null) {
      app.set(configKey, appConfig[configKey]);
    }
  }
}

function setupDataSources(app, instructions) {
  forEachKeyedObject(instructions.dataSources, function(key, obj) {
    var opts = {
      useEnvVars: true,
    };
    obj = getUpdatedConfigObject(app, obj, opts);
    var lazyConnect = process.env.LB_LAZYCONNECT_DATASOURCES;
    if (lazyConnect) {
      obj.lazyConnect =
        lazyConnect === 'false' || lazyConnect === '0' ? false : true;
    }
    app.dataSource(key, obj);
  });
}

function setupModels(app, instructions) {
  defineMixins(app, instructions);
  defineModels(app, instructions);

  instructions.models.forEach(function(data) {
    // Skip base models that are not exported to the app
    if (!data.config) return;

    app.model(data._model, data.config);
  });
}

function defineMixins(app, instructions) {
  var modelBuilder = (app.registry || app.loopback).modelBuilder;
  var BaseClass = app.loopback.Model;
  var mixins = instructions.mixins || [];

  if (!modelBuilder.mixins || !mixins.length) return;

  mixins.forEach(function(obj) {
    var mixin = requireNodeOrEsModule(obj.sourceFile);

    if (typeof mixin === 'function' || mixin.prototype instanceof BaseClass) {
      debug('Defining mixin %s', obj.name);
      modelBuilder.mixins.define(obj.name, mixin); // TODO (name, mixin, meta)
    } else {
      debug('Skipping mixin file %s - `module.exports` is not a function' +
        ' or Loopback model', obj);
    }
  });
}

function defineModels(app, instructions) {
  var registry = app.registry || app.loopback;
  instructions.models.forEach(function(data) {
    var name = data.name;
    var model;

    if (!data.definition) {
      model = registry.getModel(name);
      if (!model) {
        throw new Error(g.f('Cannot configure unknown model %s', name));
      }
      debug('Configuring existing model %s', name);
    } else if (isBuiltinLoopBackModel(app, data)) {
      model = registry.getModel(name);
      assert(model, g.f('Built-in model %s should have been defined', name));
      debug('Configuring built-in LoopBack model %s', name);
    } else {
      debug('Creating new model %s %j', name, data.definition);
      model = registry.createModel(data.definition);
      if (data.sourceFile) {
        debug('Loading customization script %s', data.sourceFile);
        var code = requireNodeOrEsModule(data.sourceFile);
        if (typeof code === 'function') {
          debug('Customizing model %s', name);
          code(model);
        } else {
          debug('Skipping model file %s - `module.exports` is not a function',
            data.sourceFile);
        }
      }
    }

    data._model = model;
  });
}

// Regular expression to match built-in loopback models
var LOOPBACK_MODEL_REGEXP = new RegExp(
  ['', 'node_modules', 'loopback', '[^\\/\\\\]+', 'models', '[^\\/\\\\]+\\.js$']
    .join('\\' + path.sep));

function isBuiltinLoopBackModel(app, data) {
  // 1. Built-in models are exposed on the loopback object
  if (!app.loopback[data.name]) return false;

  // 2. Built-in models have a script file `loopback/{facet}/models/{name}.js`
  var srcFile = data.sourceFile;
  return srcFile &&
    LOOPBACK_MODEL_REGEXP.test(srcFile);
}

function forEachKeyedObject(obj, fn) {
  if (typeof obj !== 'object') return;

  Object.keys(obj).forEach(function(key) {
    fn(key, obj[key]);
  });
}

function runScripts(app, list, callback) {
  list = list || [];
  var functions = [];
  list.forEach(function(filepath) {
    debug('Requiring script %s', filepath);
    try {
      var bootFn = requireNodeOrEsModule(filepath);
      if (typeof bootFn === 'function') {
        debug('Exported function detected %s', filepath);
        functions.push({
          path: filepath,
          func: bootFn,
        });
      }
    } catch (err) {
      g.error('Failed loading boot script: %s\n%s', filepath, err.stack);
      throw err;
    }
  });

  async.eachSeries(functions, function(f, done) {
    debug('Running script %s', f.path);
    var cb = function(err) {
      debug('Async function %s %s', err ? 'failed' : 'finished', f.path);
      done(err);
      // Make sure done() isn't called twice, e.g. if a script returns a
      // thenable object and also calls the passed callback.
      cb = function() {};
    };
    try {
      var result = f.func(app, cb);
      if (result && typeof result.then === 'function') {
        result.then(function() { cb(); }, cb);
      } else if (f.func.length < 2) {
        debug('Sync function finished %s', f.path);
        done();
      }
    } catch (err) {
      debug('Sync function failed %s', f.path, err);
      done(err);
    }
  }, callback);
}

function setupMiddleware(app, instructions) {
  if (!instructions.middleware) {
    // the browserified client does not support middleware
    return;
  }

  // Phases can be empty
  var phases = instructions.middleware.phases || [];
  assert(Array.isArray(phases),
    g.f('{{instructions.middleware.phases}} must be an {{array}}'));

  var middleware = instructions.middleware.middleware;
  assert(Array.isArray(middleware),
    'instructions.middleware.middleware must be an object');

  debug('Defining middleware phases %j', phases);
  app.defineMiddlewarePhases(phases);

  middleware.forEach(function(data) {
    debug('Configuring middleware %j%s', data.sourceFile,
        data.fragment ? ('#' + data.fragment) : '');
    var factory = requireNodeOrEsModule(data.sourceFile);
    if (data.fragment) {
      factory = factory[data.fragment].bind(factory);
    }
    assert(typeof factory === 'function',
      'Middleware factory must be a function');
    var opts = {
      useEnvVars: true,
    };
    data.config = getUpdatedConfigObject(app, data.config, opts);
    app.middlewareFromConfig(factory, data.config);
  });
}

function getUpdatedConfigObject(app, config, opts) {
  var DYNAMIC_CONFIG_PARAM = /\$\{(\w+)\}$/;
  var useEnvVars = opts && opts.useEnvVars;

  function getConfigVariable(param) {
    var configVariable = param;
    var match = configVariable.match(DYNAMIC_CONFIG_PARAM);
    if (match) {
      var varName = match[1];
      if (useEnvVars && process.env[varName] !== undefined) {
        debug('Dynamic Configuration: Resolved via process.env: %s as %s',
          process.env[varName], param);
        configVariable = process.env[varName];
      } else if (app.get(varName) !== undefined) {
        debug('Dynamic Configuration: Resolved via app.get(): %s as %s',
          app.get(varName), param);
        var appValue = app.get(varName);
        configVariable = appValue;
      } else {
        // previously it returns the original string such as "${restApiRoot}"
        // it will now return `undefined`, for the use case of
        // dynamic datasources url:`undefined` to fallback to other parameters
        configVariable = undefined;
        g.warn('%s does not resolve to a valid value, returned as %s. ' +
        '"%s" must be resolvable in Environment variable or by app.get().',
          param, configVariable, varName);
        debug('Dynamic Configuration: Cannot resolve variable for `%s`, ' +
          'returned as %s', varName, configVariable);
      }
    }
    return configVariable;
  }

  function interpolateVariables(config) {
    // config is a string and contains a config variable ('${var}')
    if (typeof config === 'string')
      return getConfigVariable(config);

    // anything but an array or object
    if (typeof config !== 'object' || config == null)
      return config;

    // recurse into array elements
    if (Array.isArray(config))
      return config.map(interpolateVariables);

    // Not a plain object. Examples: RegExp, Date,
    if (!config.constructor || config.constructor !== Object)
      return config;

    // recurse into object props
    var interpolated = {};
    Object.keys(config).forEach(function(configKey) {
      var value = config[configKey];
      if (Array.isArray(value)) {
        interpolated[configKey] = value.map(interpolateVariables);
      } else if (typeof value === 'string') {
        interpolated[configKey] = getConfigVariable(value);
      } else if (value === null) {
        interpolated[configKey] = value;
      } else if (typeof value === 'object' && Object.keys(value).length) {
        interpolated[configKey] = interpolateVariables(value);
      } else {
        interpolated[configKey] = value;
      }
    });
    return interpolated;
  }

  return interpolateVariables(config);
}

function setupComponents(app, instructions) {
  instructions.components.forEach(function(data) {
    debug('Configuring component %j', data.sourceFile);
    var configFn = requireNodeOrEsModule(data.sourceFile);
    var opts = {
      useEnvVars: true,
    };
    data.config = getUpdatedConfigObject(app, data.config, opts);
    configFn(app, data.config);
  });
}

function runBootScripts(app, instructions, callback) {
  runScripts(app, instructions.files.boot, callback);
}

function enableAnonymousSwagger(app, instructions) {
  // disable token requirement for swagger, if available
  var swagger = app.remotes().exports.swagger;
  if (!swagger) return;

  var appConfig = instructions.config;
  var requireTokenForSwagger = appConfig.swagger &&
    appConfig.swagger.requireToken;
  swagger.requireToken = requireTokenForSwagger || false;
}


/***/ }),

/***/ "./node_modules/loopback-boot/lib/require.js":
/*!***************************************************!*\
  !*** ./node_modules/loopback-boot/lib/require.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright IBM Corp. 2015,2017. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function requireNodeOrEsModule(sourceFile) {
  var exports = __webpack_require__("./node_modules/loopback-boot/lib sync recursive")(sourceFile);
  return exports && exports.__esModule ? exports.default : exports;
};


/***/ }),

/***/ "./server/boot/authentication.js":
/*!***************************************!*\
  !*** ./server/boot/authentication.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();
};


/***/ }),

/***/ "./server/boot/create-sample-models.js":
/*!*********************************************!*\
  !*** ./server/boot/create-sample-models.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([
      {name: 'Bel Cafe', city: 'Vancouver'},
      {name: 'Three Bees Coffee House', city: 'San Mateo'},
      {name: 'Caffe Artigiano', city: 'Vancouver'},
    ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};


/***/ }),

/***/ "./server/boot/root.js":
/*!*****************************!*\
  !*** ./server/boot/root.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};


/***/ }),

/***/ "./server/boot/routes.js":
/*!*******************************!*\
  !*** ./server/boot/routes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
};


/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// install source-map support so we get mapped stack traces.
__webpack_require__(/*! source-map-support */ "source-map-support").install();

var loopback = __webpack_require__(/*! loopback */ "loopback");

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
console.log('Executing boot instructions...');
// instructions are provided by an explicit webpack resolve
// alias (see gulpfile.js).
var ins = __webpack_require__(/*! boot-instructions.json */ "../../../../../tmp/boot-instructions-11902-17313-16vwm81.j13k.json");
// install the external dynamic configuration.
ins.config = __webpack_require__(/*! ./config.json */ "./config.json");
ins.dataSources = __webpack_require__(/*! ./datasources.json */ "./datasources.json");
var execute = __webpack_require__(/*! loopback-boot/lib/executor */ "./node_modules/loopback-boot/lib/executor.js");
execute(app, ins, function (err) {
    if (err) {
        console.error(`Boot error: ${err}`);
        throw err;
    }
    console.log('Starting server...');
    // NOTE/TODO: the require.main === module check fails here under webpack
    // so we're not doing it.
    var server = app.start();
});
console.log('Done.');


/***/ }),

/***/ "/home/wj42/work/training/loopback-webpack-example/node_modules/compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "/home/wj42/work/training/loopback-webpack-example/node_modules/errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),

/***/ "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback-component-explorer/index.js":
/*!*******************************************************!*\
  !*** external "loopback-component-explorer/index.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback-component-explorer/index.js");

/***/ }),

/***/ "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/access-token.js":
/*!*********************************************************!*\
  !*** external "loopback/common/models/access-token.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback/common/models/access-token.js");

/***/ }),

/***/ "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/acl.js":
/*!************************************************!*\
  !*** external "loopback/common/models/acl.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback/common/models/acl.js");

/***/ }),

/***/ "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/role-mapping.js":
/*!*********************************************************!*\
  !*** external "loopback/common/models/role-mapping.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback/common/models/role-mapping.js");

/***/ }),

/***/ "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/role.js":
/*!*************************************************!*\
  !*** external "loopback/common/models/role.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback/common/models/role.js");

/***/ }),

/***/ "/home/wj42/work/training/loopback-webpack-example/node_modules/loopback/common/models/user.js":
/*!*************************************************!*\
  !*** external "loopback/common/models/user.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback/common/models/user.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "async":
/*!************************!*\
  !*** external "async" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "loopback":
/*!***************************!*\
  !*** external "loopback" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "semver":
/*!*************************!*\
  !*** external "semver" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),

/***/ "strong-globalize":
/*!***********************************!*\
  !*** external "strong-globalize" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("strong-globalize");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ })));
//# sourceMappingURL=main.bundle.js.map