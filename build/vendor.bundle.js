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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/loopback-boot/index.js":
/*!*********************************************!*\
  !*** ./node_modules/loopback-boot/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

// Strong globalize
var SG = __webpack_require__(/*! strong-globalize */ "strong-globalize");
SG.SetRootDir(__dirname);

var ConfigLoader = __webpack_require__(/*! ./lib/config-loader */ "./node_modules/loopback-boot/lib/config-loader.js");
var compile = __webpack_require__(/*! ./lib/compiler */ "./node_modules/loopback-boot/lib/compiler.js");
var execute = __webpack_require__(/*! ./lib/executor */ "./node_modules/loopback-boot/lib/executor.js");
var addInstructionsToBrowserify = __webpack_require__(/*! ./lib/bundler */ "./node_modules/loopback-boot/lib/bundler.js");
var utils = __webpack_require__(/*! ./lib/utils */ "./node_modules/loopback-boot/lib/utils.js");

/**
 * Initialize an application from an options object or
 * a set of JSON and JavaScript files.
 *
 * > **NOTE**: This module is primarily intended for use with LoopBack 2.0.
 * It _does_ work with LoopBack 1.x applications, but
 * none of the LoopBack 1.x examples or generated code (scaffolding) use it.
 *
 * This function takes an optional argument that is either a string
 * or an object.
 *
 * If the argument is a string, then it sets the application root directory
 * based on the string value. Then it:
 *
 *  1. Creates DataSources from the `datasources.json` file in the application
 *   root directory.
 *
 *  2. Configures Models from the `model-config.json` file in the application
 *    root directory.
 *
 *  3. Configures the LoopBack Application object from the `config.json` file
 *     in the application root directory. These properties can be accessed
 *     using `app.get('propname')`.
 *
 * If the argument is an object, then it looks for `models`, `dataSources`,
 * 'config', `modelsRootDir`, `dsRootDir`, `appConfigRootDir` and `appRootDir`
 * properties of the object.
 *
 * If the object has no `appRootDir` property then it sets the current working
 * directory as the application root directory.
 *
 * The execution environment, {env}, is established from, in order,
 *  - `options.env`
 *  - `process.env.NODE_ENV`,
 *  - the literal `development`.
 *
 * Then it:
 *
 *  1. Creates DataSources from the `options.dataSources` object, if provided;
 *    otherwise, it searches for the files
 *     - `datasources.json`,
 *     - `datasources.local.js` or `datasources.local.json` (only one),
 *     - `datasources.{env}.js` or `datasources.{env}.json` (only one)
 *
 *    in the directory designated by 'options.dsRootDir', if present, or the
 *    application root directory. It merges the data source definitions from
 *    the files found.
 *
 *  2. Creates Models from the `options.models` object, if provided;
 *    otherwise, it searches for the files
 *     - `model-config.json`,
 *     - `model-config.local.js` or `model-config.local.json` (only one),
 *     - `model-config.{env}.js` or `model-config.{env}.json` (only one)
 *
 *    in the directory designated by 'options.modelsRootDir', if present, or
 *    the application root directory. It merges the model definitions from the
 *    files found.
 *
 *  3. Configures the Application object from the `options.config` object,
 *    if provided;
 *    otherwise, it searches for the files
 *     - `config.json`,
 *     - `config.local.js` or `config.local.json` (only one),
 *     - `config.{env}.js` or `config.{env}.json` (only one)
 *
 *    in the directory designated by 'options.appConfigRootDir', if present, or
 *    the application root directory. It merges the properties from the files
 *    found.
 *
 * In both cases, the function loads JavaScript files in the
 * `/boot` subdirectory of the application root directory with `require()`.
 *
 *  **NOTE:** The version 2.0 of loopback-boot changed the way how models
 *  are created. The `model-config.json` file contains only configuration
 *  options like dataSource and extra relations. To define a model,
 *  create a per-model JSON file in `models/` directory.
 *
 *  **NOTE:** Mixing `bootLoopBackApp(app, bootConfig)` and
 *  `app.model(name, modelConfig)` in multiple
 *  files may result in models being undefined due to race conditions.
 *  To avoid this when using `bootLoopBackApp()` make sure all models are passed
 *  as part of the `models` definition.
 *
 * Throws an error if the config object is not valid or if boot fails.
 *
 * @param app LoopBack application created by `loopback()`.
 * @options {String|Object} options Boot options; If String, this is
 * the application root directory; if object, has below properties.
 * @property {String} [appRootDir] Directory to use when loading JSON and
 * JavaScript files.
 * Defaults to the current directory (`process.cwd()`).
 * @property {String} [appConfigRootDir] Directory to use when loading
 * `config.json`. Defaults to `appRootDir`.
 * @property {Object} [models] Object containing `Model` configurations.
 * @property {Array} [modelDefinitions] List of model definitions to use.
 *   When `options.modelDefinitions` is provided, loopback-boot does not
 *   search filesystem and use only the models provided in this argument.
 * @property {Object} [dataSources] Object containing `DataSource` definitions.
 * @property {String} [modelsRootDir] Directory to use when loading
 * `model-config.json`. Defaults to `appRootDir`.
 * @property {String} [dsRootDir] Directory to use when loading
 * `datasources.json`. Defaults to `appRootDir`.
 * @property {String} [middlewareRootDir] Directory to use when loading
 * `middleware.json`. Defaults to `appRootDir`.
 * @property {String} [componentRootDir] Directory to use when loading
 * `component-config.json`. Defaults to `appRootDir`.
 * @property {String} [env] Environment type, defaults to `process.env.NODE_ENV`
 * or `development`. Common values are `development`, `staging` and
 * `production`; however the applications are free to use any names.
 * @property {Array.<String>} [modelSources] List of directories where to look
 * for files containing model definitions.
 * @property {Object} [middleware] Middleware configuration to use instead
 * of `{appRootDir}/middleware.json`
 * @property {Object} [components] Component configuration to use instead
 * of `{appRootDir}/component-config.json`
 * @property {Array.<String>} [mixinDirs] List of directories where to look
 * for files containing model mixin definitions. All files (mixins) found
 * in these directory are loaded.
 * @property {Array.<String>} [mixinSources] List of directories where to look
 * for files containing model mixin definitions. Only mixins used by
 * application models are loaded from these directories.
 * @property {Array.<String>} [bootDirs] List of directories where to look
 * for boot scripts.
 * @property {Array.<String>} [bootScripts] List of script files to execute
 * on boot.
 * @property {String|Function|Boolean} [normalization] Mixin normalization
 * format: false, 'none', 'classify', 'dasherize' - defaults to 'classify'.
 * @end
 * @param {Function} [callback] Callback function.
 *
 * @header boot(app, [options], [callback])
 */

exports = module.exports = function bootLoopBackApp(app, options, callback) {
  // backwards compatibility with loopback's app.boot
  options.env = options.env || app.get('env');

  var instructions = compile(options);
  execute(app, instructions, callback);
};

/**
 * Compile boot instructions and add them to a browserify bundler.
 * @param {Object|String} options as described in `bootLoopBackApp` above.
 * @property {String} [appId] Application identifier used to load the correct
 * boot configuration when building multiple applications using browserify.
 * @end
 * @param {Object} bundler A browserify bundler created by `browserify()`.
 *
 * @header boot.compileToBrowserify(options, bundler)
 */
exports.compileToBrowserify = function(options, bundler) {
  addInstructionsToBrowserify(compile(options), bundler);
};

/* -- undocumented low-level API -- */

exports.ConfigLoader = ConfigLoader;
exports.compile = compile;
exports.execute = execute;
exports.utils = utils;
exports.addInstructionsToBrowserify = addInstructionsToBrowserify;


/***/ }),

/***/ "./node_modules/loopback-boot/lib sync recursive":
/*!*********************************************!*\
  !*** ./node_modules/loopback-boot/lib sync ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common/models/coffee-shop.js": "./common/models/coffee-shop.js",
	"./node_modules/compression": "compression",
	"./node_modules/errorhandler": "errorhandler",
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

/***/ "./node_modules/loopback-boot/lib/bundler.js":
/*!***************************************************!*\
  !*** ./node_modules/loopback-boot/lib/bundler.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");
var commondir = __webpack_require__(/*! commondir */ "commondir");
var cloneDeep = __webpack_require__(/*! lodash */ "lodash").cloneDeep;
var g = __webpack_require__(/*! strong-globalize */ "strong-globalize")();

/**
 * Add boot instructions to a browserify bundler.
 * @param {Object} instructions Boot instructions.
 * @param {Object} bundler A browserify object created by `browserify()`.
 */

module.exports = function addInstructionsToBrowserify(instructions, bundler) {
  bundleModelScripts(instructions, bundler);
  bundleMixinScripts(instructions, bundler);
  bundleComponentScripts(instructions, bundler);
  bundleOtherScripts(instructions, bundler);
  bundleInstructions(instructions, bundler);
};

function bundleOtherScripts(instructions, bundler) {
  for (var key in instructions.files) {
    addScriptsToBundle(key, instructions.files[key], bundler);
  }
}

function bundleModelScripts(instructions, bundler) {
  bundleSourceFiles(instructions, 'models', bundler);
}

function bundleMixinScripts(instructions, bundler) {
  bundleSourceFiles(instructions, 'mixins', bundler);
}

function bundleComponentScripts(instructions, bundler) {
  bundleSourceFiles(instructions, 'components', bundler);
}

function bundleSourceFiles(instructions, type, bundler) {
  var files = instructions[type]
    .map(function(m) { return m.sourceFile; })
    .filter(function(f) { return !!f; });

  var instructionToFileMapping = instructions[type]
    .map(function(m) { return files.indexOf(m.sourceFile); });

  addScriptsToBundle(type, files, bundler);

  // Update `sourceFile` properties with the new paths
  instructionToFileMapping.forEach(function(fileIx, sourceIx) {
    if (fileIx === -1) return;
    instructions[type][sourceIx].sourceFile = files[fileIx];
  });
}

function addScriptsToBundle(name, list, bundler) {
  if (!list.length) return;

  var root = commondir(list.map(path.dirname));

  for (var ix in list) {
    var filepath = list[ix];

    // Build a short unique id that does not expose too much
    // information about the file system, but still preserves
    // useful information about where is the file coming from.
    var fileid = 'loopback-boot#' + name + '#' + path.relative(root, filepath);

    // Add the file to the bundle.
    bundler.require(filepath, { expose: fileid });

    // Rewrite the instructions entry with the new id that will be
    // used to load the file via `require(fileid)`.
    list[ix] = fileid;
  }
}

function bundleInstructions(instructions, bundler) {
  instructions = cloneDeep(instructions);

  var hasMiddleware = instructions.middleware.phases.length ||
    instructions.middleware.middleware.length;
  if (hasMiddleware) {
    g.warn(
      'Discarding {{middleware}} instructions,' +
      ' {{loopback}} client does not support {{middleware}}.');
  }
  delete instructions.middleware;

  var instructionsString = JSON.stringify(instructions, null, 2);

  /* The following code does not work due to a bug in browserify
   * https://github.com/substack/node-browserify/issues/771
   var instructionsStream = require('resumer')()
     .queue(instructionsString);
   instructionsStream.path = 'boot-instructions';
   b.require(instructionsStream, { expose: 'loopback-boot#instructions' });
   */

  var instructionId = 'instructions';
  // Create an unique instruction identifier using the application ID.
  // This is only useful when multiple loopback applications are being bundled
  // together.
  if (instructions.appId)
    instructionId += '-' + instructions.appId;

  // Write the instructions to a file in our node_modules folder.
  // The location should not really matter as long as it is .gitignore-ed
  var instructionsFile = path.resolve(__dirname,
    '..', 'generated-' + instructionId + '.json');
  fs.writeFileSync(instructionsFile, instructionsString, 'utf-8');

  var moduleName = 'loopback-boot#' + instructionId;
  bundler.require(instructionsFile, { expose: moduleName });
}


/***/ }),

/***/ "./node_modules/loopback-boot/lib/compiler.js":
/*!****************************************************!*\
  !*** ./node_modules/loopback-boot/lib/compiler.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var assert = __webpack_require__(/*! assert */ "assert");
var cloneDeep = __webpack_require__(/*! lodash */ "lodash").cloneDeep;
var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");
var toposort = __webpack_require__(/*! toposort */ "toposort");
var ConfigLoader = __webpack_require__(/*! ./config-loader */ "./node_modules/loopback-boot/lib/config-loader.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/loopback-boot/lib/utils.js");
var debug = __webpack_require__(/*! debug */ "debug")('loopback:boot:compiler');
var Module = __webpack_require__(/*! module */ "module");
var _ = __webpack_require__(/*! lodash */ "lodash");
var g = __webpack_require__(/*! strong-globalize */ "strong-globalize")();
var requireNodeOrEsModule = __webpack_require__(/*! ./require */ "./node_modules/loopback-boot/lib/require.js");

var FILE_EXTENSION_JSON = '.json';

function arrayToObject(array) {
  return array.reduce(function(obj, val) {
    obj[val] = val;
    return obj;
  }, {});
}

/**
 * Gather all bootstrap-related configuration data and compile it into
 * a single object containing instruction for `boot.execute`.
 *
 * @options {String|Object} options Boot options; If String, this is
 * the application root directory; if object, has the properties
 * described in `bootLoopBackApp` options above.
 * @return {Object}
 *
 * @header boot.compile(options)
 */

module.exports = function compile(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = { appRootDir: options };
  }

  // For setting properties without modifying the original object
  options = Object.create(options);

  var appRootDir = options.appRootDir = options.appRootDir || process.cwd();
  var env = options.env || undefined || 'development';
  var scriptExtensions = options.scriptExtensions ?
    arrayToObject(options.scriptExtensions) :
    (void 0);

  var appConfigRootDir = options.appConfigRootDir || appRootDir;
  var appConfig = options.config ||
    ConfigLoader.loadAppConfig(appConfigRootDir, env);
  assertIsValidConfig('app', appConfig);

  var modelsRootDir = options.modelsRootDir || appRootDir;
  var modelsConfig = options.models ||
    ConfigLoader.loadModels(modelsRootDir, env);
  assertIsValidModelConfig(modelsConfig);

  var dsRootDir = options.dsRootDir || appRootDir;
  var dataSourcesConfig = options.dataSources ||
    ConfigLoader.loadDataSources(dsRootDir, env);
  assertIsValidConfig('data source', dataSourcesConfig);

  var middlewareRootDir = options.middlewareRootDir || appRootDir;

  var middlewareConfig = options.middleware ||
    ConfigLoader.loadMiddleware(middlewareRootDir, env);
  var middlewareInstructions =
    buildMiddlewareInstructions(middlewareRootDir, middlewareConfig);

  var componentRootDir = options.componentRootDir || appRootDir;
  var componentConfig = options.components ||
      ConfigLoader.loadComponents(componentRootDir, env);
  var componentInstructions =
    buildComponentInstructions(componentRootDir, componentConfig);

  // require directories
  var bootDirs = options.bootDirs || []; // precedence
  bootDirs = bootDirs.concat(path.join(appRootDir, 'boot'));
  resolveRelativePaths(bootDirs, appRootDir);

  var bootScripts = options.bootScripts || [];
  resolveRelativePaths(bootScripts, appRootDir);

  bootDirs.forEach(function(dir) {
    bootScripts = bootScripts.concat(findScripts(dir, scriptExtensions));
    var envdir = dir + '/' + env;
    bootScripts = bootScripts.concat(findScripts(envdir, scriptExtensions));
  });

  // de-dedup boot scripts -ERS
  // https://github.com/strongloop/loopback-boot/issues/64
  bootScripts = _.uniq(bootScripts);

  var modelsMeta = modelsConfig._meta || {};
  delete modelsConfig._meta;

  var modelSources = options.modelSources || modelsMeta.sources || ['./models'];
  var modelInstructions = buildAllModelInstructions(
    modelsRootDir, modelsConfig, modelSources, options.modelDefinitions,
    scriptExtensions);

  var mixinSources = options.mixinSources || modelsMeta.mixins || ['./mixins'];
  var mixinInstructions = buildAllMixinInstructions(
    appRootDir, options, mixinSources, scriptExtensions, modelInstructions);

  // When executor passes the instruction to loopback methods,
  // loopback modifies the data. Since we are loading the data using `require`,
  // such change affects also code that calls `require` for the same file.
  var instructions = {
    env: env,
    config: appConfig,
    dataSources: dataSourcesConfig,
    models: modelInstructions,
    middleware: middlewareInstructions,
    components: componentInstructions,
    mixins: mixinInstructions,
    files: {
      boot: bootScripts,
    },
  };

  if (options.appId)
    instructions.appId = options.appId;

  return cloneDeep(instructions);
};

function assertIsValidConfig(name, config) {
  if (config) {
    assert(typeof config === 'object',
      g.f('%s config must be a valid JSON object', name));
  }
}

function assertIsValidModelConfig(config) {
  assertIsValidConfig('model', config);
  for (var name in config) {
    var entry = config[name];
    var options = entry.options || {};
    var unsupported = entry.properties ||
      entry.base || options.base ||
      entry.plural || options.plural;

    if (unsupported) {
      throw new Error(
        g.f('The data in {{model-config.json}}' +
          ' is in the unsupported 1.x format.'));
    }
  }
}

/**
 * Find all javascript files (except for those prefixed with _)
 * and all directories.
 * @param {String} dir Full path of the directory to enumerate.
 * @return {Array.<String>} A list of absolute paths to pass to `require()`.
 * @private
 */

function findScripts(dir, scriptExtensions) {
  assert(dir, g.f('cannot require directory contents without directory name'));

  var files = tryReadDir(dir);
  scriptExtensions = scriptExtensions || (void 0);

  // sort files in lowercase alpha for linux
  files.sort(function(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  });

  var results = [];
  files.forEach(function(filename) {
    // ignore index.js and files prefixed with underscore
    if (filename === 'index.js' || filename[0] === '_') {
      return;
    }

    var filepath = path.resolve(path.join(dir, filename));
    var stats = fs.statSync(filepath);

    // only require files supported by specified extensions
    if (stats.isFile()) {
      if (scriptExtensions && isPreferredExtension(filename, scriptExtensions))
        results.push(filepath);
      else
        debug('Skipping file %s - unknown extension', filepath);
    } else {
      debug('Skipping directory %s', filepath);
    }
  });

  return results;
}

function tryReadDir() {
  try {
    return fs.readdirSync.apply(fs, arguments);
  } catch (e) {
    return [];
  }
}

function buildAllModelInstructions(rootDir, modelsConfig, sources,
                                   modelDefinitions, scriptExtensions) {
  var registry = verifyModelDefinitions(rootDir, modelDefinitions,
                                        scriptExtensions);
  if (!registry) {
    registry = findModelDefinitions(rootDir, sources, scriptExtensions);
  }

  var modelNamesToBuild = addAllBaseModels(registry, Object.keys(modelsConfig));

  var instructions = modelNamesToBuild
    .map(function createModelInstructions(name) {
      var config = modelsConfig[name];
      var definition = registry[name] || {};

      debug('Using model "%s"\nConfiguration: %j\nDefinition %j',
        name, config, definition.definition);

      return {
        name: name,
        config: config,
        definition: definition.definition,
        sourceFile: definition.sourceFile,
      };
    });

  return sortByInheritance(instructions);
}

function addAllBaseModels(registry, modelNames) {
  var result = [];
  var visited = {};

  while (modelNames.length) {
    var name = modelNames.shift();

    if (visited[name]) continue;
    visited[name] = true;
    result.push(name);

    var definition = registry[name] && registry[name].definition;
    if (!definition) continue;

    var base = getBaseModelName(definition);

    // ignore built-in models like User
    if (!registry[base]) continue;

    modelNames.push(base);
  }

  return result;
}

function getBaseModelName(modelDefinition) {
  if (!modelDefinition)
    return undefined;

  return modelDefinition.base ||
    modelDefinition.options && modelDefinition.options.base;
}

function sortByInheritance(instructions) {
  // create edges Base name -> Model name
  var edges = instructions
    .map(function(inst) {
      return [getBaseModelName(inst.definition), inst.name];
    });

  var sortedNames = toposort(edges);

  var instructionsByModelName = {};
  instructions.forEach(function(inst) {
    instructionsByModelName[inst.name] = inst;
  });

  return sortedNames
    // convert to instructions
    .map(function(name) {
      return instructionsByModelName[name];
    })
    // remove built-in models
    .filter(function(inst) {
      return !!inst;
    });
}

function verifyModelDefinitions(rootDir, modelDefinitions, scriptExtensions) {
  if (!modelDefinitions || modelDefinitions.length < 1) {
    return undefined;
  }

  var registry = {};
  modelDefinitions.forEach(function(definition, idx) {
    if (definition.sourceFile) {
      var fullPath = path.resolve(rootDir, definition.sourceFile);
      definition.sourceFile = fixFileExtension(
        fullPath,
        tryReadDir(path.dirname(fullPath)),
        scriptExtensions);
      if (!definition.sourceFile) {
        debug('Model source code not found: %s - %s', definition.sourceFile);
      }
    }

    debug('Found model "%s" - %s %s',
      definition.definition.name,
      'from options',
      definition.sourceFile ?
        path.relative(rootDir, definition.sourceFile) :
        '(no source file)');

    var modelName = definition.definition.name;
    if (!modelName) {
      debug('Skipping model definition without Model name ' +
        '(from options.modelDefinitions @ index %s)',
         idx);
      return;
    }
    registry[modelName] = definition;
  });

  return registry;
}

function findModelDefinitions(rootDir, sources, scriptExtensions) {
  var registry = {};

  sources.forEach(function(src) {
    var srcDir = tryResolveAppPath(rootDir, src, { strict: false });
    if (!srcDir) {
      debug('Skipping unknown module source dir %j', src);
      return;
    }

    var files = tryReadDir(srcDir);

    files
      .filter(function(f) {
        return f[0] !== '_' && path.extname(f) === '.json';
      })
      .forEach(function(f) {
        var fullPath = path.resolve(srcDir, f);
        var entry = loadModelDefinition(rootDir, fullPath, files,
                                        scriptExtensions);
        var modelName = entry.definition.name;
        if (!modelName) {
          debug('Skipping model definition without Model name: %s',
            path.relative(srcDir, fullPath));
          return;
        }
        registry[modelName] = entry;
      });
  });

  return registry;
}

function resolveAppPath(rootDir, relativePath, resolveOptions) {
  var resolvedPath = tryResolveAppPath(rootDir, relativePath, resolveOptions);
  if (resolvedPath === undefined && !resolveOptions.optional) {
    var err = new Error(g.f('Cannot resolve path "%s"', relativePath));
    err.code = 'PATH_NOT_FOUND';
    throw err;
  }
  return resolvedPath;
}

function tryResolveAppPath(rootDir, relativePath, resolveOptions) {
  var fullPath;
  var start = relativePath.substring(0, 2);

  /* In order to retain backward compatibility, we need to support
   * two ways how to treat values that are not relative nor absolute
   * path (e.g. `relativePath = 'foobar'`)
   *  - `resolveOptions.strict = true` searches in `node_modules` only
   *  - `resolveOptions.strict = false` attempts to resolve the value
   *     as a relative path first before searching `node_modules`
   */
  resolveOptions = resolveOptions || { strict: true };

  var isModuleRelative = false;
  // would love to use `path.isAbsolute(relativePath)` from node's core module `path`
  // but unfortunately that is not available in node v0.10.x
  // https://nodejs.org/dist/latest-v6.x/docs/api/path.html#path_path_isabsolute_path
  if (relativePath[0] === '/' || /^[a-zA-Z]:[\\]{1,2}/.test(relativePath)) {
    fullPath = relativePath;
  } else if (start === './' || start === '..') {
    fullPath = path.resolve(rootDir, relativePath);
  } else if (!resolveOptions.strict) {
    isModuleRelative = true;
    fullPath = path.resolve(rootDir, relativePath);
  }

  if (fullPath) {
    // This check is needed to support paths pointing to a directory
    if (utils.fileExistsSync(fullPath)) {
      return fullPath;
    }

    try {
      fullPath = /*require.resolve*/(__webpack_require__("./node_modules/loopback-boot/lib sync recursive").resolve(fullPath));
      return fullPath;
    } catch (err) {
      if (!isModuleRelative) {
        debug ('Skipping %s - %s', fullPath, err);
        return undefined;
      }
    }
  }

  // Handle module-relative path, e.g. `loopback/common/models`

  // Module.globalPaths is a list of globally configured paths like
  //   [ env.NODE_PATH values, $HOME/.node_modules, etc. ]
  // Module._nodeModulePaths(rootDir) returns a list of paths like
  //   [ rootDir/node_modules, rootDir/../node_modules, etc. ]
  var modulePaths = Module.globalPaths
    .concat(Module._nodeModulePaths(rootDir));

  fullPath = modulePaths
    .map(function(candidateDir) {
      var absPath = path.join(candidateDir, relativePath);
      try {
        // NOTE(bajtos) We need to create a proper String object here,
        // otherwise we can't attach additional properties to it
        var filePath = new String(/*require.resolve*/(__webpack_require__("./node_modules/loopback-boot/lib sync recursive").resolve(absPath)));
        filePath.unresolvedPath = absPath;
        return filePath;
      } catch (err) {
        return absPath;
      }
    })
    .filter(function(candidate) {
      return utils.fileExistsSync(candidate.toString());
    })
    [0];

  if (fullPath) {
    if (fullPath.unresolvedPath && resolveOptions.fullResolve === false)
      return fullPath.unresolvedPath;
    // Convert String object back to plain string primitive
    return fullPath.toString();
  }

  debug ('Skipping %s - module not found', fullPath);
  return undefined;
}

function loadModelDefinition(rootDir, jsonFile, allFiles, scriptExtensions) {
  var definition = __webpack_require__("./node_modules/loopback-boot/lib sync recursive")(jsonFile);
  var basename = path.basename(jsonFile, path.extname(jsonFile));
  definition.name = definition.name || _.upperFirst(_.camelCase(basename));

  // find a matching file with a supported extension like `.js` or `.coffee`
  var sourceFile = fixFileExtension(jsonFile, allFiles, scriptExtensions);

  if (sourceFile === undefined) {
    debug('Model source code not found: %s', sourceFile);
  }

  debug('Found model "%s" - %s %s', definition.name,
    path.relative(rootDir, jsonFile),
    sourceFile ? path.relative(rootDir, sourceFile) : '(no source file)');

  return {
    definition: definition,
    sourceFile: sourceFile,
  };
}

function buildMiddlewareInstructions(rootDir, config) {
  var phasesNames = Object.keys(config);
  var middlewareList = [];
  phasesNames.forEach(function(phase) {
    var phaseConfig = config[phase];
    Object.keys(phaseConfig).forEach(function(middleware) {
      var allConfigs = phaseConfig[middleware];
      if (!Array.isArray(allConfigs))
        allConfigs = [allConfigs];

      allConfigs.forEach(function(config) {
        var resolved = resolveMiddlewarePath(rootDir, middleware, config);

        // resolved.sourceFile will be false-y if an optional middleware
        // is not resolvable.
        // if a non-optional middleware is not resolvable, it will throw
        // at resolveAppPath() and not reach here
        if (!resolved.sourceFile) {
          return g.log('{{Middleware}} "%s" not found: %s',
            middleware,
            resolved.optional
          );
        }

        var middlewareConfig = cloneDeep(config);
        middlewareConfig.phase = phase;

        if (middlewareConfig.params) {
          middlewareConfig.params = resolveMiddlewareParams(
            rootDir, middlewareConfig.params);
        }

        var item = {
          sourceFile: resolved.sourceFile,
          config: middlewareConfig,
        };
        if (resolved.fragment) {
          item.fragment = resolved.fragment;
        }
        middlewareList.push(item);
      });
    });
  });

  var flattenedPhaseNames = phasesNames
    .map(function getBaseName(name) {
      return name.replace(/:[^:]+$/, '');
    })
    .filter(function differsFromPreviousItem(value, ix, source) {
      // Skip duplicate entries. That happens when
      // `name:before` and `name:after` are both translated to `name`
      return ix === 0 || value !== source[ix - 1];
    });

  return {
    phases: flattenedPhaseNames,
    middleware: middlewareList,
  };
}

function resolveMiddlewarePath(rootDir, middleware, config) {
  var resolved = {
    optional: !!config.optional,
  };

  var segments = middleware.split('#');
  var pathName = segments[0];
  var fragment = segments[1];
  var middlewarePath = pathName;
  var opts = {
    strict: true,
    optional: !!config.optional,
  };

  if (fragment) {
    resolved.fragment = fragment;
  }

  if (pathName.indexOf('./') === 0 || pathName.indexOf('../') === 0) {
    // Relative path
    pathName = path.resolve(rootDir, pathName);
  }

  var resolveOpts = _.extend(opts, {
    // Workaround for strong-agent to allow probes to detect that
    // strong-express-middleware was loaded: exclude the path to the
    // module main file from the source file path.
    // For example, return
    //   node_modules/strong-express-metrics
    // instead of
    //   node_modules/strong-express-metrics/index.js
    fullResolve: false,
  });
  var sourceFile = resolveAppScriptPath(rootDir, middlewarePath, resolveOpts);

  if (!fragment) {
    resolved.sourceFile = sourceFile;
    return resolved;
  }

  // Try to require the module and check if <module>.<fragment> is a valid
  // function
  var m = requireNodeOrEsModule(sourceFile);
  if (typeof m[fragment] === 'function') {
    resolved.sourceFile = sourceFile;
    return resolved;
  }

  /*
   * module/server/middleware/fragment
   * module/middleware/fragment
   */
  var candidates = [
    pathName + '/server/middleware/' + fragment,
    pathName + '/middleware/' + fragment,
    // TODO: [rfeng] Should we support the following flavors?
    // pathName + '/lib/' + fragment,
    // pathName + '/' + fragment
  ];

  var err = undefined; // see https://github.com/eslint/eslint/issues/5744
  for (var ix in candidates) {
    try {
      resolved.sourceFile = resolveAppScriptPath(rootDir, candidates[ix], opts);
      delete resolved.fragment;
      return resolved;
    } catch (e) {
      // Report the error for the first candidate when no candidate matches
      if (!err) err = e;
    }
  }
  throw err;
}

// Match values starting with `$!./` or `$!../`
var MIDDLEWARE_PATH_PARAM_REGEX = /^\$!(\.\/|\.\.\/)/;

function resolveMiddlewareParams(rootDir, params) {
  return _.cloneDeepWith(params, function resolvePathParam(value) {
    if (typeof value === 'string' && MIDDLEWARE_PATH_PARAM_REGEX.test(value)) {
      return path.resolve(rootDir, value.slice(2));
    } else {
      return undefined; // no change
    }
  });
}

function buildComponentInstructions(rootDir, componentConfig) {
  return Object.keys(componentConfig)
    .filter(function(name) { return !!componentConfig[name]; })
    .map(function(name) {
      return {
        sourceFile: resolveAppScriptPath(rootDir, name, { strict: true }),
        config: componentConfig[name],
      };
    });
}

function resolveRelativePaths(relativePaths, appRootDir) {
  var resolveOpts = { strict: false };
  relativePaths.forEach(function(relativePath, k) {
    var resolvedPath = tryResolveAppPath(appRootDir, relativePath, resolveOpts);
    if (resolvedPath !== undefined) {
      relativePaths[k] = resolvedPath;
    } else {
      debug ('skipping boot script %s - unknown file', relativePath);
    }
  });
}

function getExcludedExtensions() {
  return {
    '.json': '.json',
    /**
     * This is a temporary workaround for #246
     * See discussion here for full description of the underlying issue
     * https://github.com/strongloop/loopback-boot/pull/245#issuecomment-311052798
     */
    '.map': '.map',
    '.node': 'node',
  };
}

function isPreferredExtension(filename, includeExtensions) {
  assert(!!includeExtensions, '"includeExtensions" argument is required');

  var ext = path.extname(filename);
  return (ext in includeExtensions) && !(ext in getExcludedExtensions());
}

function fixFileExtension(filepath, files, scriptExtensions) {
  var results = [];
  var otherFile;

  /* Prefer coffee scripts over json */
  if (scriptExtensions && isPreferredExtension(filepath, scriptExtensions)) {
    return filepath;
  }

  var basename = path.basename(filepath, FILE_EXTENSION_JSON);
  var sourceDir = path.dirname(filepath);

  files.forEach(function(f) {
    otherFile = path.resolve(sourceDir, f);

    var stats = fs.statSync(otherFile);
    if (stats.isFile()) {
      var otherFileExtension = path.extname(f);

      if (!(otherFileExtension in getExcludedExtensions()) &&
        path.basename(f, otherFileExtension) == basename) {
        if (!scriptExtensions || otherFileExtension in scriptExtensions) {
          results.push(otherFile);
        }
      }
    }
  });
  return (results.length > 0 ? results[0] : undefined);
}

function resolveAppScriptPath(rootDir, relativePath, resolveOptions) {
  var resolvedPath = resolveAppPath(rootDir, relativePath, resolveOptions);
  if (!resolvedPath) {
    return false;
  }
  var sourceDir = path.dirname(resolvedPath);
  var files = tryReadDir(sourceDir);
  var fixedFile = fixFileExtension(resolvedPath, files);
  return (fixedFile === undefined ? resolvedPath : fixedFile);
}

function buildAllMixinInstructions(appRootDir, options, mixinSources,
                                   scriptExtensions, modelInstructions) {
  // load mixins from `options.mixins`
  var sourceFiles = options.mixins || [];
  var mixinDirs = options.mixinDirs || [];
  var instructionsFromMixins = loadMixins(sourceFiles, options.normalization);

  // load mixins from `options.mixinDirs`
  sourceFiles = findMixinDefinitions(appRootDir, mixinDirs, scriptExtensions);
  if (sourceFiles === undefined) return;
  var instructionsFromMixinDirs = loadMixins(sourceFiles,
                                             options.normalization);

  /* If `mixinDirs` and `mixinSources` have any directories in common,
   * then remove the common directories from `mixinSources` */
  mixinSources = _.difference(mixinSources, mixinDirs);

  // load mixins from `options.mixinSources`
  sourceFiles = findMixinDefinitions(appRootDir, mixinSources,
                                     scriptExtensions);
  if (sourceFiles === undefined) return;
  var instructionsFromMixinSources = loadMixins(sourceFiles,
                                                options.normalization);

  // Fetch unique list of mixin names, used in models
  var modelMixins = fetchMixinNamesUsedInModelInstructions(modelInstructions);
  modelMixins = _.uniq(modelMixins);

  // Filter-in only mixins, that are used in models
  instructionsFromMixinSources = filterMixinInstructionsUsingWhitelist(
    instructionsFromMixinSources, modelMixins);

  var mixins = _.assign(
    instructionsFromMixins,
    instructionsFromMixinDirs,
    instructionsFromMixinSources);

  return _.values(mixins);
}

function findMixinDefinitions(appRootDir, sourceDirs, scriptExtensions) {
  var files = [];
  sourceDirs.forEach(function(dir) {
    var path = tryResolveAppPath(appRootDir, dir);
    if (!path) {
      debug('Skipping unknown module source dir %j', dir);
      return;
    }
    files = files.concat(findScripts(path, scriptExtensions));
  });
  return files;
}

function loadMixins(sourceFiles, normalization) {
  var mixinInstructions = {};
  sourceFiles.forEach(function(filepath) {
    var dir = path.dirname(filepath);
    var ext = path.extname(filepath);
    var name = path.basename(filepath, ext);
    var metafile = path.join(dir, name + FILE_EXTENSION_JSON);

    name = normalizeMixinName(name, normalization);
    var meta = {};
    meta.name = name;
    if (utils.fileExistsSync(metafile)) {
      // May overwrite name, not sourceFile
      _.extend(meta, requireNodeOrEsModule(metafile));
    }
    meta.sourceFile = filepath;
    mixinInstructions[meta.name] = meta;
  });

  return mixinInstructions;
}

function fetchMixinNamesUsedInModelInstructions(modelInstructions) {
  return _.flatten(modelInstructions
  .map(function(model) {
    return model.definition && model.definition.mixins ?
      Object.keys(model.definition.mixins) : [];
  }));
}

function filterMixinInstructionsUsingWhitelist(instructions, includeMixins) {
  var instructionKeys = Object.keys(instructions);
  includeMixins = _.intersection(instructionKeys, includeMixins);

  var filteredInstructions = {};
  instructionKeys.forEach(function(mixinName) {
    if (includeMixins.indexOf(mixinName) !== -1) {
      filteredInstructions[mixinName] = instructions[mixinName];
    }
  });
  return filteredInstructions;
}

function normalizeMixinName(str, normalization) {
  switch (normalization) {
    case false:
    case 'none': return str;

    case undefined:
    case 'classify':
      str = String(str).replace(/([A-Z]+)/g, ' $1').trim();
      str = String(str).replace(/[\W_]/g, ' ').toLowerCase();
      str = str.replace(/(?:^|\s|-)\S/g, function(c) {
        return c.toUpperCase();
      });
      str = str.replace(/\s+/g, '');
      return str;

    case 'dasherize':
      str = String(str).replace(/([A-Z]+)/g, ' $1').trim();
      str = String(str).replace(/[\W_]/g, ' ').toLowerCase();
      str = str.replace(/\s+/g, '-');
      return str;

    default:
      if (typeof normalization === 'function') {
        return normalization(str);
      }

      var err = new Error(g.f('Invalid normalization format - "%s"',
        normalization));
      err.code = 'INVALID_NORMALIZATION_FORMAT';
      throw err;
  }
}


/***/ }),

/***/ "./node_modules/loopback-boot/lib/config-loader.js":
/*!*********************************************************!*\
  !*** ./node_modules/loopback-boot/lib/config-loader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var cloneDeep = __webpack_require__(/*! lodash */ "lodash").cloneDeep;
var path = __webpack_require__(/*! path */ "path");
var utils = __webpack_require__(/*! ./utils.js */ "./node_modules/loopback-boot/lib/utils.js");
var debug = __webpack_require__(/*! debug */ "debug")('loopback:boot:config-loader');
var assert = __webpack_require__(/*! assert */ "assert");
var g = __webpack_require__(/*! strong-globalize */ "strong-globalize")();

var ConfigLoader = exports;

/**
 * Load application config from `config.json` and friends.
 * @param {String} rootDir Directory where to look for files.
 * @param {String} env Environment, usually `process.env.NODE_ENV`
 * @returns {Object}
 */
ConfigLoader.loadAppConfig = function(rootDir, env) {
  return loadNamed(rootDir, env, 'config', mergeAppConfig);
};

/**
 * Load data-sources config from `datasources.json` and friends.
 * @param {String} rootDir Directory where to look for files.
 * @param {String} env Environment, usually `process.env.NODE_ENV`
 * @returns {Object}
 */
ConfigLoader.loadDataSources = function(rootDir, env) {
  return loadNamed(rootDir, env, 'datasources', mergeDataSourceConfig);
};

/**
 * Load model config from `model-config.json` and friends.
 * @param {String} rootDir Directory where to look for files.
 * @param {String} env Environment, usually `process.env.NODE_ENV`
 * @returns {Object}
 */
ConfigLoader.loadModels = function(rootDir, env) {
  return loadNamed(rootDir, env, 'model-config', mergeModelConfig);
};

/**
 * Load middleware config from `middleware.json` and friends.
 * @param {String} rootDir Directory where to look for files.
 * @param {String} env Environment, usually `process.env.NODE_ENV`
 * @returns {Object}
 */
ConfigLoader.loadMiddleware = function(rootDir, env) {
  return loadNamed(rootDir, env, 'middleware', mergeMiddlewareConfig);
};

/**
 * Load component config from `component-config.json` and friends.
 * @param {String} rootDir Directory where to look for files.
 * @param {String} env Environment, usually `process.env.NODE_ENV`
 * @returns {Object}
 */
ConfigLoader.loadComponents = function(rootDir, env) {
  return loadNamed(rootDir, env, 'component-config', mergeComponentConfig);
};

/*-- Implementation --*/

/**
 * Load named configuration.
 * @param {String} rootDir Directory where to look for files.
 * @param {String} env Environment, usually `process.env.NODE_ENV`
 * @param {String} name
 * @param {function(target:Object, config:Object, filename:String)} mergeFn
 * @returns {Object}
 */
function loadNamed(rootDir, env, name, mergeFn) {
  var files = findConfigFiles(rootDir, env, name);
  if (files.length) {
    debug('found %s %s files', env, name);
    files.forEach(function(f) { debug('  %s', f); });
  }
  var configs = loadConfigFiles(files);
  var merged = mergeConfigurations(configs, mergeFn);

  debug('merged %s %s configuration %j', env, name, merged);

  return merged;
}

/**
 * Search `appRootDir` for all files containing configuration for `name`.
 * @param {String} appRootDir
 * @param {String} env Environment, usually `process.env.NODE_ENV`
 * @param {String} name
 * @returns {Array.<String>} Array of absolute file paths.
 */
function findConfigFiles(appRootDir, env, name) {
  var master = ifExists(name + '.json');
  if (!master && (ifExistsWithAnyExt(name + '.local') ||
    ifExistsWithAnyExt(name + '.' + env))) {
    g.warn('WARNING: Main {{config}} file "%s.json" is missing', name);
  }
  if (!master) return [];

  var candidates = [
    master,
    ifExistsWithAnyExt(name + '.local'),
    ifExistsWithAnyExt(name + '.' + env),
  ];

  return candidates.filter(function(c) { return c !== undefined; });

  function ifExists(fileName) {
    var filepath = path.resolve(appRootDir, fileName);
    return utils.fileExistsSync(filepath) ? filepath : undefined;
  }

  function ifExistsWithAnyExt(fileName) {
    return ifExists(fileName + '.js') || ifExists(fileName + '.json');
  }
}

/**
 * Load configuration files into an array of objects.
 * Attach non-enumerable `_filename` property to each object.
 * @param {Array.<String>} files
 * @returns {Array.<Object>}
 */
function loadConfigFiles(files) {
  return files.map(function(f) {
    var config = cloneDeep(__webpack_require__("./node_modules/loopback-boot/lib sync recursive")(f));
    Object.defineProperty(config, '_filename', {
      enumerable: false,
      value: f,
    });
    debug('loaded config file %s: %j', f, config);
    return config;
  });
}

/**
 * Merge multiple configuration objects into a single one.
 * @param {Array.<Object>} configObjects
 * @param {function(target:Object, config:Object, filename:String)} mergeFn
 */
function mergeConfigurations(configObjects, mergeFn) {
  var result = configObjects.shift() || {};
  while (configObjects.length) {
    var next = configObjects.shift();
    mergeFn(result, next, next._filename);
  }
  return result;
}

function mergeDataSourceConfig(target, config, fileName) {
  var err = mergeObjects(target, config);
  if (err) {
    throw new Error(g.f('Cannot apply %s: %s', fileName, err));
  }
}

function mergeModelConfig(target, config, fileName) {
  var err = mergeObjects(target, config);
  if (err) {
    throw new Error(g.f('Cannot apply %s: %s', fileName, err));
  }
}

function mergeAppConfig(target, config, fileName) {
  var err = mergeObjects(target, config);
  if (err) {
    throw new Error(g.f('Cannot apply %s: %s', fileName, err));
  }
}

function mergeMiddlewareConfig(target, config, fileName) {
  var err = undefined; // see https://github.com/eslint/eslint/issues/5744
  for (var phase in config) {
    if (phase in target) {
      err = mergePhaseConfig(target[phase], config[phase], phase);
    } else {
      err = g.f('The {{phase}} "%s" is not defined in the main config.', phase);
    }
    if (err)
      throw new Error(g.f('Cannot apply %s: %s', fileName, err));
  }
}

function mergeNamedItems(arr1, arr2, key) {
  assert(Array.isArray(arr1), g.f('invalid array: %s', arr1));
  assert(Array.isArray(arr2), g.f('invalid array: %s', arr2));
  key = key || 'name';
  var result = [].concat(arr1);
  for (var i = 0, n = arr2.length; i < n; i++) {
    var item = arr2[i];
    var found = false;
    if (item[key]) {
      for (var j = 0, k = result.length; j < k; j++) {
        if (result[j][key] === item[key]) {
          mergeObjects(result[j], item);
          found = true;
          break;
        }
      }
    }
    if (!found) {
      result.push(item);
    }
  }
  return result;
}

function mergePhaseConfig(target, config, phase) {
  var err = undefined; // see https://github.com/eslint/eslint/issues/5744
  for (var mw in config) {
    if (mw in target) {
      var targetMiddleware = target[mw];
      var configMiddleware = config[mw];
      if (Array.isArray(targetMiddleware) && Array.isArray(configMiddleware)) {
        // Both are arrays, combine them
        target[mw] = mergeNamedItems(targetMiddleware, configMiddleware);
      } else if (Array.isArray(targetMiddleware)) {
        if (typeof configMiddleware === 'object' &&
          Object.keys(configMiddleware).length) {
          // Config side is an non-empty object
          target[mw] = mergeNamedItems(targetMiddleware, [configMiddleware]);
        }
      } else if (Array.isArray(configMiddleware)) {
        if (typeof targetMiddleware === 'object' &&
          Object.keys(targetMiddleware).length) {
          // Target side is an non-empty object
          target[mw] = mergeNamedItems([targetMiddleware], configMiddleware);
        } else {
          // Target side is empty
          target[mw] = configMiddleware;
        }
      } else {
        err = mergeObjects(targetMiddleware, configMiddleware);
      }
    } else {
      err = g.f('The {{middleware}} "%s" in phase "%s"' +
        'is not defined in the main config.', mw, phase);
    }
    if (err) return err;
  }
}

function mergeComponentConfig(target, config, fileName) {
  var err = mergeObjects(target, config);
  if (err) {
    throw new Error(g.f('Cannot apply %s: %s', fileName, err));
  }
}

function mergeObjects(target, config, keyPrefix) {
  for (var key in config) {
    var fullKey = keyPrefix ? keyPrefix + '.' + key : key;
    var err = mergeSingleItemOrProperty(target, config, key, fullKey);
    if (err) return err;
  }
  return null; // no error
}

function mergeSingleItemOrProperty(target, config, key, fullKey) {
  var origValue = target[key];
  var newValue = config[key];

  if (!hasCompatibleType(origValue, newValue)) {
    return 'Cannot merge values of incompatible types for the option `' +
      fullKey + '`.';
  }

  if (Array.isArray(origValue)) {
    return mergeArrays(origValue, newValue, fullKey);
  }

  if (newValue !== null && typeof origValue === 'object') {
    return mergeObjects(origValue, newValue, fullKey);
  }

  target[key] = newValue;
  return null; // no error
}

function mergeArrays(target, config, keyPrefix) {
  if (target.length !== config.length) {
    return 'Cannot merge array values of different length' +
      ' for the option `' + keyPrefix + '`.';
  }

  // Use for(;;) to iterate over undefined items, for(in) would skip them.
  for (var ix = 0; ix < target.length; ix++) {
    var fullKey = keyPrefix + '[' + ix + ']';
    var err = mergeSingleItemOrProperty(target, config, ix, fullKey);
    if (err) return err;
  }

  return null; // no error
}

function hasCompatibleType(origValue, newValue) {
  if (origValue === null || origValue === undefined)
    return true;

  if (Array.isArray(origValue))
    return Array.isArray(newValue);

  if (typeof origValue === 'object')
    return typeof newValue === 'object';

  // Note: typeof Array() is 'object' too,
  // we don't need to explicitly check array types
  return typeof newValue !== 'object';
}


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

/***/ "./node_modules/loopback-boot/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/loopback-boot/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var fs = __webpack_require__(/*! fs */ "fs");

exports.fileExistsSync = fileExistsSync;

/**
 * Check synchronously if a filepath points to an existing file.
 * Replaces calls to fs.existsSync, which is deprecated (see:
 * https://github.com/nodejs/node/pull/166).
 *
 * @param   {String} filepath The absolute path to check
 * @returns {Boolean}  True if the file exists
 */
function fileExistsSync(filepath) {
  try {
    fs.statSync(filepath);
    return true;
  } catch (e) {
    return false;
  }
}


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

/***/ 0:
/*!*******************************************************************************************************************************************************************************!*\
  !*** multi compression errorhandler loopback loopback-boot loopback-component-explorer loopback-connector-mysql loopback-datasource-juggler serve-favicon source-map-support ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! compression */"compression");
__webpack_require__(/*! errorhandler */"errorhandler");
__webpack_require__(/*! loopback */"loopback");
__webpack_require__(/*! loopback-boot */"./node_modules/loopback-boot/index.js");
__webpack_require__(/*! loopback-component-explorer */"loopback-component-explorer");
__webpack_require__(/*! loopback-connector-mysql */"loopback-connector-mysql");
__webpack_require__(/*! loopback-datasource-juggler */"loopback-datasource-juggler");
__webpack_require__(/*! serve-favicon */"serve-favicon");
module.exports = __webpack_require__(/*! source-map-support */"source-map-support");


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

/***/ "commondir":
/*!****************************!*\
  !*** external "commondir" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("commondir");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "loopback":
/*!***************************!*\
  !*** external "loopback" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback");

/***/ }),

/***/ "loopback-component-explorer":
/*!**********************************************!*\
  !*** external "loopback-component-explorer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback-component-explorer");

/***/ }),

/***/ "loopback-connector-mysql":
/*!*******************************************!*\
  !*** external "loopback-connector-mysql" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback-connector-mysql");

/***/ }),

/***/ "loopback-datasource-juggler":
/*!**********************************************!*\
  !*** external "loopback-datasource-juggler" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loopback-datasource-juggler");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module");

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

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

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

/***/ "toposort":
/*!***************************!*\
  !*** external "toposort" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("toposort");

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
//# sourceMappingURL=vendor.bundle.js.map