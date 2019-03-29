(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("stream"), require("http"), require("path"), require("url"), require("util"), require("https"), require("fs"), require("zlib"));
	else if(typeof define === 'function' && define.amd)
		define(["stream", "http", "path", "url", "util", "https", "fs", "zlib"], factory);
	else if(typeof exports === 'object')
		exports["TrueVaultClient"] = factory(require("stream"), require("http"), require("path"), require("url"), require("util"), require("https"), require("fs"), require("zlib"));
	else
		root["TrueVaultClient"] = factory(root["stream"], root["http"], root["path"], root["url"], root["util"], root["https"], root["fs"], root["zlib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_127__, __WEBPACK_EXTERNAL_MODULE_128__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(27)('wks')
  , uid        = __webpack_require__(20)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(44)
  , toPrimitive    = __webpack_require__(29)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(18);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(89)
  , defined = __webpack_require__(22);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(21);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(13)
  , hide      = __webpack_require__(7)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(49)
  , enumBugKeys = __webpack_require__(24);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f
  , has = __webpack_require__(6)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys')
  , uid    = __webpack_require__(20);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(16)
  , wksExt         = __webpack_require__(31)
  , defineProperty = __webpack_require__(4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// API
module.exports = abort;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var defer = __webpack_require__(63);

// API
module.exports = async;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var async = __webpack_require__(37)
  , abort = __webpack_require__(36)
  ;

// API
module.exports = iterate;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async(callback));
  }

  return aborter;
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// API
module.exports = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var abort = __webpack_require__(36)
  , async = __webpack_require__(37)
  ;

// API
module.exports = terminator;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var iterate    = __webpack_require__(38)
  , initState  = __webpack_require__(39)
  , terminator = __webpack_require__(40)
  ;

// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending  = ascending;
module.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(9)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(15)(function(){
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(16)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(50)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(6)
  , Iterators      = __webpack_require__(11)
  , $iterCreate    = __webpack_require__(93)
  , setToStringTag = __webpack_require__(19)
  , getPrototypeOf = __webpack_require__(102)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(99)
  , enumBugKeys = __webpack_require__(24)
  , IE_PROTO    = __webpack_require__(26)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(23)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(43).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(49)
  , hiddenKeys = __webpack_require__(24).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(6)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(85)(false)
  , IE_PROTO     = __webpack_require__(26)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(13)
  , invoke             = __webpack_require__(88)
  , html               = __webpack_require__(43)
  , cel                = __webpack_require__(23)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(9)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(106)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
  , Iterators     = __webpack_require__(11)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.18.12
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (typeof module === 'object' && module.exports) {
    // Node
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals (root is window)
    root.IPv6 = factory(root);
  }
}(this, function (root) {
  'use strict';

  /*
  var _in = "fe80:0000:0000:0000:0204:61ff:fe9d:f156";
  var _out = IPv6.best(_in);
  var _expected = "fe80::204:61ff:fe9d:f156";

  console.log(_in, _out, _expected, _out === _expected);
  */

  // save current IPv6 variable, if any
  var _IPv6 = root && root.IPv6;

  function bestPresentation(address) {
    // based on:
    // Javascript to test an IPv6 address for proper format, and to
    // present the "best text representation" according to IETF Draft RFC at
    // http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04
    // 8 Feb 2010 Rich Brown, Dartware, LLC
    // Please feel free to use this code as long as you provide a link to
    // http://www.intermapper.com
    // http://intermapper.com/support/tools/IPV6-Validator.aspx
    // http://download.dartware.com/thirdparty/ipv6validator.js

    var _address = address.toLowerCase();
    var segments = _address.split(':');
    var length = segments.length;
    var total = 8;

    // trim colons (:: or ::a:b:c… or …a:b:c::)
    if (segments[0] === '' && segments[1] === '' && segments[2] === '') {
      // must have been ::
      // remove first two items
      segments.shift();
      segments.shift();
    } else if (segments[0] === '' && segments[1] === '') {
      // must have been ::xxxx
      // remove the first item
      segments.shift();
    } else if (segments[length - 1] === '' && segments[length - 2] === '') {
      // must have been xxxx::
      segments.pop();
    }

    length = segments.length;

    // adjust total segments for IPv4 trailer
    if (segments[length - 1].indexOf('.') !== -1) {
      // found a "." which means IPv4
      total = 7;
    }

    // fill empty segments them with "0000"
    var pos;
    for (pos = 0; pos < length; pos++) {
      if (segments[pos] === '') {
        break;
      }
    }

    if (pos < total) {
      segments.splice(pos, 1, '0000');
      while (segments.length < total) {
        segments.splice(pos, 0, '0000');
      }
    }

    // strip leading zeros
    var _segments;
    for (var i = 0; i < total; i++) {
      _segments = segments[i].split('');
      for (var j = 0; j < 3 ; j++) {
        if (_segments[0] === '0' && _segments.length > 1) {
          _segments.splice(0,1);
        } else {
          break;
        }
      }

      segments[i] = _segments.join('');
    }

    // find longest sequence of zeroes and coalesce them into one segment
    var best = -1;
    var _best = 0;
    var _current = 0;
    var current = -1;
    var inzeroes = false;
    // i; already declared

    for (i = 0; i < total; i++) {
      if (inzeroes) {
        if (segments[i] === '0') {
          _current += 1;
        } else {
          inzeroes = false;
          if (_current > _best) {
            best = current;
            _best = _current;
          }
        }
      } else {
        if (segments[i] === '0') {
          inzeroes = true;
          current = i;
          _current = 1;
        }
      }
    }

    if (_current > _best) {
      best = current;
      _best = _current;
    }

    if (_best > 1) {
      segments.splice(best, _best, '');
    }

    length = segments.length;

    // assemble remaining segments
    var result = '';
    if (segments[0] === '')  {
      result = ':';
    }

    for (i = 0; i < length; i++) {
      result += segments[i];
      if (i === length - 1) {
        break;
      }

      result += ':';
    }

    if (segments[length - 1] === '') {
      result += ':';
    }

    return result;
  }

  function noConflict() {
    /*jshint validthis: true */
    if (root.IPv6 === this) {
      root.IPv6 = _IPv6;
    }

    return this;
  }

  return {
    best: bestPresentation,
    noConflict: noConflict
  };
}));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 * Second Level Domain (SLD) Support
 *
 * Version: 1.18.12
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (typeof module === 'object' && module.exports) {
    // Node
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals (root is window)
    root.SecondLevelDomains = factory(root);
  }
}(this, function (root) {
  'use strict';

  // save current SecondLevelDomains variable, if any
  var _SecondLevelDomains = root && root.SecondLevelDomains;

  var SLD = {
    // list of known Second Level Domains
    // converted list of SLDs from https://github.com/gavingmiller/second-level-domains
    // ----
    // publicsuffix.org is more current and actually used by a couple of browsers internally.
    // downside is it also contains domains like "dyndns.org" - which is fine for the security
    // issues browser have to deal with (SOP for cookies, etc) - but is way overboard for URI.js
    // ----
    list: {
      'ac':' com gov mil net org ',
      'ae':' ac co gov mil name net org pro sch ',
      'af':' com edu gov net org ',
      'al':' com edu gov mil net org ',
      'ao':' co ed gv it og pb ',
      'ar':' com edu gob gov int mil net org tur ',
      'at':' ac co gv or ',
      'au':' asn com csiro edu gov id net org ',
      'ba':' co com edu gov mil net org rs unbi unmo unsa untz unze ',
      'bb':' biz co com edu gov info net org store tv ',
      'bh':' biz cc com edu gov info net org ',
      'bn':' com edu gov net org ',
      'bo':' com edu gob gov int mil net org tv ',
      'br':' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
      'bs':' com edu gov net org ',
      'bz':' du et om ov rg ',
      'ca':' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
      'ck':' biz co edu gen gov info net org ',
      'cn':' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
      'co':' com edu gov mil net nom org ',
      'cr':' ac c co ed fi go or sa ',
      'cy':' ac biz com ekloges gov ltd name net org parliament press pro tm ',
      'do':' art com edu gob gov mil net org sld web ',
      'dz':' art asso com edu gov net org pol ',
      'ec':' com edu fin gov info med mil net org pro ',
      'eg':' com edu eun gov mil name net org sci ',
      'er':' com edu gov ind mil net org rochest w ',
      'es':' com edu gob nom org ',
      'et':' biz com edu gov info name net org ',
      'fj':' ac biz com info mil name net org pro ',
      'fk':' ac co gov net nom org ',
      'fr':' asso com f gouv nom prd presse tm ',
      'gg':' co net org ',
      'gh':' com edu gov mil org ',
      'gn':' ac com gov net org ',
      'gr':' com edu gov mil net org ',
      'gt':' com edu gob ind mil net org ',
      'gu':' com edu gov net org ',
      'hk':' com edu gov idv net org ',
      'hu':' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
      'id':' ac co go mil net or sch web ',
      'il':' ac co gov idf k12 muni net org ',
      'in':' ac co edu ernet firm gen gov i ind mil net nic org res ',
      'iq':' com edu gov i mil net org ',
      'ir':' ac co dnssec gov i id net org sch ',
      'it':' edu gov ',
      'je':' co net org ',
      'jo':' com edu gov mil name net org sch ',
      'jp':' ac ad co ed go gr lg ne or ',
      'ke':' ac co go info me mobi ne or sc ',
      'kh':' com edu gov mil net org per ',
      'ki':' biz com de edu gov info mob net org tel ',
      'km':' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
      'kn':' edu gov net org ',
      'kr':' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
      'kw':' com edu gov net org ',
      'ky':' com edu gov net org ',
      'kz':' com edu gov mil net org ',
      'lb':' com edu gov net org ',
      'lk':' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
      'lr':' com edu gov net org ',
      'lv':' asn com conf edu gov id mil net org ',
      'ly':' com edu gov id med net org plc sch ',
      'ma':' ac co gov m net org press ',
      'mc':' asso tm ',
      'me':' ac co edu gov its net org priv ',
      'mg':' com edu gov mil nom org prd tm ',
      'mk':' com edu gov inf name net org pro ',
      'ml':' com edu gov net org presse ',
      'mn':' edu gov org ',
      'mo':' com edu gov net org ',
      'mt':' com edu gov net org ',
      'mv':' aero biz com coop edu gov info int mil museum name net org pro ',
      'mw':' ac co com coop edu gov int museum net org ',
      'mx':' com edu gob net org ',
      'my':' com edu gov mil name net org sch ',
      'nf':' arts com firm info net other per rec store web ',
      'ng':' biz com edu gov mil mobi name net org sch ',
      'ni':' ac co com edu gob mil net nom org ',
      'np':' com edu gov mil net org ',
      'nr':' biz com edu gov info net org ',
      'om':' ac biz co com edu gov med mil museum net org pro sch ',
      'pe':' com edu gob mil net nom org sld ',
      'ph':' com edu gov i mil net ngo org ',
      'pk':' biz com edu fam gob gok gon gop gos gov net org web ',
      'pl':' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
      'pr':' ac biz com edu est gov info isla name net org pro prof ',
      'ps':' com edu gov net org plo sec ',
      'pw':' belau co ed go ne or ',
      'ro':' arts com firm info nom nt org rec store tm www ',
      'rs':' ac co edu gov in org ',
      'sb':' com edu gov net org ',
      'sc':' com edu gov net org ',
      'sh':' co com edu gov net nom org ',
      'sl':' com edu gov net org ',
      'st':' co com consulado edu embaixada gov mil net org principe saotome store ',
      'sv':' com edu gob org red ',
      'sz':' ac co org ',
      'tr':' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
      'tt':' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
      'tw':' club com ebiz edu game gov idv mil net org ',
      'mu':' ac co com gov net or org ',
      'mz':' ac co edu gov org ',
      'na':' co com ',
      'nz':' ac co cri geek gen govt health iwi maori mil net org parliament school ',
      'pa':' abo ac com edu gob ing med net nom org sld ',
      'pt':' com edu gov int net nome org publ ',
      'py':' com edu gov mil net org ',
      'qa':' com edu gov mil net org ',
      're':' asso com nom ',
      'ru':' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
      'rw':' ac co com edu gouv gov int mil net ',
      'sa':' com edu gov med net org pub sch ',
      'sd':' com edu gov info med net org tv ',
      'se':' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
      'sg':' com edu gov idn net org per ',
      'sn':' art com edu gouv org perso univ ',
      'sy':' com edu gov mil net news org ',
      'th':' ac co go in mi net or ',
      'tj':' ac biz co com edu go gov info int mil name net nic org test web ',
      'tn':' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
      'tz':' ac co go ne or ',
      'ua':' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
      'ug':' ac co go ne or org sc ',
      'uk':' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
      'us':' dni fed isa kids nsn ',
      'uy':' com edu gub mil net org ',
      've':' co com edu gob info mil net org web ',
      'vi':' co com k12 net org ',
      'vn':' ac biz com edu gov health info int name net org pro ',
      'ye':' co com gov ltd me net org plc ',
      'yu':' ac co edu gov org ',
      'za':' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
      'zm':' ac co com edu gov net org sch ',
      // https://en.wikipedia.org/wiki/CentralNic#Second-level_domains
      'com': 'ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ',
      'net': 'gb jp se uk ',
      'org': 'ae',
      'de': 'com '
    },
    // gorhill 2013-10-25: Using indexOf() instead Regexp(). Significant boost
    // in both performance and memory footprint. No initialization required.
    // http://jsperf.com/uri-js-sld-regex-vs-binary-search/4
    // Following methods use lastIndexOf() rather than array.split() in order
    // to avoid any memory allocations.
    has: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') >= 0;
    },
    is: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset >= 0) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
    },
    get: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return null;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return null;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return null;
      }
      if (sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') < 0) {
        return null;
      }
      return domain.slice(sldOffset+1);
    },
    noConflict: function(){
      if (root.SecondLevelDomains === this) {
        root.SecondLevelDomains = _SecondLevelDomains;
      }
      return this;
    }
  };

  return SLD;
}));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.0 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(76);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(70);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = __webpack_require__(73);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(71);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(72);

var _createClass3 = _interopRequireDefault(_createClass2);

var _package = __webpack_require__(126);

var _nodeFetch = __webpack_require__(124);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _urijs = __webpack_require__(125);

var _urijs2 = _interopRequireDefault(_urijs);

var _base = __webpack_require__(77);

var _base2 = _interopRequireDefault(_base);

var _formData = __webpack_require__(117);

var _formData2 = _interopRequireDefault(_formData);

var _contentDisposition = __webpack_require__(78);

var _contentDisposition2 = _interopRequireDefault(_contentDisposition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tvFetch = typeof fetch !== "undefined" ? fetch : _nodeFetch2.default;
var tvFormData = typeof FormData !== "undefined" ? FormData : _formData2.default;

/**
 * A client for the [TrueVault HTTP API](https://docs.truevault.com/).
 *
 * **Overview**
 *
 * The TrueVault JS SDK makes it easy to communicate with the TrueVault API from JavaScript web apps, nodejs servers,
 * and lambda methods.
 *
 * ***JS Web example***
 * ```js
 * async function onLoginClicked() {
 *   var trueVaultClient = await TrueVault.login(TRUEVAULT_ACCOUNT_ID, username, password)
 *   localStorage.trueVaultAccessToken = trueVaultClient.accessToken;
 *   var userInfo = trueVaultClient.readCurrentUser();
 *   ...
 * }
 * ```
 *
 * **Error Handling**
 *
 * If any request fails, the method will throw an error. The thrown `Error` instance will have the following properties:
 *
 * - `message`: the message returned by the TrueVault API
 * - `transaction_id`: a unique ID that can be used in support requests to help@truevault.com to help us resolve the error
 * - `error`: the machine-readable error object returned by TrueVault.
 *
 * For more information on TrueVault API responses, see https://docs.truevault.com/overview#api-responses.
 *
 * **Authentication**
 *
 * If you already have an API key or access token, use the constructor. If you have a username and password, see
 * `login()`. See https://docs.truevault.com/overview#authentication for more on authentication concepts in TrueVault.
 *
 * To authenticate, provide one of the following styles of objects based on how you wish to authenticate:
 *
 * - `{ apiKey: 'your API key' }`
 * - `{ accessToken: 'your access token' }`
 * - `{ httpBasic: 'http basic base64 string' }`
 * - `null`, to indicate no authentication is to be provided to the server
 *
 * @param {object} authn Authentication info, or null if no authentication info is to be used.
 * @param {string} host optional parameter specifying TV API host; defaults to https://api.truevault.com
 */

var TrueVaultClient = function () {
    function TrueVaultClient(authn, host) {
        (0, _classCallCheck3.default)(this, TrueVaultClient);

        this._authHeader = null;
        if (!authn) {
            // no auth
            this._authHeader = null;
        } else if ((typeof authn === 'undefined' ? 'undefined' : (0, _typeof3.default)(authn)) === 'object') {
            if (authn.hasOwnProperty('apiKey')) {
                this._authHeader = TrueVaultClient._makeHeaderForUsername(authn['apiKey']);
            } else if (authn.hasOwnProperty('accessToken')) {
                this._accessToken = authn['accessToken'];
                this._authHeader = TrueVaultClient._makeHeaderForUsername(this.accessToken);
            } else if (authn.hasOwnProperty('httpBasic')) {
                this._authHeader = 'Basic ' + authn['httpBasic'];
            }
        } else {
            throw new Error('Invalid authentication method provided');
        }

        this.host = host || 'https://api.truevault.com';
    }

    /**
     * Returns the TrueVault access token that was supplied in the constructor/returned from the login call. Throws
     * if the client was created without an access token (e. g. created with an API key).
     * @returns {string}
     */


    (0, _createClass3.default)(TrueVaultClient, [{
        key: 'performLegacyRequest',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, options) {
                var uri, response, responseBody, json, error;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!!this.authHeader) {
                                    if (!options) {
                                        options = {};
                                    }
                                    if (!options.headers) {
                                        options.headers = {};
                                    }
                                    options.headers.Authorization = this.authHeader;
                                }

                                uri = (0, _urijs2.default)(this.host + '/' + path).addQuery("_tv_sdk", _package.version).toString();
                                _context.next = 4;
                                return tvFetch(uri, options);

                            case 4:
                                response = _context.sent;
                                _context.next = 7;
                                return response.text();

                            case 7:
                                responseBody = _context.sent;
                                json = void 0;
                                _context.prev = 9;

                                json = JSON.parse(responseBody);
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](9);
                                throw new Error('non-JSON response: ' + responseBody);

                            case 16:
                                if (!(json.result === 'error')) {
                                    _context.next = 23;
                                    break;
                                }

                                error = new Error(json.error.message);

                                error.error = json.error;
                                error.transaction_id = json.transaction_id;
                                throw error;

                            case 23:
                                return _context.abrupt('return', json);

                            case 24:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[9, 13]]);
            }));

            function performLegacyRequest(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return performLegacyRequest;
        }()
    }, {
        key: 'performJSONRequest',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path, options) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!options) {
                                    options = {};
                                }

                                if (!options.headers) {
                                    options.headers = {};
                                }
                                options.headers['Content-Type'] = 'application/json';
                                return _context2.abrupt('return', this.performLegacyRequest(path, options));

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function performJSONRequest(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return performJSONRequest;
        }()

        /**
         * Performs a legacy (non-v2-JSON) request. By using XHR rather than fetch, it's able to supply progress
         * information.
         * @param method
         * @param url
         * @param formData
         * @param progressCallback
         * @param responseType
         * @returns {Promise<XMLHTTPRequest>|Promise<Object>} A promise resolving to an XHR object for blobs, and the parsed JSON object for JSON
         */

    }, {
        key: 'performLegacyRequestWithProgress',
        value: function performLegacyRequestWithProgress(method, url, formData, progressCallback, responseType) {
            var _this = this;

            // We are using XMLHttpRequest here since fetch does not have a progress API
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                if (method.toLowerCase() === 'get') {
                    xhr.addEventListener('progress', progressCallback);
                    xhr.addEventListener('load', progressCallback);
                } else {
                    xhr.upload.addEventListener('progress', progressCallback);
                    xhr.upload.addEventListener('load', progressCallback);
                }

                xhr.open(method, url);
                xhr.setRequestHeader('Authorization', _this.authHeader);
                xhr.responseType = responseType;
                xhr.onload = function () {
                    switch (responseType) {
                        case "json":
                            var responseJson = xhr.response;
                            if (responseJson.result === 'error') {
                                var error = new Error(responseJson.error.message);
                                error.error = responseJson.error;
                                reject(error);
                            } else {
                                resolve(responseJson);
                            }
                            break;
                        case "blob":
                            resolve(xhr);
                            break;
                        default:
                            throw new Error('Unsupported responseType: ' + responseType);
                    }
                };
                xhr.onerror = function () {
                    return reject(Error('Network error'));
                };
                xhr.send(formData);
            });
        }

        /**
         * Useful when you want to create a client starting from a user's username and password as opposed to an API key
         * or access token. The resulting TrueVaultClient has an accessToken property you can use to retrieve the raw
         * TrueVault access token if needed (e. g. to save in localStorage).
         * See https://docs.truevault.com/authentication#login-a-user.
         * @param {string} accountId account id that the user belongs to.
         * @param {string} username user's username.
         * @param {string} password user's password.
         * @param {string} [mfaCode] current MFA code, if user has MFA configured.
         * @param {string} [host] host optional parameter specifying TV API host; defaults to https://api.truevault.com
         * @param {Date} [notValidAfter] notValidAfter optional parameter specifying when the returned access token expires
         * @returns {Promise.<TrueVaultClient>}
         */

    }, {
        key: 'logout',


        /**
         * Log the authenticated user out, which deactivates its access token. See
         * https://docs.truevault.com/authentication#logout-a-user.
         * @returns {Promise.<Object>}
         */
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var response;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.performLegacyRequest('v1/auth/logout', { method: 'POST' });

                            case 2:
                                response = _context3.sent;

                                this._authHeader = null;
                                return _context3.abrupt('return', response.logout);

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function logout() {
                return _ref3.apply(this, arguments);
            }

            return logout;
        }()

        /**
         * Get data about the authenticated user. See https://docs.truevault.com/authentication#verify-a-user.
         * @param [full=true] Whether to include user attributes and groups
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'readCurrentUser',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(full) {
                var response, user;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (full !== false) {
                                    full = true;
                                }

                                _context4.next = 3;
                                return this.performLegacyRequest('v1/auth/me?full=' + full);

                            case 3:
                                response = _context4.sent;
                                user = response.user;

                                if (user.attributes) {
                                    user.attributes = JSON.parse(_base2.default.decode(user.attributes));
                                }
                                return _context4.abrupt('return', user);

                            case 7:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function readCurrentUser(_x5) {
                return _ref4.apply(this, arguments);
            }

            return readCurrentUser;
        }()

        /**
         * Updates the currently authenticated user's attributes. See https://docs.truevault.com/authentication#verify-a-user.
         * @param attributes
         * @returns {Promise<Object>}
         */

    }, {
        key: 'updateCurrentUser',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(attributes) {
                var formData, response, user;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("attributes", _base2.default.encode(JSON.stringify(attributes)));

                                _context5.next = 4;
                                return this.performLegacyRequest('v1/auth/me?full=true', {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 4:
                                response = _context5.sent;
                                user = response.user;

                                if (user.attributes) {
                                    user.attributes = JSON.parse(_base2.default.decode(user.attributes));
                                }
                                return _context5.abrupt('return', user);

                            case 8:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function updateCurrentUser(_x6) {
                return _ref5.apply(this, arguments);
            }

            return updateCurrentUser;
        }()

        /**
         * List all users in the account. See https://docs.truevault.com/users#list-all-users.
         * @param [full=false] Whether to return user attributes and group IDs
         * @returns {Promise.<Array>}
         */

    }, {
        key: 'listUsers',
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(full) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                return _context6.abrupt('return', this.listUsersWithStatus(null, full));

                            case 1:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function listUsers(_x7) {
                return _ref6.apply(this, arguments);
            }

            return listUsers;
        }()

        /**
         * List all users in the account. See https://docs.truevault.com/users#list-all-users.
         * @param [status=null] If ACTIVE, DEACTIVATED, PENDING, or LOCKED only returns users with that status
         * @param [full=false] Whether to return user attributes and group IDs
         * @returns {Promise.<Array>}
         */

    }, {
        key: 'listUsersWithStatus',
        value: function () {
            var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(status, full) {
                var path, response;
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                if (full !== true) {
                                    full = false;
                                }
                                path = 'v1/users?full=' + full;


                                if (status) {
                                    path = path + '&status=' + status;
                                }

                                _context7.next = 5;
                                return this.performLegacyRequest(path);

                            case 5:
                                response = _context7.sent;
                                return _context7.abrupt('return', response.users.map(function (user) {
                                    if (user.attributes) {
                                        user.attributes = JSON.parse(_base2.default.decode(user.attributes));
                                    }
                                    return user;
                                }));

                            case 7:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function listUsersWithStatus(_x8, _x9) {
                return _ref7.apply(this, arguments);
            }

            return listUsersWithStatus;
        }()

        /**
         * Read a single user. See https://docs.truevault.com/users#read-a-user.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'readUser',
        value: function () {
            var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(userId) {
                var users;
                return _regenerator2.default.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _context8.next = 2;
                                return this.readUsers([userId]);

                            case 2:
                                users = _context8.sent;
                                return _context8.abrupt('return', users[0]);

                            case 4:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function readUser(_x10) {
                return _ref8.apply(this, arguments);
            }

            return readUser;
        }()

        /**
         * Reads multiple users. See https://docs.truevault.com/users#read-a-user.
         * @returns {Promise.<Array>}
         */

    }, {
        key: 'readUsers',
        value: function () {
            var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9(userIds) {
                var response;
                return _regenerator2.default.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
                                _context9.next = 2;
                                return this.performLegacyRequest('v2/users/' + userIds.join(',') + '?full=true');

                            case 2:
                                response = _context9.sent;
                                return _context9.abrupt('return', response.users);

                            case 4:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, this);
            }));

            function readUsers(_x11) {
                return _ref9.apply(this, arguments);
            }

            return readUsers;
        }()

        /**
         * Create a new user. See https://docs.truevault.com/users#create-a-user.
         * @param {string} username new user's username.
         * @param {string} password new user's password.
         * @param {Object} [attributes] new user's attributes, if desired.
         * @param {Array} [groupIds] add user to the given groups, if provided.
         * @param {string} [status] the newly created user's status
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createUser',
        value: function () {
            var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(username, password, attributes, groupIds, status) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("username", username);
                                formData.append("password", password);
                                if (attributes) {
                                    formData.append("attributes", _base2.default.encode(JSON.stringify(attributes)));
                                }
                                if (groupIds) {
                                    formData.append("group_ids", groupIds.join(","));
                                }
                                if (status) {
                                    formData.append("status", status);
                                }
                                _context10.next = 8;
                                return this.performLegacyRequest('v1/users', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 8:
                                response = _context10.sent;
                                return _context10.abrupt('return', response.user);

                            case 10:
                            case 'end':
                                return _context10.stop();
                        }
                    }
                }, _callee10, this);
            }));

            function createUser(_x12, _x13, _x14, _x15, _x16) {
                return _ref10.apply(this, arguments);
            }

            return createUser;
        }()

        /**
         * Update a user's attributes. See https://docs.truevault.com/users#update-a-user.
         * @param {string} userId the user's userId
         * @param {Object} attributes
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateUserAttributes',
        value: function () {
            var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee11(userId, attributes) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("attributes", _base2.default.encode(JSON.stringify(attributes)));

                                _context11.next = 4;
                                return this.performLegacyRequest('v1/users/' + userId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 4:
                                response = _context11.sent;
                                return _context11.abrupt('return', response.user);

                            case 6:
                            case 'end':
                                return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));

            function updateUserAttributes(_x17, _x18) {
                return _ref11.apply(this, arguments);
            }

            return updateUserAttributes;
        }()

        /**
         * Update a user's status. See https://docs.truevault.com/users#update-a-user.
         * @param {string} userId the user's userId
         * @param {string} status
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateUserStatus',
        value: function () {
            var _ref12 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee12(userId, status) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee12$(_context12) {
                    while (1) {
                        switch (_context12.prev = _context12.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("status", status);

                                _context12.next = 4;
                                return this.performLegacyRequest('v1/users/' + userId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 4:
                                response = _context12.sent;
                                return _context12.abrupt('return', response.user);

                            case 6:
                            case 'end':
                                return _context12.stop();
                        }
                    }
                }, _callee12, this);
            }));

            function updateUserStatus(_x19, _x20) {
                return _ref12.apply(this, arguments);
            }

            return updateUserStatus;
        }()

        /**
         * Update a user's username. See https://docs.truevault.com/users#update-a-user.
         * @param {string} userId the user id to change.
         * @param {string} newUsername user's new username.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateUserUsername',
        value: function () {
            var _ref13 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee13(userId, newUsername) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("username", newUsername);

                                _context13.next = 4;
                                return this.performLegacyRequest('v1/users/' + userId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 4:
                                response = _context13.sent;
                                return _context13.abrupt('return', response.user);

                            case 6:
                            case 'end':
                                return _context13.stop();
                        }
                    }
                }, _callee13, this);
            }));

            function updateUserUsername(_x21, _x22) {
                return _ref13.apply(this, arguments);
            }

            return updateUserUsername;
        }()

        /**
         * Update a user's password. See https://docs.truevault.com/users#update-a-user.
         * @param {string} userId the user id to change.
         * @param {string} newPassword user's new password.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateUserPassword',
        value: function () {
            var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee14(userId, newPassword) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee14$(_context14) {
                    while (1) {
                        switch (_context14.prev = _context14.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("password", newPassword);

                                _context14.next = 4;
                                return this.performLegacyRequest('v1/users/' + userId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 4:
                                response = _context14.sent;
                                return _context14.abrupt('return', response.user);

                            case 6:
                            case 'end':
                                return _context14.stop();
                        }
                    }
                }, _callee14, this);
            }));

            function updateUserPassword(_x23, _x24) {
                return _ref14.apply(this, arguments);
            }

            return updateUserPassword;
        }()

        /**
         * Delete a user. See https://docs.truevault.com/users#delete-a-user
         * @param {string} userId the user id to delete.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'deleteUser',
        value: function () {
            var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee15(userId) {
                var response;
                return _regenerator2.default.wrap(function _callee15$(_context15) {
                    while (1) {
                        switch (_context15.prev = _context15.next) {
                            case 0:
                                _context15.next = 2;
                                return this.performLegacyRequest('v1/users/' + userId, {
                                    method: 'DELETE'
                                });

                            case 2:
                                response = _context15.sent;
                                return _context15.abrupt('return', response.user);

                            case 4:
                            case 'end':
                                return _context15.stop();
                        }
                    }
                }, _callee15, this);
            }));

            function deleteUser(_x25) {
                return _ref15.apply(this, arguments);
            }

            return deleteUser;
        }()

        /**
         * Create an API key for a user. See https://docs.truevault.com/users#create-api-key-for-a-user.
         * @param {string} userId user id.
         * @returns {Promise.<string>}
         */

    }, {
        key: 'createUserApiKey',
        value: function () {
            var _ref16 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee16(userId) {
                var response;
                return _regenerator2.default.wrap(function _callee16$(_context16) {
                    while (1) {
                        switch (_context16.prev = _context16.next) {
                            case 0:
                                _context16.next = 2;
                                return this.performLegacyRequest('v1/users/' + userId + '/api_key', { method: 'POST' });

                            case 2:
                                response = _context16.sent;
                                return _context16.abrupt('return', response.api_key);

                            case 4:
                            case 'end':
                                return _context16.stop();
                        }
                    }
                }, _callee16, this);
            }));

            function createUserApiKey(_x26) {
                return _ref16.apply(this, arguments);
            }

            return createUserApiKey;
        }()

        /**
         * Create an access token for a user. See https://docs.truevault.com/users#create-access-token-for-a-user.
         * @param {string} userId user id.
         * @param {Date} [notValidAfter] notValidAfter optional parameter specifying when the returned access token expires
         * @returns {Promise.<string>}
         */

    }, {
        key: 'createUserAccessToken',
        value: function () {
            var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee17(userId, notValidAfter) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee17$(_context17) {
                    while (1) {
                        switch (_context17.prev = _context17.next) {
                            case 0:
                                formData = new tvFormData();

                                if (!!notValidAfter) {
                                    formData.append("not_valid_after ", notValidAfter.toISOString());
                                }

                                _context17.next = 4;
                                return this.performLegacyRequest('v1/users/' + userId + '/access_token', { method: 'POST', body: formData });

                            case 4:
                                response = _context17.sent;
                                return _context17.abrupt('return', response.user.access_token);

                            case 6:
                            case 'end':
                                return _context17.stop();
                        }
                    }
                }, _callee17, this);
            }));

            function createUserAccessToken(_x27, _x28) {
                return _ref17.apply(this, arguments);
            }

            return createUserAccessToken;
        }()

        /**
         * Start MFA enrollment for a user. See https://docs.truevault.com/users#start-mfa-enrollment-for-a-user.
         * @param {string} userId user id.
         * @param {string} issuer MFA issuer.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'startUserMfaEnrollment',
        value: function () {
            var _ref18 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee18(userId, issuer) {
                var result;
                return _regenerator2.default.wrap(function _callee18$(_context18) {
                    while (1) {
                        switch (_context18.prev = _context18.next) {
                            case 0:
                                _context18.next = 2;
                                return this.performJSONRequest('v1/users/' + userId + '/mfa/start_enrollment', {
                                    method: 'POST',
                                    body: JSON.stringify({ issuer: issuer })
                                });

                            case 2:
                                result = _context18.sent;
                                return _context18.abrupt('return', result.mfa);

                            case 4:
                            case 'end':
                                return _context18.stop();
                        }
                    }
                }, _callee18, this);
            }));

            function startUserMfaEnrollment(_x29, _x30) {
                return _ref18.apply(this, arguments);
            }

            return startUserMfaEnrollment;
        }()

        /**
         * Finalize MFA enrollment for a user. See https://docs.truevault.com/users#finalize-mfa-enrollment-for-a-user.
         * @param {string} userId user id.
         * @param {string} mfaCode1 first MFA code.
         * @param {string} mfaCode2 second MFA code.
         * @returns {Promise.<undefined>}
         */

    }, {
        key: 'finalizeMfaEnrollment',
        value: function () {
            var _ref19 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee19(userId, mfaCode1, mfaCode2) {
                return _regenerator2.default.wrap(function _callee19$(_context19) {
                    while (1) {
                        switch (_context19.prev = _context19.next) {
                            case 0:
                                _context19.next = 2;
                                return this.performJSONRequest('v1/users/' + userId + '/mfa/finalize_enrollment', {
                                    method: 'POST',
                                    body: JSON.stringify({ mfa_code_1: mfaCode1, mfa_code_2: mfaCode2 })
                                });

                            case 2:
                            case 'end':
                                return _context19.stop();
                        }
                    }
                }, _callee19, this);
            }));

            function finalizeMfaEnrollment(_x31, _x32, _x33) {
                return _ref19.apply(this, arguments);
            }

            return finalizeMfaEnrollment;
        }()

        /**
         * Unenroll a user from MFA. See #https://docs.truevault.com/users#unenroll-mfa-for-a-user.
         * @param {string} userId user id.
         * @param {string} mfaCode MFA code for user.
         * @param {string} password user's password.
         * @returns {Promise.<undefined>}
         */

    }, {
        key: 'unenrollMfa',
        value: function () {
            var _ref20 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee20(userId, mfaCode, password) {
                return _regenerator2.default.wrap(function _callee20$(_context20) {
                    while (1) {
                        switch (_context20.prev = _context20.next) {
                            case 0:
                                _context20.next = 2;
                                return this.performJSONRequest('v1/users/' + userId + '/mfa/unenroll', {
                                    method: 'POST',
                                    body: JSON.stringify({ mfa_code: mfaCode, password: password })
                                });

                            case 2:
                            case 'end':
                                return _context20.stop();
                        }
                    }
                }, _callee20, this);
            }));

            function unenrollMfa(_x34, _x35, _x36) {
                return _ref20.apply(this, arguments);
            }

            return unenrollMfa;
        }()

        /**
         * Create a new group. See https://docs.truevault.com/groups#create-a-group.
         * @param {string} name group name.
         * @param {Array} policy group policy. See https://docs.truevault.com/groups.
         * @param {Array} [userIds] user ids to add to the group.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createGroup',
        value: function () {
            var _ref21 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee21(name, policy, userIds) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee21$(_context21) {
                    while (1) {
                        switch (_context21.prev = _context21.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("name", name);
                                formData.append("policy", _base2.default.encode(JSON.stringify(policy)));
                                if (!!userIds) {
                                    formData.append("user_ids", userIds.join(','));
                                }
                                _context21.next = 6;
                                return this.performLegacyRequest('v1/groups', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 6:
                                response = _context21.sent;
                                return _context21.abrupt('return', response.group);

                            case 8:
                            case 'end':
                                return _context21.stop();
                        }
                    }
                }, _callee21, this);
            }));

            function createGroup(_x37, _x38, _x39) {
                return _ref21.apply(this, arguments);
            }

            return createGroup;
        }()

        /**
         * Update an existing group's name and policy. See https://docs.truevault.com/groups#update-a-group.
         * @param {string} groupId group id to update.
         * @param {string} name group name.
         * @param {Array} policy group policy. See https://docs.truevault.com/groups.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateGroup',
        value: function () {
            var _ref22 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee22(groupId, name, policy) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee22$(_context22) {
                    while (1) {
                        switch (_context22.prev = _context22.next) {
                            case 0:
                                formData = new tvFormData();

                                if (!!name) {
                                    formData.append("name", name);
                                }

                                if (!!policy) {
                                    formData.append("policy", _base2.default.encode(JSON.stringify(policy)));
                                }

                                _context22.next = 5;
                                return this.performLegacyRequest('v1/groups/' + groupId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 5:
                                response = _context22.sent;
                                return _context22.abrupt('return', response.group);

                            case 7:
                            case 'end':
                                return _context22.stop();
                        }
                    }
                }, _callee22, this);
            }));

            function updateGroup(_x40, _x41, _x42) {
                return _ref22.apply(this, arguments);
            }

            return updateGroup;
        }()

        /**
         * Delete a group. See https://docs.truevault.com/groups#delete-a-group.
         * @param {string} groupId group id to delete.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'deleteGroup',
        value: function () {
            var _ref23 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee23(groupId) {
                var response;
                return _regenerator2.default.wrap(function _callee23$(_context23) {
                    while (1) {
                        switch (_context23.prev = _context23.next) {
                            case 0:
                                _context23.next = 2;
                                return this.performLegacyRequest('v1/groups/' + groupId, {
                                    method: 'DELETE'
                                });

                            case 2:
                                response = _context23.sent;
                                return _context23.abrupt('return', response.group);

                            case 4:
                            case 'end':
                                return _context23.stop();
                        }
                    }
                }, _callee23, this);
            }));

            function deleteGroup(_x43) {
                return _ref23.apply(this, arguments);
            }

            return deleteGroup;
        }()

        /**
         * List all groups. See https://docs.truevault.com/groups#list-all-groups.
         * @returns {Promise.<Array>}
         */

    }, {
        key: 'listGroups',
        value: function () {
            var _ref24 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee24() {
                var response;
                return _regenerator2.default.wrap(function _callee24$(_context24) {
                    while (1) {
                        switch (_context24.prev = _context24.next) {
                            case 0:
                                _context24.next = 2;
                                return this.performLegacyRequest('v1/groups');

                            case 2:
                                response = _context24.sent;
                                return _context24.abrupt('return', response.groups);

                            case 4:
                            case 'end':
                                return _context24.stop();
                        }
                    }
                }, _callee24, this);
            }));

            function listGroups() {
                return _ref24.apply(this, arguments);
            }

            return listGroups;
        }()

        /**
         * Gets a group, including user ids. See https://docs.truevault.com/groups#read-a-group.
         * @param {string} groupId group id to get.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'readFullGroup',
        value: function () {
            var _ref25 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee25(groupId) {
                var response;
                return _regenerator2.default.wrap(function _callee25$(_context25) {
                    while (1) {
                        switch (_context25.prev = _context25.next) {
                            case 0:
                                _context25.next = 2;
                                return this.performLegacyRequest('v1/groups/' + groupId + '?full=true');

                            case 2:
                                response = _context25.sent;
                                return _context25.abrupt('return', response.group);

                            case 4:
                            case 'end':
                                return _context25.stop();
                        }
                    }
                }, _callee25, this);
            }));

            function readFullGroup(_x44) {
                return _ref25.apply(this, arguments);
            }

            return readFullGroup;
        }()

        /**
         * Add users to a group. See https://docs.truevault.com/groups#add-users-to-a-group.
         * @param {string} groupId group to add to.
         * @param {Array} userIds user ids to add to the group.
         * @returns {Promise.<undefined>}
         */

    }, {
        key: 'addUsersToGroup',
        value: function () {
            var _ref26 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee26(groupId, userIds) {
                return _regenerator2.default.wrap(function _callee26$(_context26) {
                    while (1) {
                        switch (_context26.prev = _context26.next) {
                            case 0:
                                _context26.next = 2;
                                return this.performJSONRequest('v1/groups/' + groupId + '/membership', {
                                    method: 'POST',
                                    body: JSON.stringify({ user_ids: userIds })
                                });

                            case 2:
                            case 'end':
                                return _context26.stop();
                        }
                    }
                }, _callee26, this);
            }));

            function addUsersToGroup(_x45, _x46) {
                return _ref26.apply(this, arguments);
            }

            return addUsersToGroup;
        }()

        /**
         * Remove users from a group. See https://docs.truevault.com/groups#remove-users-from-a-group
         * @param {string} groupId group to add to.
         * @param {Array} userIds user ids to add to the group.
         * @returns {Promise.<undefined>}
         */

    }, {
        key: 'removeUsersFromGroup',
        value: function () {
            var _ref27 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee27(groupId, userIds) {
                return _regenerator2.default.wrap(function _callee27$(_context27) {
                    while (1) {
                        switch (_context27.prev = _context27.next) {
                            case 0:
                                _context27.next = 2;
                                return this.performJSONRequest('v1/groups/' + groupId + '/membership/' + userIds.join(','), {
                                    method: 'DELETE'
                                });

                            case 2:
                            case 'end':
                                return _context27.stop();
                        }
                    }
                }, _callee27, this);
            }));

            function removeUsersFromGroup(_x47, _x48) {
                return _ref27.apply(this, arguments);
            }

            return removeUsersFromGroup;
        }()

        /**
         * Add users to a group returning user ids. See https://docs.truevault.com/groups#update-a-group.
         * @param {string} groupId group to add to.
         * @param {Array} userIds user ids to add to the group.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'addUsersToGroupReturnUserIds',
        value: function () {
            var _ref28 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee28(groupId, userIds) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee28$(_context28) {
                    while (1) {
                        switch (_context28.prev = _context28.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('operation', 'APPEND');
                                formData.append('user_ids', userIds.join(','));

                                _context28.next = 5;
                                return this.performLegacyRequest('v1/groups/' + groupId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 5:
                                response = _context28.sent;
                                return _context28.abrupt('return', response.group);

                            case 7:
                            case 'end':
                                return _context28.stop();
                        }
                    }
                }, _callee28, this);
            }));

            function addUsersToGroupReturnUserIds(_x49, _x50) {
                return _ref28.apply(this, arguments);
            }

            return addUsersToGroupReturnUserIds;
        }()

        /**
         * Remove users from a group. See https://docs.truevault.com/groups#update-a-group
         * @param {string} groupId group to remove from.
         * @param {Array} userIds user ids to remove from the group.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'removeUsersFromGroupReturnUserIds',
        value: function () {
            var _ref29 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee29(groupId, userIds) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee29$(_context29) {
                    while (1) {
                        switch (_context29.prev = _context29.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('operation', 'REMOVE');
                                formData.append('user_ids', userIds.join(','));

                                _context29.next = 5;
                                return this.performLegacyRequest('v1/groups/' + groupId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 5:
                                response = _context29.sent;
                                return _context29.abrupt('return', response.group);

                            case 7:
                            case 'end':
                                return _context29.stop();
                        }
                    }
                }, _callee29, this);
            }));

            function removeUsersFromGroupReturnUserIds(_x51, _x52) {
                return _ref29.apply(this, arguments);
            }

            return removeUsersFromGroupReturnUserIds;
        }()

        /**
         * Perform a user search. See https://docs.truevault.com/documentsearch#search-users.
         * @param {Object} searchOption search query. See https://docs.truevault.com/documentsearch#defining-search-options.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'searchUsers',
        value: function () {
            var _ref30 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee30(searchOption) {
                var formData, response, documents;
                return _regenerator2.default.wrap(function _callee30$(_context30) {
                    while (1) {
                        switch (_context30.prev = _context30.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("search_option", _base2.default.encode(JSON.stringify(searchOption)));

                                _context30.next = 4;
                                return this.performLegacyRequest('v1/users/search', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 4:
                                response = _context30.sent;
                                documents = response.data.documents.map(function (doc) {
                                    if (doc.attributes) {
                                        doc.attributes = JSON.parse(_base2.default.decode(doc.attributes));
                                    }
                                    return doc;
                                });
                                return _context30.abrupt('return', {
                                    info: response.data.info,
                                    documents: documents
                                });

                            case 7:
                            case 'end':
                                return _context30.stop();
                        }
                    }
                }, _callee30, this);
            }));

            function searchUsers(_x53) {
                return _ref30.apply(this, arguments);
            }

            return searchUsers;
        }()

        /**
         * Lists all vaults. See https://docs.truevault.com/vaults#list-all-vaults.
         * @param [page=1]
         * @param [per_page=100]
         * @returns {Promise<*>}
         */

    }, {
        key: 'listVaults',
        value: function () {
            var _ref31 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee31(page, per_page) {
                var response;
                return _regenerator2.default.wrap(function _callee31$(_context31) {
                    while (1) {
                        switch (_context31.prev = _context31.next) {
                            case 0:
                                if (typeof page !== "number") {
                                    page = 1;
                                }
                                if (typeof per_page !== "number") {
                                    per_page = 100;
                                }
                                _context31.next = 4;
                                return this.performLegacyRequest('v1/vaults?page=' + page + '&per_page=' + per_page);

                            case 4:
                                response = _context31.sent;
                                return _context31.abrupt('return', response.vaults);

                            case 6:
                            case 'end':
                                return _context31.stop();
                        }
                    }
                }, _callee31, this);
            }));

            function listVaults(_x54, _x55) {
                return _ref31.apply(this, arguments);
            }

            return listVaults;
        }()

        /**
         * Create a new vault. See https://docs.truevault.com/vaults#create-a-vault.
         * @param {string} name the name of the new vault.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createVault',
        value: function () {
            var _ref32 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee32(name) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee32$(_context32) {
                    while (1) {
                        switch (_context32.prev = _context32.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("name", name);

                                _context32.next = 4;
                                return this.performLegacyRequest('v1/vaults', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 4:
                                response = _context32.sent;
                                return _context32.abrupt('return', response.vault);

                            case 6:
                            case 'end':
                                return _context32.stop();
                        }
                    }
                }, _callee32, this);
            }));

            function createVault(_x56) {
                return _ref32.apply(this, arguments);
            }

            return createVault;
        }()

        /**
         * Read a vault. See https://docs.truevault.com/vaults#read-a-vault
         * @param vaultId
         * @returns {Promise<Object>}
         */

    }, {
        key: 'readVault',
        value: function () {
            var _ref33 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee33(vaultId) {
                var response;
                return _regenerator2.default.wrap(function _callee33$(_context33) {
                    while (1) {
                        switch (_context33.prev = _context33.next) {
                            case 0:
                                _context33.next = 2;
                                return this.performLegacyRequest('v1/vaults/' + vaultId);

                            case 2:
                                response = _context33.sent;
                                return _context33.abrupt('return', response.vault);

                            case 4:
                            case 'end':
                                return _context33.stop();
                        }
                    }
                }, _callee33, this);
            }));

            function readVault(_x57) {
                return _ref33.apply(this, arguments);
            }

            return readVault;
        }()

        /**
         * Update a vault. See https://docs.truevault.com/vaults#update-a-vault
         * @param vaultId
         * @param name
         * @returns {Promise<Object>}
         */

    }, {
        key: 'updateVault',
        value: function () {
            var _ref34 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee34(vaultId, name) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee34$(_context34) {
                    while (1) {
                        switch (_context34.prev = _context34.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('name', name);

                                _context34.next = 4;
                                return this.performLegacyRequest('v1/vaults/' + vaultId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 4:
                                response = _context34.sent;
                                return _context34.abrupt('return', response.vault);

                            case 6:
                            case 'end':
                                return _context34.stop();
                        }
                    }
                }, _callee34, this);
            }));

            function updateVault(_x58, _x59) {
                return _ref34.apply(this, arguments);
            }

            return updateVault;
        }()

        /**
         * Delete a vault. See https://docs.truevault.com/vaults#delete-a-vault
         * @param vaultId
         * @returns {Promise<Object>}
         */

    }, {
        key: 'deleteVault',
        value: function () {
            var _ref35 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee35(vaultId) {
                var response;
                return _regenerator2.default.wrap(function _callee35$(_context35) {
                    while (1) {
                        switch (_context35.prev = _context35.next) {
                            case 0:
                                _context35.next = 2;
                                return this.performLegacyRequest('v1/vaults/' + vaultId, {
                                    method: 'DELETE'
                                });

                            case 2:
                                response = _context35.sent;
                                return _context35.abrupt('return', response.vault);

                            case 4:
                            case 'end':
                                return _context35.stop();
                        }
                    }
                }, _callee35, this);
            }));

            function deleteVault(_x60) {
                return _ref35.apply(this, arguments);
            }

            return deleteVault;
        }()

        /**
         * Create a new schema. See https://docs.truevault.com/schemas#create-a-schema.
         * @param {string} vaultId the vault that should contain the schema.
         * @param {string} name the name of the schema.
         * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createSchema',
        value: function () {
            var _ref36 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee36(vaultId, name, fields) {
                var schemaDefinition, formData, response;
                return _regenerator2.default.wrap(function _callee36$(_context36) {
                    while (1) {
                        switch (_context36.prev = _context36.next) {
                            case 0:
                                schemaDefinition = { name: name, fields: fields };
                                formData = new tvFormData();

                                formData.append("schema", _base2.default.encode(JSON.stringify(schemaDefinition)));

                                _context36.next = 5;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/schemas', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 5:
                                response = _context36.sent;
                                return _context36.abrupt('return', response.schema);

                            case 7:
                            case 'end':
                                return _context36.stop();
                        }
                    }
                }, _callee36, this);
            }));

            function createSchema(_x61, _x62, _x63) {
                return _ref36.apply(this, arguments);
            }

            return createSchema;
        }()

        /**
         * Create a new schema. See https://docs.truevault.com/schemas#update-a-schema
         * @param {string} vaultId the vault that should contain the schema.
         * @param {string} schemaId the schemathat should contain the schema.
         * @param {string} name the name of the schema.
         * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateSchema',
        value: function () {
            var _ref37 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee37(vaultId, schemaId, name, fields) {
                var schemaDefinition, formData, response;
                return _regenerator2.default.wrap(function _callee37$(_context37) {
                    while (1) {
                        switch (_context37.prev = _context37.next) {
                            case 0:
                                schemaDefinition = { name: name, fields: fields };
                                formData = new tvFormData();

                                formData.append("schema", _base2.default.encode(JSON.stringify(schemaDefinition)));

                                _context37.next = 5;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/schemas/' + schemaId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 5:
                                response = _context37.sent;
                                return _context37.abrupt('return', response.schema);

                            case 7:
                            case 'end':
                                return _context37.stop();
                        }
                    }
                }, _callee37, this);
            }));

            function updateSchema(_x64, _x65, _x66, _x67) {
                return _ref37.apply(this, arguments);
            }

            return updateSchema;
        }()

        /**
         * Read a schema. See https://docs.truevault.com/schemas#read-a-schema
         * @param vaultId
         * @param schemaId
         * @returns {Promise<Object>}
         */

    }, {
        key: 'readSchema',
        value: function () {
            var _ref38 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee38(vaultId, schemaId) {
                var response;
                return _regenerator2.default.wrap(function _callee38$(_context38) {
                    while (1) {
                        switch (_context38.prev = _context38.next) {
                            case 0:
                                _context38.next = 2;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/schemas/' + schemaId);

                            case 2:
                                response = _context38.sent;
                                return _context38.abrupt('return', response.schema);

                            case 4:
                            case 'end':
                                return _context38.stop();
                        }
                    }
                }, _callee38, this);
            }));

            function readSchema(_x68, _x69) {
                return _ref38.apply(this, arguments);
            }

            return readSchema;
        }()

        /**
         * List all schemas in a vault. See https://docs.truevault.com/schemas#list-all-schemas
         * @param vaultId
         * @returns {Promise<Object>}
         */

    }, {
        key: 'listSchemas',
        value: function () {
            var _ref39 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee39(vaultId) {
                var response;
                return _regenerator2.default.wrap(function _callee39$(_context39) {
                    while (1) {
                        switch (_context39.prev = _context39.next) {
                            case 0:
                                _context39.next = 2;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/schemas');

                            case 2:
                                response = _context39.sent;
                                return _context39.abrupt('return', response.schemas);

                            case 4:
                            case 'end':
                                return _context39.stop();
                        }
                    }
                }, _callee39, this);
            }));

            function listSchemas(_x70) {
                return _ref39.apply(this, arguments);
            }

            return listSchemas;
        }()

        /**
         * Delete a schema. See https://docs.truevault.com/schemas#delete-a-schema
         * @param vaultId
         * @param schemaId
         * @returns {Promise<undefined>}
         */

    }, {
        key: 'deleteSchema',
        value: function () {
            var _ref40 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee40(vaultId, schemaId) {
                return _regenerator2.default.wrap(function _callee40$(_context40) {
                    while (1) {
                        switch (_context40.prev = _context40.next) {
                            case 0:
                                _context40.next = 2;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/schemas/' + schemaId, {
                                    method: 'DELETE'
                                });

                            case 2:
                            case 'end':
                                return _context40.stop();
                        }
                    }
                }, _callee40, this);
            }));

            function deleteSchema(_x71, _x72) {
                return _ref40.apply(this, arguments);
            }

            return deleteSchema;
        }()

        /**
         * Create the user schema. See https://docs.truevault.com/schemas#create-the-user-schema
         * @param {string} accountId account id that the user schema belongs to.
         * @param {string} name the name of the schema.
         * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createUserSchema',
        value: function () {
            var _ref41 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee41(accountId, name, fields) {
                var schemaDefinition, formData, response;
                return _regenerator2.default.wrap(function _callee41$(_context41) {
                    while (1) {
                        switch (_context41.prev = _context41.next) {
                            case 0:
                                schemaDefinition = { name: name, fields: fields };
                                formData = new tvFormData();

                                formData.append("schema", _base2.default.encode(JSON.stringify(schemaDefinition)));

                                _context41.next = 5;
                                return this.performLegacyRequest('v1/accounts/' + accountId + '/user_schema', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 5:
                                response = _context41.sent;
                                return _context41.abrupt('return', response.user_schema);

                            case 7:
                            case 'end':
                                return _context41.stop();
                        }
                    }
                }, _callee41, this);
            }));

            function createUserSchema(_x73, _x74, _x75) {
                return _ref41.apply(this, arguments);
            }

            return createUserSchema;
        }()

        /**
         * Read the user schema. See https://docs.truevault.com/schemas#read-the-user-schema
         * @param {string} accountId account id that the user schema belongs to.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'readUserSchema',
        value: function () {
            var _ref42 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee42(accountId) {
                var response;
                return _regenerator2.default.wrap(function _callee42$(_context42) {
                    while (1) {
                        switch (_context42.prev = _context42.next) {
                            case 0:
                                _context42.next = 2;
                                return this.performLegacyRequest('v1/accounts/' + accountId + '/user_schema', {
                                    method: 'GET'
                                });

                            case 2:
                                response = _context42.sent;
                                return _context42.abrupt('return', response.user_schema);

                            case 4:
                            case 'end':
                                return _context42.stop();
                        }
                    }
                }, _callee42, this);
            }));

            function readUserSchema(_x76) {
                return _ref42.apply(this, arguments);
            }

            return readUserSchema;
        }()

        /**
         * Update the user schema. See https://docs.truevault.com/schemas#update-the-user-schema
         * @param {string} accountId account id that the user schema belongs to.
         * @param {string} name the name of the schema.
         * @param {Array} fields field metadata for the schema. See https://docs.truevault.com/schemas.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateUserSchema',
        value: function () {
            var _ref43 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee43(accountId, name, fields) {
                var schemaDefinition, formData, response;
                return _regenerator2.default.wrap(function _callee43$(_context43) {
                    while (1) {
                        switch (_context43.prev = _context43.next) {
                            case 0:
                                schemaDefinition = { name: name, fields: fields };
                                formData = new tvFormData();

                                formData.append("schema", _base2.default.encode(JSON.stringify(schemaDefinition)));

                                _context43.next = 5;
                                return this.performLegacyRequest('v1/accounts/' + accountId + '/user_schema', {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 5:
                                response = _context43.sent;
                                return _context43.abrupt('return', response.user_schema);

                            case 7:
                            case 'end':
                                return _context43.stop();
                        }
                    }
                }, _callee43, this);
            }));

            function updateUserSchema(_x77, _x78, _x79) {
                return _ref43.apply(this, arguments);
            }

            return updateUserSchema;
        }()

        /**
         * Delete the user schema. See https://docs.truevault.com/schemas#delete-the-user-schema
         * @param {string} accountId account id that the user schema belongs to.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'deleteUserSchema',
        value: function () {
            var _ref44 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee44(accountId) {
                var response;
                return _regenerator2.default.wrap(function _callee44$(_context44) {
                    while (1) {
                        switch (_context44.prev = _context44.next) {
                            case 0:
                                _context44.next = 2;
                                return this.performLegacyRequest('v1/accounts/' + accountId + '/user_schema', {
                                    method: 'DELETE',
                                    body: new tvFormData()
                                });

                            case 2:
                                response = _context44.sent;
                                return _context44.abrupt('return', response.user_schema);

                            case 4:
                            case 'end':
                                return _context44.stop();
                        }
                    }
                }, _callee44, this);
            }));

            function deleteUserSchema(_x80) {
                return _ref44.apply(this, arguments);
            }

            return deleteUserSchema;
        }()

        /**
         * Create a new document. See https://docs.truevault.com/documents#create-a-document.
         * @param {string} vaultId vault to place the document in.
         * @param {string|null} schemaId schema to associate with the document.
         * @param {Object} document document contents.
         * @param {string|null} [ownerId] the document's owner.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createDocument',
        value: function () {
            var _ref45 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee45(vaultId, schemaId, document, ownerId) {
                var body, response;
                return _regenerator2.default.wrap(function _callee45$(_context45) {
                    while (1) {
                        switch (_context45.prev = _context45.next) {
                            case 0:
                                body = { document: document };


                                if (typeof schemaId === 'string') {
                                    body.schema_id = schemaId;
                                }

                                if (typeof ownerId === 'string') {
                                    body.owner_id = ownerId;
                                }
                                _context45.next = 5;
                                return this.performJSONRequest('v2/vaults/' + vaultId + '/documents', {
                                    method: 'POST',
                                    body: JSON.stringify(body)
                                });

                            case 5:
                                response = _context45.sent;
                                return _context45.abrupt('return', response.document);

                            case 7:
                            case 'end':
                                return _context45.stop();
                        }
                    }
                }, _callee45, this);
            }));

            function createDocument(_x81, _x82, _x83, _x84) {
                return _ref45.apply(this, arguments);
            }

            return createDocument;
        }()

        /**
         * List documents in a vault. See https://docs.truevault.com/documents#list-all-documents.
         * @param {string} vaultId vault to look in.
         * @param {boolean} full include document contents in listing.
         * @param {number} [page] which page to get, if pagination is needed.
         * @param {number} [perPage] number of documents per page.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'listDocuments',
        value: function () {
            var _ref46 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee46(vaultId, full, page, perPage) {
                var url, response;
                return _regenerator2.default.wrap(function _callee46$(_context46) {
                    while (1) {
                        switch (_context46.prev = _context46.next) {
                            case 0:
                                url = 'v1/vaults/' + vaultId + '/documents?';

                                if (!!full) {
                                    url += '&full=' + full;
                                }
                                if (!!page) {
                                    url += '&page=' + page;
                                }
                                if (!!perPage) {
                                    url += '&per_page=' + perPage;
                                }
                                _context46.next = 6;
                                return this.performLegacyRequest(url);

                            case 6:
                                response = _context46.sent;

                                if (!!full) {
                                    response.data.items = response.data.items.map(function (item) {
                                        if (item.document) {
                                            item.document = JSON.parse(_base2.default.decode(item.document));
                                        }
                                        return item;
                                    });
                                }
                                return _context46.abrupt('return', response.data);

                            case 9:
                            case 'end':
                                return _context46.stop();
                        }
                    }
                }, _callee46, this);
            }));

            function listDocuments(_x85, _x86, _x87, _x88) {
                return _ref46.apply(this, arguments);
            }

            return listDocuments;
        }()

        /**
         * List documents in a schema. See https://docs.truevault.com/documents#list-all-documents-with-schema
         * @param {string} vaultId vault to look in.
         * @param {string} schemaId
         * @param {boolean} [full] include document contents in listing.
         * @param {number} [page] which page to get, if pagination is needed.
         * @param {number} [perPage] number of documents per page.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'listDocumentsInSchema',
        value: function () {
            var _ref47 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee47(vaultId, schemaId, full, page, perPage) {
                var url, response;
                return _regenerator2.default.wrap(function _callee47$(_context47) {
                    while (1) {
                        switch (_context47.prev = _context47.next) {
                            case 0:
                                url = 'v1/vaults/' + vaultId + '/schemas/' + schemaId + '/documents?';

                                if (!!full) {
                                    url += '&full=' + full;
                                }
                                if (!!page) {
                                    url += '&page=' + page;
                                }
                                if (!!perPage) {
                                    url += '&per_page=' + perPage;
                                }
                                _context47.next = 6;
                                return this.performLegacyRequest(url);

                            case 6:
                                response = _context47.sent;

                                if (!!full) {
                                    response.data.items = response.data.items.map(function (item) {
                                        if (item.document) {
                                            item.document = JSON.parse(_base2.default.decode(item.document));
                                        }
                                        return item;
                                    });
                                }
                                return _context47.abrupt('return', response.data);

                            case 9:
                            case 'end':
                                return _context47.stop();
                        }
                    }
                }, _callee47, this);
            }));

            function listDocumentsInSchema(_x89, _x90, _x91, _x92, _x93) {
                return _ref47.apply(this, arguments);
            }

            return listDocumentsInSchema;
        }()

        /**
         * Get the contents of one or more documents. See https://docs.truevault.com/documents#read-a-document.
         * @param {string} vaultId vault to look in.
         * @param {Array} documentIds document ids to retrieve.
         * @returns {Promise.<Array>}
         */

    }, {
        key: 'getDocuments',
        value: function () {
            var _ref48 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee48(vaultId, documentIds) {
                var requestDocumentIds, response;
                return _regenerator2.default.wrap(function _callee48$(_context48) {
                    while (1) {
                        switch (_context48.prev = _context48.next) {
                            case 0:
                                requestDocumentIds = void 0;

                                if (!(documentIds.length === 0)) {
                                    _context48.next = 5;
                                    break;
                                }

                                return _context48.abrupt('return', []);

                            case 5:
                                if (documentIds.length === 1) {
                                    // Sending a single ID to the API will only return the document's contents. In order to
                                    // retrieve a proper multiget response with `id` and `owner_id`, we need to send a
                                    // request with two instances of the same document ID. We will then only return the
                                    // first result from the response.
                                    requestDocumentIds = [documentIds[0], documentIds[0]];
                                } else {
                                    requestDocumentIds = documentIds;
                                }

                            case 6:
                                _context48.next = 8;
                                return this.performJSONRequest('v2/vaults/' + vaultId + '/documents/' + requestDocumentIds.join(','));

                            case 8:
                                response = _context48.sent;
                                return _context48.abrupt('return', response.documents);

                            case 10:
                            case 'end':
                                return _context48.stop();
                        }
                    }
                }, _callee48, this);
            }));

            function getDocuments(_x94, _x95) {
                return _ref48.apply(this, arguments);
            }

            return getDocuments;
        }()

        /**
         * Perform a search. See https://docs.truevault.com/documentsearch#search-documents.
         * @param {string} vaultId vault to search in.
         * @param {Object} searchOption search query. See https://docs.truevault.com/documentsearch#defining-search-options.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'searchDocuments',
        value: function () {
            var _ref49 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee49(vaultId, searchOption) {
                var formData, response, documents;
                return _regenerator2.default.wrap(function _callee49$(_context49) {
                    while (1) {
                        switch (_context49.prev = _context49.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("search_option", _base2.default.encode(JSON.stringify(searchOption)));

                                _context49.next = 4;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/search', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 4:
                                response = _context49.sent;
                                documents = response.data.documents.map(function (doc) {
                                    if (doc.document) {
                                        doc.document = JSON.parse(_base2.default.decode(doc.document));
                                    }
                                    return doc;
                                });
                                return _context49.abrupt('return', {
                                    info: response.data.info,
                                    documents: documents
                                });

                            case 7:
                            case 'end':
                                return _context49.stop();
                        }
                    }
                }, _callee49, this);
            }));

            function searchDocuments(_x96, _x97) {
                return _ref49.apply(this, arguments);
            }

            return searchDocuments;
        }()

        /**
         * Update an existing document. See https://docs.truevault.com/documents#update-a-document.
         * @param {string} vaultId vault that contains the document.
         * @param {string} documentId document id to update.
         * @param {Object} document new document contents.
         * @param {string|null} [ownerId] the new document owner.
         * @param {string|null} [schemaId] the new document schema.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateDocument',
        value: function () {
            var _ref50 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee50(vaultId, documentId, document, ownerId, schemaId) {
                var body, response;
                return _regenerator2.default.wrap(function _callee50$(_context50) {
                    while (1) {
                        switch (_context50.prev = _context50.next) {
                            case 0:
                                body = { document: document };


                                if (typeof ownerId === 'string') {
                                    body.owner_id = ownerId;
                                }

                                if (typeof schemaId === 'string') {
                                    body.schema_id = schemaId;
                                }

                                _context50.next = 5;
                                return this.performJSONRequest('v2/vaults/' + vaultId + '/documents/' + documentId, {
                                    method: 'PUT',
                                    body: JSON.stringify(body)
                                });

                            case 5:
                                response = _context50.sent;
                                return _context50.abrupt('return', response.document);

                            case 7:
                            case 'end':
                                return _context50.stop();
                        }
                    }
                }, _callee50, this);
            }));

            function updateDocument(_x98, _x99, _x100, _x101, _x102) {
                return _ref50.apply(this, arguments);
            }

            return updateDocument;
        }()

        /**
         * Update a document's owner. See https://docs.truevault.com/documents#update-a-document-s-owner.
         * @param {string} vaultId the vault containing the document.
         * @param {string} documentId id of the document.
         * @param {string} ownerId the new document owner, or '' to remove owner.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateDocumentOwner',
        value: function () {
            var _ref51 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee51(vaultId, documentId, ownerId) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee51$(_context51) {
                    while (1) {
                        switch (_context51.prev = _context51.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('owner_id', ownerId);

                                _context51.next = 4;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/documents/' + documentId + '/owner', {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 4:
                                response = _context51.sent;
                                return _context51.abrupt('return', response.document);

                            case 6:
                            case 'end':
                                return _context51.stop();
                        }
                    }
                }, _callee51, this);
            }));

            function updateDocumentOwner(_x103, _x104, _x105) {
                return _ref51.apply(this, arguments);
            }

            return updateDocumentOwner;
        }()

        /**
         * Delete a document. See https://docs.truevault.com/documents#delete-a-document.
         * @param {string} vaultId vault that contains the document.
         * @param {string} documentId document id to delete.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'deleteDocument',
        value: function () {
            var _ref52 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee52(vaultId, documentId) {
                var response;
                return _regenerator2.default.wrap(function _callee52$(_context52) {
                    while (1) {
                        switch (_context52.prev = _context52.next) {
                            case 0:
                                _context52.next = 2;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/documents/' + documentId, {
                                    method: 'DELETE'
                                });

                            case 2:
                                response = _context52.sent;
                                return _context52.abrupt('return', {
                                    id: response.document_id,
                                    owner_id: response.owner_id
                                });

                            case 4:
                            case 'end':
                                return _context52.stop();
                        }
                    }
                }, _callee52, this);
            }));

            function deleteDocument(_x106, _x107) {
                return _ref52.apply(this, arguments);
            }

            return deleteDocument;
        }()

        /**
         * Create a BLOB. See https://docs.truevault.com/blobs#create-a-blob.
         * @param {string} vaultId vault that will contain the blob.
         * @param {File|Blob} file the BLOB's contents.
         * @param {string|null} [ownerId] the BLOB's owner.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createBlob',
        value: function () {
            var _ref53 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee53(vaultId, file, ownerId) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee53$(_context53) {
                    while (1) {
                        switch (_context53.prev = _context53.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('file', file);

                                if (typeof ownerId === 'string') {
                                    formData.append('owner_id', ownerId);
                                }

                                _context53.next = 5;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/blobs', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 5:
                                response = _context53.sent;
                                return _context53.abrupt('return', response.blob);

                            case 7:
                            case 'end':
                                return _context53.stop();
                        }
                    }
                }, _callee53, this);
            }));

            function createBlob(_x108, _x109, _x110) {
                return _ref53.apply(this, arguments);
            }

            return createBlob;
        }()

        /**
         * Create a BLOB with a callback for progress updates. See https://docs.truevault.com/blobs#create-a-blob.
         * @param {string} vaultId vault that will contain the blob.
         * @param {File|Blob} file the BLOB's contents.
         * @param {function} progressCallback callback for XHR's `progress` and `load` events.
         * @param {string|null} [ownerId] the BLOB's owner.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createBlobWithProgress',
        value: function () {
            var _ref54 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee54(vaultId, file, progressCallback, ownerId) {
                var formData, createResponse;
                return _regenerator2.default.wrap(function _callee54$(_context54) {
                    while (1) {
                        switch (_context54.prev = _context54.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('file', file);

                                if (typeof ownerId === 'string') {
                                    formData.append('owner_id', ownerId);
                                }

                                _context54.next = 5;
                                return this.performLegacyRequestWithProgress('post', this.host + '/v1/vaults/' + vaultId + '/blobs', formData, progressCallback, 'json');

                            case 5:
                                createResponse = _context54.sent;
                                return _context54.abrupt('return', createResponse.blob);

                            case 7:
                            case 'end':
                                return _context54.stop();
                        }
                    }
                }, _callee54, this);
            }));

            function createBlobWithProgress(_x111, _x112, _x113, _x114) {
                return _ref54.apply(this, arguments);
            }

            return createBlobWithProgress;
        }()

        /**
         * Update a BLOB with a callback for progress updates. See https://docs.truevault.com/blobs#update-a-blob.
         * @param {string} vaultId vault that contains the blob.
         * @param {string} blobId the ID of the blob being updated
         * @param {File|Blob} file the BLOB's contents.
         * @param {function} progressCallback callback for XHR's `progress` and `load` events.
         * @param {string|null} [ownerId] the BLOB's new owner.
         * @returns {Promise<*>}
         */

    }, {
        key: 'updateBlobWithProgress',
        value: function () {
            var _ref55 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee55(vaultId, blobId, file, progressCallback, ownerId) {
                var formData, updateResponse;
                return _regenerator2.default.wrap(function _callee55$(_context55) {
                    while (1) {
                        switch (_context55.prev = _context55.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('file', file);

                                if (typeof ownerId === 'string') {
                                    formData.append('owner_id', ownerId);
                                }

                                _context55.next = 5;
                                return this.performLegacyRequestWithProgress('put', this.host + '/v1/vaults/' + vaultId + '/blobs/' + blobId, formData, progressCallback, 'json');

                            case 5:
                                updateResponse = _context55.sent;
                                return _context55.abrupt('return', updateResponse.blob);

                            case 7:
                            case 'end':
                                return _context55.stop();
                        }
                    }
                }, _callee55, this);
            }));

            function updateBlobWithProgress(_x115, _x116, _x117, _x118, _x119) {
                return _ref55.apply(this, arguments);
            }

            return updateBlobWithProgress;
        }()

        /**
         * Get a BLOB with a callback for progress updates. See https://docs.truevault.com/blobs#read-a-blob.
         * @param {string} vaultId vault that contains the blob.
         * @param {string} blobId the ID of the blob being read
         * @param {function} progressCallback callback for XHR's `progress` and `load` events.
         * @returns {Promise<{blob: *}>}
         */

    }, {
        key: 'getBlobWithProgress',
        value: function () {
            var _ref56 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee56(vaultId, blobId, progressCallback) {
                var xhr, contentType, contentDisposition, fileName;
                return _regenerator2.default.wrap(function _callee56$(_context56) {
                    while (1) {
                        switch (_context56.prev = _context56.next) {
                            case 0:
                                _context56.next = 2;
                                return this.performLegacyRequestWithProgress('get', this.host + '/v1/vaults/' + vaultId + '/blobs/' + blobId, null, progressCallback, 'blob');

                            case 2:
                                xhr = _context56.sent;
                                contentType = xhr.getResponseHeader("Content-Type");
                                contentDisposition = xhr.getResponseHeader("Content-Disposition");
                                fileName = TrueVaultClient._extractFilenameFromContentDispositionHeader(contentDisposition);
                                return _context56.abrupt('return', { blob: xhr.response, contentType: contentType, fileName: fileName });

                            case 7:
                            case 'end':
                                return _context56.stop();
                        }
                    }
                }, _callee56, this);
            }));

            function getBlobWithProgress(_x120, _x121, _x122) {
                return _ref56.apply(this, arguments);
            }

            return getBlobWithProgress;
        }()

        /**
         * Get a BLOB's contents. See https://docs.truevault.com/blobs#read-a-blob.
         * @param {string} vaultId the vault containing the BLOB.
         * @param {string} blobId id of the BLOB.
         * @returns {Promise.<*>}
         */

    }, {
        key: 'getBlob',
        value: function () {
            var _ref57 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee57(vaultId, blobId) {
                var headers, response, blob, contentType, contentDisposition, fileName;
                return _regenerator2.default.wrap(function _callee57$(_context57) {
                    while (1) {
                        switch (_context57.prev = _context57.next) {
                            case 0:
                                headers = {
                                    Authorization: this.authHeader
                                };
                                _context57.next = 3;
                                return tvFetch(this.host + '/v1/vaults/' + vaultId + '/blobs/' + blobId, {
                                    headers: headers
                                });

                            case 3:
                                response = _context57.sent;

                                if (!response.blob) {
                                    _context57.next = 10;
                                    break;
                                }

                                _context57.next = 7;
                                return response.blob();

                            case 7:
                                _context57.t0 = _context57.sent;
                                _context57.next = 11;
                                break;

                            case 10:
                                _context57.t0 = response.body;

                            case 11:
                                blob = _context57.t0;
                                contentType = response.headers.get('Content-Type');
                                contentDisposition = response.headers.get('Content-Disposition');
                                fileName = TrueVaultClient._extractFilenameFromContentDispositionHeader(contentDisposition);
                                return _context57.abrupt('return', { blob: blob, contentType: contentType, fileName: fileName });

                            case 16:
                            case 'end':
                                return _context57.stop();
                        }
                    }
                }, _callee57, this);
            }));

            function getBlob(_x123, _x124) {
                return _ref57.apply(this, arguments);
            }

            return getBlob;
        }()

        /**
         * List the BLOBs in a vault. See https://docs.truevault.com/blobs#list-all-blobs.
         * @param {string} vaultId the vault to list.
         * @param {number} [page] if paginating, the page.
         * @param {number} [perPage] if paginating, the number of items per page.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'listBlobs',
        value: function () {
            var _ref58 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee58(vaultId, page, perPage) {
                var url, response;
                return _regenerator2.default.wrap(function _callee58$(_context58) {
                    while (1) {
                        switch (_context58.prev = _context58.next) {
                            case 0:
                                url = 'v1/vaults/' + vaultId + '/blobs?';

                                if (!!page) {
                                    url += '&page=' + page;
                                }
                                if (!!perPage) {
                                    url += '&per_page=' + perPage;
                                }
                                _context58.next = 5;
                                return this.performLegacyRequest(url);

                            case 5:
                                response = _context58.sent;
                                return _context58.abrupt('return', response.data);

                            case 7:
                            case 'end':
                                return _context58.stop();
                        }
                    }
                }, _callee58, this);
            }));

            function listBlobs(_x125, _x126, _x127) {
                return _ref58.apply(this, arguments);
            }

            return listBlobs;
        }()

        /**
         * Update a BLOB's contents. See https://docs.truevault.com/blobs#update-a-blob.
         * @param {string} vaultId the vault containing the BLOB.
         * @param {string} blobId id of the BLOB.
         * @param {File|Blob} file the BLOB's contents.
         * @param {string|null} [ownerId] the new BLOB owner.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateBlob',
        value: function () {
            var _ref59 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee59(vaultId, blobId, file, ownerId) {
                var formData, resopnse;
                return _regenerator2.default.wrap(function _callee59$(_context59) {
                    while (1) {
                        switch (_context59.prev = _context59.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('file', file);

                                if (typeof ownerId === 'string') {
                                    formData.append('owner_id', ownerId);
                                }

                                _context59.next = 5;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/blobs/' + blobId, {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 5:
                                resopnse = _context59.sent;
                                return _context59.abrupt('return', resopnse.blob);

                            case 7:
                            case 'end':
                                return _context59.stop();
                        }
                    }
                }, _callee59, this);
            }));

            function updateBlob(_x128, _x129, _x130, _x131) {
                return _ref59.apply(this, arguments);
            }

            return updateBlob;
        }()

        /**
         * Update a BLOB's owner. See https://docs.truevault.com/blobs#update-a-blob-s-owner.
         * @param {string} vaultId the vault containing the BLOB.
         * @param {string} blobId id of the BLOB.
         * @param {string} ownerId the new BLOB owner, or '' to remove owner.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'updateBlobOwner',
        value: function () {
            var _ref60 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee60(vaultId, blobId, ownerId) {
                var formData, response;
                return _regenerator2.default.wrap(function _callee60$(_context60) {
                    while (1) {
                        switch (_context60.prev = _context60.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append('owner_id', ownerId);

                                _context60.next = 4;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/blobs/' + blobId + '/owner', {
                                    method: 'PUT',
                                    body: formData
                                });

                            case 4:
                                response = _context60.sent;
                                return _context60.abrupt('return', response.blob);

                            case 6:
                            case 'end':
                                return _context60.stop();
                        }
                    }
                }, _callee60, this);
            }));

            function updateBlobOwner(_x132, _x133, _x134) {
                return _ref60.apply(this, arguments);
            }

            return updateBlobOwner;
        }()

        /**
         * Delete a BLOB. See https://docs.truevault.com/blobs#delete-a-blob.
         * @param {string} vaultId the vault containing the BLOB.
         * @param {string} blobId the BLOB to delete.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'deleteBlob',
        value: function () {
            var _ref61 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee61(vaultId, blobId) {
                var response;
                return _regenerator2.default.wrap(function _callee61$(_context61) {
                    while (1) {
                        switch (_context61.prev = _context61.next) {
                            case 0:
                                _context61.next = 2;
                                return this.performLegacyRequest('v1/vaults/' + vaultId + '/blobs/' + blobId, {
                                    method: 'DELETE'
                                });

                            case 2:
                                response = _context61.sent;
                                return _context61.abrupt('return', response.blob);

                            case 4:
                            case 'end':
                                return _context61.stop();
                        }
                    }
                }, _callee61, this);
            }));

            function deleteBlob(_x135, _x136) {
                return _ref61.apply(this, arguments);
            }

            return deleteBlob;
        }()

        /**
         * Send an email to a user via Sendgrid. See https://docs.truevault.com/email#email-a-user.
         * @param {string} sendgridApiKey Sendgrid API key.
         * @param {string} userId the user to send to.
         * @param {string} sendgridTemplateId the Sendgrid template to use.
         * @param {string} fromEmailSpecifier the specifier for the "From" address. See https://docs.truevault.com/email#value-specifiers.
         * @param {string} toEmailSpecifier the specifier for the "To" address. See https://docs.truevault.com/email#value-specifiers.
         * @param {Object} substitutions substitutions to use in the template. See https://docs.truevault.com/email#template-substitution.
         * @returns {Promise.<String>}
         */

    }, {
        key: 'sendEmailSendgrid',
        value: function () {
            var _ref62 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee62(sendgridApiKey, userId, sendgridTemplateId, fromEmailSpecifier, toEmailSpecifier, substitutions) {
                var response;
                return _regenerator2.default.wrap(function _callee62$(_context62) {
                    while (1) {
                        switch (_context62.prev = _context62.next) {
                            case 0:
                                _context62.next = 2;
                                return this.performJSONRequest('v1/users/' + userId + '/message/email', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        provider: 'SENDGRID',
                                        auth: { sendgrid_api_key: sendgridApiKey },
                                        template_id: sendgridTemplateId,
                                        from_email_address: fromEmailSpecifier,
                                        to_email_address: toEmailSpecifier,
                                        substitutions: substitutions
                                    })
                                });

                            case 2:
                                response = _context62.sent;
                                return _context62.abrupt('return', response.provider_message_id);

                            case 4:
                            case 'end':
                                return _context62.stop();
                        }
                    }
                }, _callee62, this);
            }));

            function sendEmailSendgrid(_x137, _x138, _x139, _x140, _x141, _x142) {
                return _ref62.apply(this, arguments);
            }

            return sendEmailSendgrid;
        }()

        /**
         * Send an SMS message to a user via Twilio.
         * @param {string} twilioAccountSid Twilio Account Sid. See https://www.twilio.com/console
         * @param {string} twilioKeySid Twilio Key Sid. See https://www.twilio.com/docs/api/rest/keys
         * @param {string} twilioKeySecret Twilio Key Secret. See https://www.twilio.com/docs/api/rest/keys
         * @param {string} userId the user to send to.
         * @param {string} fromNumberSpecifier the specifier for the "From" phone number. See https://docs.truevault.com/email#value-specifiers.
         * @param {string} toNumberSpecifier the specifier for the "To" phone number. See https://docs.truevault.com/email#value-specifiers.
         * @param {Object} messageBody The text to send in the body of the message
         * @param {Array} mediaURLs Optional array of value specifiers producing URLs of images to include in the message. See https://docs.truevault.com/email#value-specifiers.
         * @returns {Promise.<String>}
         */

    }, {
        key: 'sendSMSTwilio',
        value: function () {
            var _ref63 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee63(twilioAccountSid, twilioKeySid, twilioKeySecret, userId, fromNumberSpecifier, toNumberSpecifier, messageBody, mediaURLs) {
                var response;
                return _regenerator2.default.wrap(function _callee63$(_context63) {
                    while (1) {
                        switch (_context63.prev = _context63.next) {
                            case 0:
                                _context63.next = 2;
                                return this.performJSONRequest('v1/users/' + userId + '/message/sms', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        provider: 'TWILIO',
                                        auth: {
                                            account_sid: twilioAccountSid,
                                            username: twilioKeySid,
                                            password: twilioKeySecret
                                        },
                                        from_number: fromNumberSpecifier,
                                        to_number: toNumberSpecifier,
                                        message_body: messageBody,
                                        media_urls: mediaURLs || []
                                    })
                                });

                            case 2:
                                response = _context63.sent;
                                return _context63.abrupt('return', response.provider_message_id);

                            case 4:
                            case 'end':
                                return _context63.stop();
                        }
                    }
                }, _callee63, this);
            }));

            function sendSMSTwilio(_x143, _x144, _x145, _x146, _x147, _x148, _x149, _x150) {
                return _ref63.apply(this, arguments);
            }

            return sendSMSTwilio;
        }()

        /**
         * Create a password reset flow. See https://docs.truevault.com/PasswordResetFlow.html.
         * @param {string} name name of this flow
         * @param {string} sendGridTemplateId SendGrid template id to use when sending password reset emails
         * @param {string} sendGridApiKey SendGrid API key
         * @param {Object} userEmailValueSpec Value specifier for the "To" address. See https://docs.truevault.com/email#value-specifiers.
         * @param {Object} fromEmailValueSpec Value specifier for the "From" address. See https://docs.truevault.com/email#value-specifiers.
         * @param {Object} substitutions substitutions to use in the template. See https://docs.truevault.com/email#template-substitution.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createPasswordResetFlow',
        value: function () {
            var _ref64 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee64(name, sendGridTemplateId, sendGridApiKey, userEmailValueSpec, fromEmailValueSpec, substitutions) {
                var response;
                return _regenerator2.default.wrap(function _callee64$(_context64) {
                    while (1) {
                        switch (_context64.prev = _context64.next) {
                            case 0:
                                _context64.next = 2;
                                return this.performJSONRequest('v1/password_reset_flows', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        name: name,
                                        sg_api_key: sendGridApiKey,
                                        sg_template_id: sendGridTemplateId,
                                        user_email_value_spec: userEmailValueSpec,
                                        from_email_value_spec: fromEmailValueSpec,
                                        substitutions: substitutions
                                    })
                                });

                            case 2:
                                response = _context64.sent;
                                return _context64.abrupt('return', response.password_reset_flow);

                            case 4:
                            case 'end':
                                return _context64.stop();
                        }
                    }
                }, _callee64, this);
            }));

            function createPasswordResetFlow(_x151, _x152, _x153, _x154, _x155, _x156) {
                return _ref64.apply(this, arguments);
            }

            return createPasswordResetFlow;
        }()

        /**
         * List password reset flows. See https://docs.truevault.com/PasswordResetFlow.html.
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'listPasswordResetFlows',
        value: function () {
            var _ref65 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee65() {
                var response;
                return _regenerator2.default.wrap(function _callee65$(_context65) {
                    while (1) {
                        switch (_context65.prev = _context65.next) {
                            case 0:
                                _context65.next = 2;
                                return this.performJSONRequest('v1/password_reset_flows');

                            case 2:
                                response = _context65.sent;
                                return _context65.abrupt('return', response.password_reset_flows);

                            case 4:
                            case 'end':
                                return _context65.stop();
                        }
                    }
                }, _callee65, this);
            }));

            function listPasswordResetFlows() {
                return _ref65.apply(this, arguments);
            }

            return listPasswordResetFlows;
        }()

        /**
         * Send a password reset email to a user. See https://docs.truevault.com/PasswordResetFlow.html.
         * @param {string} flowId the flow to use to send a password reset email
         * @param {string} username
         * @returns {Promise.<undefined>}
         */

    }, {
        key: 'sendPasswordResetEmail',
        value: function () {
            var _ref66 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee66(flowId, username) {
                return _regenerator2.default.wrap(function _callee66$(_context66) {
                    while (1) {
                        switch (_context66.prev = _context66.next) {
                            case 0:
                                _context66.next = 2;
                                return this.performJSONRequest('v1/password_reset_flows/' + flowId + '/email', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        username: username
                                    })
                                });

                            case 2:
                            case 'end':
                                return _context66.stop();
                        }
                    }
                }, _callee66, this);
            }));

            function sendPasswordResetEmail(_x157, _x158) {
                return _ref66.apply(this, arguments);
            }

            return sendPasswordResetEmail;
        }()

        /**
         * Link a Scoped Access Token to a Password Reset Flow. See https://docs.truevault.com/passwordresetflow#link-a-scoped-access-token-to-a-password-reset-flow
         * @param {string} flowId
         * @param {string} tokenId
         * @returns {Promise.<undefined>}
         */

    }, {
        key: 'linkScopedAccessTokenToPasswordResetFlow',
        value: function () {
            var _ref67 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee67(flowId, tokenId) {
                return _regenerator2.default.wrap(function _callee67$(_context67) {
                    while (1) {
                        switch (_context67.prev = _context67.next) {
                            case 0:
                                _context67.next = 2;
                                return this.performJSONRequest('v1/password_reset_flows/' + flowId + '/link_sat', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        scoped_access_token_id: tokenId
                                    })
                                });

                            case 2:
                                return _context67.abrupt('return', _context67.sent);

                            case 3:
                            case 'end':
                                return _context67.stop();
                        }
                    }
                }, _callee67, this);
            }));

            function linkScopedAccessTokenToPasswordResetFlow(_x159, _x160) {
                return _ref67.apply(this, arguments);
            }

            return linkScopedAccessTokenToPasswordResetFlow;
        }()

        /**
         * Create a new Scoped Access Token. See: https://docs.truevault.com/scopedaccesstokens#create-a-scoped-access-token
         * @param {string} name
         * @param {Array} policy See https://docs.truevault.com/groups for policy definition documentation
         * @param {Date} [notValidAfter] notValidAfter optional parameter specifying when the returned access token expires
         * @param {number} [allowedUses] allowedUses optional parameter specifying number of allowed uses
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'createScopedAccessToken',
        value: function () {
            var _ref68 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee68(name, policy, notValidAfter, allowedUses) {
                var jsonPayload, response;
                return _regenerator2.default.wrap(function _callee68$(_context68) {
                    while (1) {
                        switch (_context68.prev = _context68.next) {
                            case 0:
                                jsonPayload = {
                                    name: name,
                                    policy: policy
                                };


                                if (!!notValidAfter) {
                                    jsonPayload['not_valid_after'] = notValidAfter.toISOString();
                                }

                                if (!!allowedUses) {
                                    jsonPayload['allowed_uses'] = allowedUses;
                                }

                                _context68.next = 5;
                                return this.performJSONRequest('v1/scoped_access_tokens', {
                                    method: 'POST',
                                    body: JSON.stringify(jsonPayload)
                                });

                            case 5:
                                response = _context68.sent;
                                return _context68.abrupt('return', response.scoped_access_token);

                            case 7:
                            case 'end':
                                return _context68.stop();
                        }
                    }
                }, _callee68, this);
            }));

            function createScopedAccessToken(_x161, _x162, _x163, _x164) {
                return _ref68.apply(this, arguments);
            }

            return createScopedAccessToken;
        }()

        /**
         * Get a Scoped Access Token. See https://docs.truevault.com/scopedaccesstokens#get-a-scoped-access-token
         * @param {string} tokenId the token to get
         * @returns {Promise.<Object>}
         */

    }, {
        key: 'getScopedAccessToken',
        value: function () {
            var _ref69 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee69(tokenId) {
                var response;
                return _regenerator2.default.wrap(function _callee69$(_context69) {
                    while (1) {
                        switch (_context69.prev = _context69.next) {
                            case 0:
                                _context69.next = 2;
                                return this.performJSONRequest('v1/scoped_access_tokens/' + tokenId);

                            case 2:
                                response = _context69.sent;
                                return _context69.abrupt('return', response.scoped_access_token);

                            case 4:
                            case 'end':
                                return _context69.stop();
                        }
                    }
                }, _callee69, this);
            }));

            function getScopedAccessToken(_x165) {
                return _ref69.apply(this, arguments);
            }

            return getScopedAccessToken;
        }()

        /**
         * List all Scoped Access Tokens. See https://docs.truevault.com/scopedaccesstokens#list-scoped-access-tokens
         * @returns {Promise.<Array>}
         */

    }, {
        key: 'listScopedAccessTokens',
        value: function () {
            var _ref70 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee70() {
                var response;
                return _regenerator2.default.wrap(function _callee70$(_context70) {
                    while (1) {
                        switch (_context70.prev = _context70.next) {
                            case 0:
                                _context70.next = 2;
                                return this.performJSONRequest('v1/scoped_access_tokens');

                            case 2:
                                response = _context70.sent;
                                return _context70.abrupt('return', response.data.items);

                            case 4:
                            case 'end':
                                return _context70.stop();
                        }
                    }
                }, _callee70, this);
            }));

            function listScopedAccessTokens() {
                return _ref70.apply(this, arguments);
            }

            return listScopedAccessTokens;
        }()

        /**
         * Delete a Scoped Access Token. See https://docs.truevault.com/scopedaccesstokens#delete-a-scoped-access-token
         * @param {string} tokenId the token to delete
         * @returns {Promise.<undefined>}
         */

    }, {
        key: 'deleteScopedAccessToken',
        value: function () {
            var _ref71 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee71(tokenId) {
                return _regenerator2.default.wrap(function _callee71$(_context71) {
                    while (1) {
                        switch (_context71.prev = _context71.next) {
                            case 0:
                                _context71.next = 2;
                                return this.performJSONRequest('v1/scoped_access_tokens/' + tokenId, {
                                    method: 'DELETE'
                                });

                            case 2:
                                return _context71.abrupt('return', _context71.sent);

                            case 3:
                            case 'end':
                                return _context71.stop();
                        }
                    }
                }, _callee71, this);
            }));

            function deleteScopedAccessToken(_x166) {
                return _ref71.apply(this, arguments);
            }

            return deleteScopedAccessToken;
        }()
    }, {
        key: 'accessToken',
        get: function get() {
            if (!this._accessToken) {
                throw new Error('No access token set. This client may have been configured with an API key or a custom auth header');
            }
            return this._accessToken;
        }

        /**
         * Returns the Authentication: header used for making requests (e. g. "Basic ABC123"). Useful if you need to make
         * raw requests for some reason.
         * @returns {*}
         */

    }, {
        key: 'authHeader',
        get: function get() {
            return this._authHeader;
        }
    }], [{
        key: 'login',
        value: function () {
            var _ref72 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee72(accountId, username, password, mfaCode, host, notValidAfter) {
                var accessToken;
                return _regenerator2.default.wrap(function _callee72$(_context72) {
                    while (1) {
                        switch (_context72.prev = _context72.next) {
                            case 0:
                                _context72.next = 2;
                                return TrueVaultClient.generateAccessToken(accountId, username, password, mfaCode, host, notValidAfter);

                            case 2:
                                accessToken = _context72.sent;
                                return _context72.abrupt('return', new TrueVaultClient({ 'accessToken': accessToken }, host));

                            case 4:
                            case 'end':
                                return _context72.stop();
                        }
                    }
                }, _callee72, this);
            }));

            function login(_x167, _x168, _x169, _x170, _x171, _x172) {
                return _ref72.apply(this, arguments);
            }

            return login;
        }()

        /**
         * Log in with a username and password and return the resulting access token.
         * See https://docs.truevault.com/authentication#login-a-user.
         * @param {string} accountId account id that the user belongs to.
         * @param {string} username user's username.
         * @param {string} password user's password.
         * @param {string} [mfaCode] current MFA code, if user has MFA configured.
         * @param {string} [host] host optional parameter specifying TV API host; defaults to https://api.truevault.com
         * @param {Date} [notValidAfter] notValidAfter optional parameter specifying when the returned access token expires
         * @returns {Promise.<string>}
         */

    }, {
        key: 'generateAccessToken',
        value: function () {
            var _ref73 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee73(accountId, username, password, mfaCode, host, notValidAfter) {
                var formData, tvClient, response;
                return _regenerator2.default.wrap(function _callee73$(_context73) {
                    while (1) {
                        switch (_context73.prev = _context73.next) {
                            case 0:
                                formData = new tvFormData();

                                formData.append("account_id", accountId);
                                formData.append("username", username);
                                formData.append("password", password);
                                if (!!mfaCode) {
                                    formData.append("mfa_code", mfaCode);
                                }
                                if (!!notValidAfter) {
                                    formData.append("not_valid_after", notValidAfter.toISOString());
                                }

                                tvClient = new TrueVaultClient(null, host);
                                _context73.next = 9;
                                return tvClient.performLegacyRequest('v1/auth/login', {
                                    method: 'POST',
                                    body: formData
                                });

                            case 9:
                                response = _context73.sent;
                                return _context73.abrupt('return', response.user.access_token);

                            case 11:
                            case 'end':
                                return _context73.stop();
                        }
                    }
                }, _callee73, this);
            }));

            function generateAccessToken(_x173, _x174, _x175, _x176, _x177, _x178) {
                return _ref73.apply(this, arguments);
            }

            return generateAccessToken;
        }()
    }, {
        key: '_makeHeaderForUsername',
        value: function _makeHeaderForUsername(username) {
            return 'Basic ' + _base2.default.encode(username + ':');
        }
    }, {
        key: '_extractFilenameFromContentDispositionHeader',
        value: function _extractFilenameFromContentDispositionHeader(contentDispositionHeader) {
            // The contentDisposition library chokes on non-string input, so we check for that case (e. g. empty filename,
            // invalid server response) and bail.
            if (!contentDispositionHeader) {
                return;
            }
            var parsedContentDisposition = _contentDisposition2.default.parse(contentDispositionHeader);
            var params = parsedContentDisposition.parameters || {};
            return params.filename;
        }
    }]);
    return TrueVaultClient;
}();

module.exports = TrueVaultClient;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
{
  parallel      : __webpack_require__(64),
  serial        : __webpack_require__(65),
  serialOrdered : __webpack_require__(41)
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = defer;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var iterate    = __webpack_require__(38)
  , initState  = __webpack_require__(39)
  , terminator = __webpack_require__(40)
  ;

// Public API
module.exports = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator.bind(state, callback);
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var serialOrdered = __webpack_require__(41);

// Public API
module.exports = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(67);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(66);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(69);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(68);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(75);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk’s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters…
			if (bitCounter++ % 4) {
				// …convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var d;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '0.1.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return base64;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = base64;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in base64) {
				base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.base64 = base64;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * content-disposition
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 */

module.exports = contentDisposition
module.exports.parse = parse

/**
 * Module dependencies.
 */

var basename = __webpack_require__(33).basename

/**
 * RegExp to match non attr-char, *after* encodeURIComponent (i.e. not including "%")
 */

var ENCODE_URL_ATTR_CHAR_REGEXP = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g // eslint-disable-line no-control-regex

/**
 * RegExp to match percent encoding escape.
 */

var HEX_ESCAPE_REGEXP = /%[0-9A-Fa-f]{2}/
var HEX_ESCAPE_REPLACE_REGEXP = /%([0-9A-Fa-f]{2})/g

/**
 * RegExp to match non-latin1 characters.
 */

var NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/g

/**
 * RegExp to match quoted-pair in RFC 2616
 *
 * quoted-pair = "\" CHAR
 * CHAR        = <any US-ASCII character (octets 0 - 127)>
 */

var QESC_REGEXP = /\\([\u0000-\u007f])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 2616
 */

var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp for various RFC 2616 grammar
 *
 * parameter     = token "=" ( token | quoted-string )
 * token         = 1*<any CHAR except CTLs or separators>
 * separators    = "(" | ")" | "<" | ">" | "@"
 *               | "," | ";" | ":" | "\" | <">
 *               | "/" | "[" | "]" | "?" | "="
 *               | "{" | "}" | SP | HT
 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
 * qdtext        = <any TEXT except <">>
 * quoted-pair   = "\" CHAR
 * CHAR          = <any US-ASCII character (octets 0 - 127)>
 * TEXT          = <any OCTET except CTLs, but including LWS>
 * LWS           = [CRLF] 1*( SP | HT )
 * CRLF          = CR LF
 * CR            = <US-ASCII CR, carriage return (13)>
 * LF            = <US-ASCII LF, linefeed (10)>
 * SP            = <US-ASCII SP, space (32)>
 * HT            = <US-ASCII HT, horizontal-tab (9)>
 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
 * OCTET         = <any 8-bit sequence of data>
 */

var PARAM_REGEXP = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g // eslint-disable-line no-control-regex
var TEXT_REGEXP = /^[\x20-\x7e\x80-\xff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/

/**
 * RegExp for various RFC 5987 grammar
 *
 * ext-value     = charset  "'" [ language ] "'" value-chars
 * charset       = "UTF-8" / "ISO-8859-1" / mime-charset
 * mime-charset  = 1*mime-charsetc
 * mime-charsetc = ALPHA / DIGIT
 *               / "!" / "#" / "$" / "%" / "&"
 *               / "+" / "-" / "^" / "_" / "`"
 *               / "{" / "}" / "~"
 * language      = ( 2*3ALPHA [ extlang ] )
 *               / 4ALPHA
 *               / 5*8ALPHA
 * extlang       = *3( "-" 3ALPHA )
 * value-chars   = *( pct-encoded / attr-char )
 * pct-encoded   = "%" HEXDIG HEXDIG
 * attr-char     = ALPHA / DIGIT
 *               / "!" / "#" / "$" / "&" / "+" / "-" / "."
 *               / "^" / "_" / "`" / "|" / "~"
 */

var EXT_VALUE_REGEXP = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/

/**
 * RegExp for various RFC 6266 grammar
 *
 * disposition-type = "inline" | "attachment" | disp-ext-type
 * disp-ext-type    = token
 * disposition-parm = filename-parm | disp-ext-parm
 * filename-parm    = "filename" "=" value
 *                  | "filename*" "=" ext-value
 * disp-ext-parm    = token "=" value
 *                  | ext-token "=" ext-value
 * ext-token        = <the characters in token, followed by "*">
 */

var DISPOSITION_TYPE_REGEXP = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/ // eslint-disable-line no-control-regex

/**
 * Create an attachment Content-Disposition header.
 *
 * @param {string} [filename]
 * @param {object} [options]
 * @param {string} [options.type=attachment]
 * @param {string|boolean} [options.fallback=true]
 * @return {string}
 * @api public
 */

function contentDisposition (filename, options) {
  var opts = options || {}

  // get type
  var type = opts.type || 'attachment'

  // get parameters
  var params = createparams(filename, opts.fallback)

  // format into string
  return format(new ContentDisposition(type, params))
}

/**
 * Create parameters object from filename and fallback.
 *
 * @param {string} [filename]
 * @param {string|boolean} [fallback=true]
 * @return {object}
 * @api private
 */

function createparams (filename, fallback) {
  if (filename === undefined) {
    return
  }

  var params = {}

  if (typeof filename !== 'string') {
    throw new TypeError('filename must be a string')
  }

  // fallback defaults to true
  if (fallback === undefined) {
    fallback = true
  }

  if (typeof fallback !== 'string' && typeof fallback !== 'boolean') {
    throw new TypeError('fallback must be a string or boolean')
  }

  if (typeof fallback === 'string' && NON_LATIN1_REGEXP.test(fallback)) {
    throw new TypeError('fallback must be ISO-8859-1 string')
  }

  // restrict to file base name
  var name = basename(filename)

  // determine if name is suitable for quoted string
  var isQuotedString = TEXT_REGEXP.test(name)

  // generate fallback name
  var fallbackName = typeof fallback !== 'string'
    ? fallback && getlatin1(name)
    : basename(fallback)
  var hasFallback = typeof fallbackName === 'string' && fallbackName !== name

  // set extended filename parameter
  if (hasFallback || !isQuotedString || HEX_ESCAPE_REGEXP.test(name)) {
    params['filename*'] = name
  }

  // set filename parameter
  if (isQuotedString || hasFallback) {
    params.filename = hasFallback
      ? fallbackName
      : name
  }

  return params
}

/**
 * Format object to Content-Disposition header.
 *
 * @param {object} obj
 * @param {string} obj.type
 * @param {object} [obj.parameters]
 * @return {string}
 * @api private
 */

function format (obj) {
  var parameters = obj.parameters
  var type = obj.type

  if (!type || typeof type !== 'string' || !TOKEN_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  // start with normalized type
  var string = String(type).toLowerCase()

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      var val = param.substr(-1) === '*'
        ? ustring(parameters[param])
        : qstring(parameters[param])

      string += '; ' + param + '=' + val
    }
  }

  return string
}

/**
 * Decode a RFC 6987 field value (gracefully).
 *
 * @param {string} str
 * @return {string}
 * @api private
 */

function decodefield (str) {
  var match = EXT_VALUE_REGEXP.exec(str)

  if (!match) {
    throw new TypeError('invalid extended field value')
  }

  var charset = match[1].toLowerCase()
  var encoded = match[2]
  var value

  // to binary string
  var binary = encoded.replace(HEX_ESCAPE_REPLACE_REGEXP, pdecode)

  switch (charset) {
    case 'iso-8859-1':
      value = getlatin1(binary)
      break
    case 'utf-8':
      value = new Buffer(binary, 'binary').toString('utf8')
      break
    default:
      throw new TypeError('unsupported charset in extended field')
  }

  return value
}

/**
 * Get ISO-8859-1 version of string.
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function getlatin1 (val) {
  // simple Unicode -> ISO-8859-1 transformation
  return String(val).replace(NON_LATIN1_REGEXP, '?')
}

/**
 * Parse Content-Disposition header string.
 *
 * @param {string} string
 * @return {object}
 * @api private
 */

function parse (string) {
  if (!string || typeof string !== 'string') {
    throw new TypeError('argument string is required')
  }

  var match = DISPOSITION_TYPE_REGEXP.exec(string)

  if (!match) {
    throw new TypeError('invalid type format')
  }

  // normalize type
  var index = match[0].length
  var type = match[1].toLowerCase()

  var key
  var names = []
  var params = {}
  var value

  // calculate index to start at
  index = PARAM_REGEXP.lastIndex = match[0].substr(-1) === ';'
    ? index - 1
    : index

  // match parameters
  while ((match = PARAM_REGEXP.exec(string))) {
    if (match.index !== index) {
      throw new TypeError('invalid parameter format')
    }

    index += match[0].length
    key = match[1].toLowerCase()
    value = match[2]

    if (names.indexOf(key) !== -1) {
      throw new TypeError('invalid duplicate parameter')
    }

    names.push(key)

    if (key.indexOf('*') + 1 === key.length) {
      // decode extended value
      key = key.slice(0, -1)
      value = decodefield(value)

      // overwrite existing value
      params[key] = value
      continue
    }

    if (typeof params[key] === 'string') {
      continue
    }

    if (value[0] === '"') {
      // remove quotes and escapes
      value = value
        .substr(1, value.length - 2)
        .replace(QESC_REGEXP, '$1')
    }

    params[key] = value
  }

  if (index !== -1 && index !== string.length) {
    throw new TypeError('invalid parameter format')
  }

  return new ContentDisposition(type, params)
}

/**
 * Percent decode a single character.
 *
 * @param {string} str
 * @param {string} hex
 * @return {string}
 * @api private
 */

function pdecode (str, hex) {
  return String.fromCharCode(parseInt(hex, 16))
}

/**
 * Percent encode a single character.
 *
 * @param {string} char
 * @return {string}
 * @api private
 */

function pencode (char) {
  var hex = String(char)
    .charCodeAt(0)
    .toString(16)
    .toUpperCase()
  return hex.length === 1
    ? '%0' + hex
    : '%' + hex
}

/**
 * Quote a string for HTTP.
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function qstring (val) {
  var str = String(val)

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Encode a Unicode string for HTTP (RFC 5987).
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function ustring (val) {
  var str = String(val)

  // percent encode as UTF-8
  var encoded = encodeURIComponent(str)
    .replace(ENCODE_URL_ATTR_CHAR_REGEXP, pencode)

  return 'UTF-8\'\'' + encoded
}

/**
 * Class for parsed Content-Disposition header for v8 optimization
 */

function ContentDisposition (type, parameters) {
  this.type = type
  this.parameters = parameters
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(112);
module.exports = __webpack_require__(2).Promise;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
__webpack_require__(53);
__webpack_require__(114);
__webpack_require__(115);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(55);
module.exports = __webpack_require__(31).f('iterator');

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(52)
  , toIndex   = __webpack_require__(107);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17)
  , gOPS    = __webpack_require__(48)
  , pIE     = __webpack_require__(25);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(13)
  , call        = __webpack_require__(92)
  , isArrayIter = __webpack_require__(90)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(52)
  , getIterFn   = __webpack_require__(109)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(9);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(11)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(9);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(46)
  , descriptor     = __webpack_require__(18)
  , setToStringTag = __webpack_require__(19)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(17)
  , toIObject = __webpack_require__(8);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(20)('meta')
  , isObject = __webpack_require__(10)
  , has      = __webpack_require__(6)
  , setDesc  = __webpack_require__(4).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(15)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(51).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(9)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(4)
  , anObject = __webpack_require__(5)
  , getKeys  = __webpack_require__(17);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(25)
  , createDesc     = __webpack_require__(18)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(29)
  , has            = __webpack_require__(6)
  , IE8_DOM_DEFINE = __webpack_require__(44)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8)
  , gOPN      = __webpack_require__(47).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(6)
  , toObject    = __webpack_require__(108)
  , IE_PROTO    = __webpack_require__(26)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(2)
  , dP          = __webpack_require__(4)
  , DESCRIPTORS = __webpack_require__(3)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(21)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , defined   = __webpack_require__(22);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(22);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(42)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(11);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(83)
  , step             = __webpack_require__(95)
  , Iterators        = __webpack_require__(11)
  , toIObject        = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(16)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(13)
  , classof            = __webpack_require__(42)
  , $export            = __webpack_require__(14)
  , isObject           = __webpack_require__(10)
  , aFunction          = __webpack_require__(21)
  , anInstance         = __webpack_require__(84)
  , forOf              = __webpack_require__(87)
  , speciesConstructor = __webpack_require__(105)
  , task               = __webpack_require__(51).set
  , microtask          = __webpack_require__(98)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(103)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(19)($Promise, PROMISE);
__webpack_require__(104)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(94)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(6)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(50)
  , META           = __webpack_require__(97).KEY
  , $fails         = __webpack_require__(15)
  , shared         = __webpack_require__(27)
  , setToStringTag = __webpack_require__(19)
  , uid            = __webpack_require__(20)
  , wks            = __webpack_require__(0)
  , wksExt         = __webpack_require__(31)
  , wksDefine      = __webpack_require__(30)
  , keyOf          = __webpack_require__(96)
  , enumKeys       = __webpack_require__(86)
  , isArray        = __webpack_require__(91)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(29)
  , createDesc     = __webpack_require__(18)
  , _create        = __webpack_require__(46)
  , gOPNExt        = __webpack_require__(101)
  , $GOPD          = __webpack_require__(100)
  , $DP            = __webpack_require__(4)
  , $keys          = __webpack_require__(17)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(47).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f  = $propertyIsEnumerable;
  __webpack_require__(48).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(16)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('asyncIterator');

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('observable');

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(12).Stream;
var util = __webpack_require__(35);

module.exports = DelayedStream;
function DelayedStream() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);

DelayedStream.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream.prototype.pause = function() {
  this.source.pause();
};

DelayedStream.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream.prototype.pipe = function() {
  var r = Stream.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'
  this.emit('error', new Error(message));
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var CombinedStream = __webpack_require__(119);
var util = __webpack_require__(35);
var path = __webpack_require__(33);
var http = __webpack_require__(32);
var https = __webpack_require__(60);
var parseUrl = __webpack_require__(34).parse;
var fs = __webpack_require__(127);
var mime = __webpack_require__(123);
var asynckit = __webpack_require__(62);
var populate = __webpack_require__(118);

// Public API
module.exports = FormData;

// make it a Stream
util.inherits(FormData, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData(options) {
  if (!(this instanceof FormData)) {
    return new FormData();
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}

FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData.prototype.append = function(field, value, options) {

  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {filename: options};
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData.prototype._trackLength = function(header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength +=
    Buffer.byteLength(header) +
    FormData.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response
  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) )) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData.prototype._lengthRetriever = function(value, callback) {

  if (value.hasOwnProperty('fd')) {

    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

    // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function(err, stat) {

        var fileSize;

        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

  // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

  // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function(response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

  // something else
  } else {
    callback('Unknown stream');
  }
};

FormData.prototype._multiPartHeader = function(field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers  = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
    }
  }

  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};

FormData.prototype._getContentDisposition = function(value, options) {

  var filename
    , contentDisposition
    ;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path);
  }

  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }

  return contentDisposition;
};

FormData.prototype._getContentType = function(value, options) {

  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData.prototype._multiPartFooter = function() {
  return function(next) {
    var footer = FormData.LINE_BREAK;

    var lastPart = (this._streams.length === 0);
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData.prototype._lastBoundary = function() {
  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};

FormData.prototype.getHeaders = function(userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData.prototype.getBoundary = function() {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData.prototype._generateBoundary = function() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }

  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData.prototype.getLengthSync = function() {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData.prototype.getLength = function(cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function(length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData.prototype.submit = function(params, cb) {
  var request
    , options
    , defaults = {method: 'post'}
    ;

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {

    params = parseUrl(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

  // use custom params
  } else {

    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function(err, length) {
    if (err) {
      this._error(err);
      return;
    }

    // add content length
    request.setHeader('Content-Length', length);

    this.pipe(request);
    if (cb) {
      request.on('error', cb);
      request.on('response', cb.bind(this, null));
    }
  }.bind(this));

  return request;
};

FormData.prototype._error = function(err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData.prototype.toString = function () {
  return '[object FormData]';
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// populates missing values
module.exports = function(dst, src) {

  Object.keys(src).forEach(function(prop)
  {
    dst[prop] = dst[prop] || src[prop];
  });

  return dst;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(35);
var Stream = __webpack_require__(12).Stream;
var DelayedStream = __webpack_require__(116);
var defer = __webpack_require__(120);

module.exports = CombinedStream;
function CombinedStream() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
}
util.inherits(CombinedStream, Stream);

CombinedStream.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream.prototype.append = function(stream) {
  var isStreamLike = CombinedStream.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream.prototype.pipe = function(dest, options) {
  Stream.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream.prototype._getNext = function() {
  this._currentStream = null;
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    defer(this._pipeNext.bind(this, stream));
  }.bind(this));
};

CombinedStream.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = defer;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = {
	"application/1d-interleaved-parityfec": {
		"source": "iana"
	},
	"application/3gpdash-qoe-report+xml": {
		"source": "iana"
	},
	"application/3gpp-ims+xml": {
		"source": "iana"
	},
	"application/a2l": {
		"source": "iana"
	},
	"application/activemessage": {
		"source": "iana"
	},
	"application/alto-costmap+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-costmapfilter+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-directory+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-endpointcost+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-endpointcostparams+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-endpointprop+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-endpointpropparams+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-error+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-networkmap+json": {
		"source": "iana",
		"compressible": true
	},
	"application/alto-networkmapfilter+json": {
		"source": "iana",
		"compressible": true
	},
	"application/aml": {
		"source": "iana"
	},
	"application/andrew-inset": {
		"source": "iana",
		"extensions": [
			"ez"
		]
	},
	"application/applefile": {
		"source": "iana"
	},
	"application/applixware": {
		"source": "apache",
		"extensions": [
			"aw"
		]
	},
	"application/atf": {
		"source": "iana"
	},
	"application/atfx": {
		"source": "iana"
	},
	"application/atom+xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"atom"
		]
	},
	"application/atomcat+xml": {
		"source": "iana",
		"extensions": [
			"atomcat"
		]
	},
	"application/atomdeleted+xml": {
		"source": "iana"
	},
	"application/atomicmail": {
		"source": "iana"
	},
	"application/atomsvc+xml": {
		"source": "iana",
		"extensions": [
			"atomsvc"
		]
	},
	"application/atxml": {
		"source": "iana"
	},
	"application/auth-policy+xml": {
		"source": "iana"
	},
	"application/bacnet-xdd+zip": {
		"source": "iana"
	},
	"application/batch-smtp": {
		"source": "iana"
	},
	"application/bdoc": {
		"compressible": false,
		"extensions": [
			"bdoc"
		]
	},
	"application/beep+xml": {
		"source": "iana"
	},
	"application/calendar+json": {
		"source": "iana",
		"compressible": true
	},
	"application/calendar+xml": {
		"source": "iana"
	},
	"application/call-completion": {
		"source": "iana"
	},
	"application/cals-1840": {
		"source": "iana"
	},
	"application/cbor": {
		"source": "iana"
	},
	"application/ccmp+xml": {
		"source": "iana"
	},
	"application/ccxml+xml": {
		"source": "iana",
		"extensions": [
			"ccxml"
		]
	},
	"application/cdfx+xml": {
		"source": "iana"
	},
	"application/cdmi-capability": {
		"source": "iana",
		"extensions": [
			"cdmia"
		]
	},
	"application/cdmi-container": {
		"source": "iana",
		"extensions": [
			"cdmic"
		]
	},
	"application/cdmi-domain": {
		"source": "iana",
		"extensions": [
			"cdmid"
		]
	},
	"application/cdmi-object": {
		"source": "iana",
		"extensions": [
			"cdmio"
		]
	},
	"application/cdmi-queue": {
		"source": "iana",
		"extensions": [
			"cdmiq"
		]
	},
	"application/cdni": {
		"source": "iana"
	},
	"application/cea": {
		"source": "iana"
	},
	"application/cea-2018+xml": {
		"source": "iana"
	},
	"application/cellml+xml": {
		"source": "iana"
	},
	"application/cfw": {
		"source": "iana"
	},
	"application/clue_info+xml": {
		"source": "iana"
	},
	"application/cms": {
		"source": "iana"
	},
	"application/cnrp+xml": {
		"source": "iana"
	},
	"application/coap-group+json": {
		"source": "iana",
		"compressible": true
	},
	"application/coap-payload": {
		"source": "iana"
	},
	"application/commonground": {
		"source": "iana"
	},
	"application/conference-info+xml": {
		"source": "iana"
	},
	"application/cose": {
		"source": "iana"
	},
	"application/cose-key": {
		"source": "iana"
	},
	"application/cose-key-set": {
		"source": "iana"
	},
	"application/cpl+xml": {
		"source": "iana"
	},
	"application/csrattrs": {
		"source": "iana"
	},
	"application/csta+xml": {
		"source": "iana"
	},
	"application/cstadata+xml": {
		"source": "iana"
	},
	"application/csvm+json": {
		"source": "iana",
		"compressible": true
	},
	"application/cu-seeme": {
		"source": "apache",
		"extensions": [
			"cu"
		]
	},
	"application/cybercash": {
		"source": "iana"
	},
	"application/dart": {
		"compressible": true
	},
	"application/dash+xml": {
		"source": "iana",
		"extensions": [
			"mpd"
		]
	},
	"application/dashdelta": {
		"source": "iana"
	},
	"application/davmount+xml": {
		"source": "iana",
		"extensions": [
			"davmount"
		]
	},
	"application/dca-rft": {
		"source": "iana"
	},
	"application/dcd": {
		"source": "iana"
	},
	"application/dec-dx": {
		"source": "iana"
	},
	"application/dialog-info+xml": {
		"source": "iana"
	},
	"application/dicom": {
		"source": "iana"
	},
	"application/dicom+json": {
		"source": "iana",
		"compressible": true
	},
	"application/dicom+xml": {
		"source": "iana"
	},
	"application/dii": {
		"source": "iana"
	},
	"application/dit": {
		"source": "iana"
	},
	"application/dns": {
		"source": "iana"
	},
	"application/docbook+xml": {
		"source": "apache",
		"extensions": [
			"dbk"
		]
	},
	"application/dskpp+xml": {
		"source": "iana"
	},
	"application/dssc+der": {
		"source": "iana",
		"extensions": [
			"dssc"
		]
	},
	"application/dssc+xml": {
		"source": "iana",
		"extensions": [
			"xdssc"
		]
	},
	"application/dvcs": {
		"source": "iana"
	},
	"application/ecmascript": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"ecma"
		]
	},
	"application/edi-consent": {
		"source": "iana"
	},
	"application/edi-x12": {
		"source": "iana",
		"compressible": false
	},
	"application/edifact": {
		"source": "iana",
		"compressible": false
	},
	"application/efi": {
		"source": "iana"
	},
	"application/emergencycalldata.comment+xml": {
		"source": "iana"
	},
	"application/emergencycalldata.control+xml": {
		"source": "iana"
	},
	"application/emergencycalldata.deviceinfo+xml": {
		"source": "iana"
	},
	"application/emergencycalldata.ecall.msd": {
		"source": "iana"
	},
	"application/emergencycalldata.providerinfo+xml": {
		"source": "iana"
	},
	"application/emergencycalldata.serviceinfo+xml": {
		"source": "iana"
	},
	"application/emergencycalldata.subscriberinfo+xml": {
		"source": "iana"
	},
	"application/emergencycalldata.veds+xml": {
		"source": "iana"
	},
	"application/emma+xml": {
		"source": "iana",
		"extensions": [
			"emma"
		]
	},
	"application/emotionml+xml": {
		"source": "iana"
	},
	"application/encaprtp": {
		"source": "iana"
	},
	"application/epp+xml": {
		"source": "iana"
	},
	"application/epub+zip": {
		"source": "iana",
		"extensions": [
			"epub"
		]
	},
	"application/eshop": {
		"source": "iana"
	},
	"application/exi": {
		"source": "iana",
		"extensions": [
			"exi"
		]
	},
	"application/fastinfoset": {
		"source": "iana"
	},
	"application/fastsoap": {
		"source": "iana"
	},
	"application/fdt+xml": {
		"source": "iana"
	},
	"application/fits": {
		"source": "iana"
	},
	"application/font-sfnt": {
		"source": "iana"
	},
	"application/font-tdpfr": {
		"source": "iana",
		"extensions": [
			"pfr"
		]
	},
	"application/font-woff": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"woff"
		]
	},
	"application/font-woff2": {
		"compressible": false,
		"extensions": [
			"woff2"
		]
	},
	"application/framework-attributes+xml": {
		"source": "iana"
	},
	"application/geo+json": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"geojson"
		]
	},
	"application/geo+json-seq": {
		"source": "iana"
	},
	"application/gml+xml": {
		"source": "iana",
		"extensions": [
			"gml"
		]
	},
	"application/gpx+xml": {
		"source": "apache",
		"extensions": [
			"gpx"
		]
	},
	"application/gxf": {
		"source": "apache",
		"extensions": [
			"gxf"
		]
	},
	"application/gzip": {
		"source": "iana",
		"compressible": false
	},
	"application/h224": {
		"source": "iana"
	},
	"application/held+xml": {
		"source": "iana"
	},
	"application/http": {
		"source": "iana"
	},
	"application/hyperstudio": {
		"source": "iana",
		"extensions": [
			"stk"
		]
	},
	"application/ibe-key-request+xml": {
		"source": "iana"
	},
	"application/ibe-pkg-reply+xml": {
		"source": "iana"
	},
	"application/ibe-pp-data": {
		"source": "iana"
	},
	"application/iges": {
		"source": "iana"
	},
	"application/im-iscomposing+xml": {
		"source": "iana"
	},
	"application/index": {
		"source": "iana"
	},
	"application/index.cmd": {
		"source": "iana"
	},
	"application/index.obj": {
		"source": "iana"
	},
	"application/index.response": {
		"source": "iana"
	},
	"application/index.vnd": {
		"source": "iana"
	},
	"application/inkml+xml": {
		"source": "iana",
		"extensions": [
			"ink",
			"inkml"
		]
	},
	"application/iotp": {
		"source": "iana"
	},
	"application/ipfix": {
		"source": "iana",
		"extensions": [
			"ipfix"
		]
	},
	"application/ipp": {
		"source": "iana"
	},
	"application/isup": {
		"source": "iana"
	},
	"application/its+xml": {
		"source": "iana"
	},
	"application/java-archive": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"jar",
			"war",
			"ear"
		]
	},
	"application/java-serialized-object": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"ser"
		]
	},
	"application/java-vm": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"class"
		]
	},
	"application/javascript": {
		"source": "iana",
		"charset": "UTF-8",
		"compressible": true,
		"extensions": [
			"js"
		]
	},
	"application/jose": {
		"source": "iana"
	},
	"application/jose+json": {
		"source": "iana",
		"compressible": true
	},
	"application/jrd+json": {
		"source": "iana",
		"compressible": true
	},
	"application/json": {
		"source": "iana",
		"charset": "UTF-8",
		"compressible": true,
		"extensions": [
			"json",
			"map"
		]
	},
	"application/json-patch+json": {
		"source": "iana",
		"compressible": true
	},
	"application/json-seq": {
		"source": "iana"
	},
	"application/json5": {
		"extensions": [
			"json5"
		]
	},
	"application/jsonml+json": {
		"source": "apache",
		"compressible": true,
		"extensions": [
			"jsonml"
		]
	},
	"application/jwk+json": {
		"source": "iana",
		"compressible": true
	},
	"application/jwk-set+json": {
		"source": "iana",
		"compressible": true
	},
	"application/jwt": {
		"source": "iana"
	},
	"application/kpml-request+xml": {
		"source": "iana"
	},
	"application/kpml-response+xml": {
		"source": "iana"
	},
	"application/ld+json": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"jsonld"
		]
	},
	"application/lgr+xml": {
		"source": "iana"
	},
	"application/link-format": {
		"source": "iana"
	},
	"application/load-control+xml": {
		"source": "iana"
	},
	"application/lost+xml": {
		"source": "iana",
		"extensions": [
			"lostxml"
		]
	},
	"application/lostsync+xml": {
		"source": "iana"
	},
	"application/lxf": {
		"source": "iana"
	},
	"application/mac-binhex40": {
		"source": "iana",
		"extensions": [
			"hqx"
		]
	},
	"application/mac-compactpro": {
		"source": "apache",
		"extensions": [
			"cpt"
		]
	},
	"application/macwriteii": {
		"source": "iana"
	},
	"application/mads+xml": {
		"source": "iana",
		"extensions": [
			"mads"
		]
	},
	"application/manifest+json": {
		"charset": "UTF-8",
		"compressible": true,
		"extensions": [
			"webmanifest"
		]
	},
	"application/marc": {
		"source": "iana",
		"extensions": [
			"mrc"
		]
	},
	"application/marcxml+xml": {
		"source": "iana",
		"extensions": [
			"mrcx"
		]
	},
	"application/mathematica": {
		"source": "iana",
		"extensions": [
			"ma",
			"nb",
			"mb"
		]
	},
	"application/mathml+xml": {
		"source": "iana",
		"extensions": [
			"mathml"
		]
	},
	"application/mathml-content+xml": {
		"source": "iana"
	},
	"application/mathml-presentation+xml": {
		"source": "iana"
	},
	"application/mbms-associated-procedure-description+xml": {
		"source": "iana"
	},
	"application/mbms-deregister+xml": {
		"source": "iana"
	},
	"application/mbms-envelope+xml": {
		"source": "iana"
	},
	"application/mbms-msk+xml": {
		"source": "iana"
	},
	"application/mbms-msk-response+xml": {
		"source": "iana"
	},
	"application/mbms-protection-description+xml": {
		"source": "iana"
	},
	"application/mbms-reception-report+xml": {
		"source": "iana"
	},
	"application/mbms-register+xml": {
		"source": "iana"
	},
	"application/mbms-register-response+xml": {
		"source": "iana"
	},
	"application/mbms-schedule+xml": {
		"source": "iana"
	},
	"application/mbms-user-service-description+xml": {
		"source": "iana"
	},
	"application/mbox": {
		"source": "iana",
		"extensions": [
			"mbox"
		]
	},
	"application/media-policy-dataset+xml": {
		"source": "iana"
	},
	"application/media_control+xml": {
		"source": "iana"
	},
	"application/mediaservercontrol+xml": {
		"source": "iana",
		"extensions": [
			"mscml"
		]
	},
	"application/merge-patch+json": {
		"source": "iana",
		"compressible": true
	},
	"application/metalink+xml": {
		"source": "apache",
		"extensions": [
			"metalink"
		]
	},
	"application/metalink4+xml": {
		"source": "iana",
		"extensions": [
			"meta4"
		]
	},
	"application/mets+xml": {
		"source": "iana",
		"extensions": [
			"mets"
		]
	},
	"application/mf4": {
		"source": "iana"
	},
	"application/mikey": {
		"source": "iana"
	},
	"application/mods+xml": {
		"source": "iana",
		"extensions": [
			"mods"
		]
	},
	"application/moss-keys": {
		"source": "iana"
	},
	"application/moss-signature": {
		"source": "iana"
	},
	"application/mosskey-data": {
		"source": "iana"
	},
	"application/mosskey-request": {
		"source": "iana"
	},
	"application/mp21": {
		"source": "iana",
		"extensions": [
			"m21",
			"mp21"
		]
	},
	"application/mp4": {
		"source": "iana",
		"extensions": [
			"mp4s",
			"m4p"
		]
	},
	"application/mpeg4-generic": {
		"source": "iana"
	},
	"application/mpeg4-iod": {
		"source": "iana"
	},
	"application/mpeg4-iod-xmt": {
		"source": "iana"
	},
	"application/mrb-consumer+xml": {
		"source": "iana"
	},
	"application/mrb-publish+xml": {
		"source": "iana"
	},
	"application/msc-ivr+xml": {
		"source": "iana"
	},
	"application/msc-mixer+xml": {
		"source": "iana"
	},
	"application/msword": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"doc",
			"dot"
		]
	},
	"application/mud+json": {
		"source": "iana",
		"compressible": true
	},
	"application/mxf": {
		"source": "iana",
		"extensions": [
			"mxf"
		]
	},
	"application/n-quads": {
		"source": "iana"
	},
	"application/n-triples": {
		"source": "iana"
	},
	"application/nasdata": {
		"source": "iana"
	},
	"application/news-checkgroups": {
		"source": "iana"
	},
	"application/news-groupinfo": {
		"source": "iana"
	},
	"application/news-transmission": {
		"source": "iana"
	},
	"application/nlsml+xml": {
		"source": "iana"
	},
	"application/nss": {
		"source": "iana"
	},
	"application/ocsp-request": {
		"source": "iana"
	},
	"application/ocsp-response": {
		"source": "iana"
	},
	"application/octet-stream": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"bin",
			"dms",
			"lrf",
			"mar",
			"so",
			"dist",
			"distz",
			"pkg",
			"bpk",
			"dump",
			"elc",
			"deploy",
			"exe",
			"dll",
			"deb",
			"dmg",
			"iso",
			"img",
			"msi",
			"msp",
			"msm",
			"buffer"
		]
	},
	"application/oda": {
		"source": "iana",
		"extensions": [
			"oda"
		]
	},
	"application/odx": {
		"source": "iana"
	},
	"application/oebps-package+xml": {
		"source": "iana",
		"extensions": [
			"opf"
		]
	},
	"application/ogg": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"ogx"
		]
	},
	"application/omdoc+xml": {
		"source": "apache",
		"extensions": [
			"omdoc"
		]
	},
	"application/onenote": {
		"source": "apache",
		"extensions": [
			"onetoc",
			"onetoc2",
			"onetmp",
			"onepkg"
		]
	},
	"application/oxps": {
		"source": "iana",
		"extensions": [
			"oxps"
		]
	},
	"application/p2p-overlay+xml": {
		"source": "iana"
	},
	"application/parityfec": {
		"source": "iana"
	},
	"application/patch-ops-error+xml": {
		"source": "iana",
		"extensions": [
			"xer"
		]
	},
	"application/pdf": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"pdf"
		]
	},
	"application/pdx": {
		"source": "iana"
	},
	"application/pgp-encrypted": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"pgp"
		]
	},
	"application/pgp-keys": {
		"source": "iana"
	},
	"application/pgp-signature": {
		"source": "iana",
		"extensions": [
			"asc",
			"sig"
		]
	},
	"application/pics-rules": {
		"source": "apache",
		"extensions": [
			"prf"
		]
	},
	"application/pidf+xml": {
		"source": "iana"
	},
	"application/pidf-diff+xml": {
		"source": "iana"
	},
	"application/pkcs10": {
		"source": "iana",
		"extensions": [
			"p10"
		]
	},
	"application/pkcs12": {
		"source": "iana"
	},
	"application/pkcs7-mime": {
		"source": "iana",
		"extensions": [
			"p7m",
			"p7c"
		]
	},
	"application/pkcs7-signature": {
		"source": "iana",
		"extensions": [
			"p7s"
		]
	},
	"application/pkcs8": {
		"source": "iana",
		"extensions": [
			"p8"
		]
	},
	"application/pkix-attr-cert": {
		"source": "iana",
		"extensions": [
			"ac"
		]
	},
	"application/pkix-cert": {
		"source": "iana",
		"extensions": [
			"cer"
		]
	},
	"application/pkix-crl": {
		"source": "iana",
		"extensions": [
			"crl"
		]
	},
	"application/pkix-pkipath": {
		"source": "iana",
		"extensions": [
			"pkipath"
		]
	},
	"application/pkixcmp": {
		"source": "iana",
		"extensions": [
			"pki"
		]
	},
	"application/pls+xml": {
		"source": "iana",
		"extensions": [
			"pls"
		]
	},
	"application/poc-settings+xml": {
		"source": "iana"
	},
	"application/postscript": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"ai",
			"eps",
			"ps"
		]
	},
	"application/ppsp-tracker+json": {
		"source": "iana",
		"compressible": true
	},
	"application/problem+json": {
		"source": "iana",
		"compressible": true
	},
	"application/problem+xml": {
		"source": "iana"
	},
	"application/provenance+xml": {
		"source": "iana"
	},
	"application/prs.alvestrand.titrax-sheet": {
		"source": "iana"
	},
	"application/prs.cww": {
		"source": "iana",
		"extensions": [
			"cww"
		]
	},
	"application/prs.hpub+zip": {
		"source": "iana"
	},
	"application/prs.nprend": {
		"source": "iana"
	},
	"application/prs.plucker": {
		"source": "iana"
	},
	"application/prs.rdf-xml-crypt": {
		"source": "iana"
	},
	"application/prs.xsf+xml": {
		"source": "iana"
	},
	"application/pskc+xml": {
		"source": "iana",
		"extensions": [
			"pskcxml"
		]
	},
	"application/qsig": {
		"source": "iana"
	},
	"application/raptorfec": {
		"source": "iana"
	},
	"application/rdap+json": {
		"source": "iana",
		"compressible": true
	},
	"application/rdf+xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"rdf"
		]
	},
	"application/reginfo+xml": {
		"source": "iana",
		"extensions": [
			"rif"
		]
	},
	"application/relax-ng-compact-syntax": {
		"source": "iana",
		"extensions": [
			"rnc"
		]
	},
	"application/remote-printing": {
		"source": "iana"
	},
	"application/reputon+json": {
		"source": "iana",
		"compressible": true
	},
	"application/resource-lists+xml": {
		"source": "iana",
		"extensions": [
			"rl"
		]
	},
	"application/resource-lists-diff+xml": {
		"source": "iana",
		"extensions": [
			"rld"
		]
	},
	"application/rfc+xml": {
		"source": "iana"
	},
	"application/riscos": {
		"source": "iana"
	},
	"application/rlmi+xml": {
		"source": "iana"
	},
	"application/rls-services+xml": {
		"source": "iana",
		"extensions": [
			"rs"
		]
	},
	"application/rpki-ghostbusters": {
		"source": "iana",
		"extensions": [
			"gbr"
		]
	},
	"application/rpki-manifest": {
		"source": "iana",
		"extensions": [
			"mft"
		]
	},
	"application/rpki-roa": {
		"source": "iana",
		"extensions": [
			"roa"
		]
	},
	"application/rpki-updown": {
		"source": "iana"
	},
	"application/rsd+xml": {
		"source": "apache",
		"extensions": [
			"rsd"
		]
	},
	"application/rss+xml": {
		"source": "apache",
		"compressible": true,
		"extensions": [
			"rss"
		]
	},
	"application/rtf": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"rtf"
		]
	},
	"application/rtploopback": {
		"source": "iana"
	},
	"application/rtx": {
		"source": "iana"
	},
	"application/samlassertion+xml": {
		"source": "iana"
	},
	"application/samlmetadata+xml": {
		"source": "iana"
	},
	"application/sbml+xml": {
		"source": "iana",
		"extensions": [
			"sbml"
		]
	},
	"application/scaip+xml": {
		"source": "iana"
	},
	"application/scim+json": {
		"source": "iana",
		"compressible": true
	},
	"application/scvp-cv-request": {
		"source": "iana",
		"extensions": [
			"scq"
		]
	},
	"application/scvp-cv-response": {
		"source": "iana",
		"extensions": [
			"scs"
		]
	},
	"application/scvp-vp-request": {
		"source": "iana",
		"extensions": [
			"spq"
		]
	},
	"application/scvp-vp-response": {
		"source": "iana",
		"extensions": [
			"spp"
		]
	},
	"application/sdp": {
		"source": "iana",
		"extensions": [
			"sdp"
		]
	},
	"application/sep+xml": {
		"source": "iana"
	},
	"application/sep-exi": {
		"source": "iana"
	},
	"application/session-info": {
		"source": "iana"
	},
	"application/set-payment": {
		"source": "iana"
	},
	"application/set-payment-initiation": {
		"source": "iana",
		"extensions": [
			"setpay"
		]
	},
	"application/set-registration": {
		"source": "iana"
	},
	"application/set-registration-initiation": {
		"source": "iana",
		"extensions": [
			"setreg"
		]
	},
	"application/sgml": {
		"source": "iana"
	},
	"application/sgml-open-catalog": {
		"source": "iana"
	},
	"application/shf+xml": {
		"source": "iana",
		"extensions": [
			"shf"
		]
	},
	"application/sieve": {
		"source": "iana"
	},
	"application/simple-filter+xml": {
		"source": "iana"
	},
	"application/simple-message-summary": {
		"source": "iana"
	},
	"application/simplesymbolcontainer": {
		"source": "iana"
	},
	"application/slate": {
		"source": "iana"
	},
	"application/smil": {
		"source": "iana"
	},
	"application/smil+xml": {
		"source": "iana",
		"extensions": [
			"smi",
			"smil"
		]
	},
	"application/smpte336m": {
		"source": "iana"
	},
	"application/soap+fastinfoset": {
		"source": "iana"
	},
	"application/soap+xml": {
		"source": "iana",
		"compressible": true
	},
	"application/sparql-query": {
		"source": "iana",
		"extensions": [
			"rq"
		]
	},
	"application/sparql-results+xml": {
		"source": "iana",
		"extensions": [
			"srx"
		]
	},
	"application/spirits-event+xml": {
		"source": "iana"
	},
	"application/sql": {
		"source": "iana"
	},
	"application/srgs": {
		"source": "iana",
		"extensions": [
			"gram"
		]
	},
	"application/srgs+xml": {
		"source": "iana",
		"extensions": [
			"grxml"
		]
	},
	"application/sru+xml": {
		"source": "iana",
		"extensions": [
			"sru"
		]
	},
	"application/ssdl+xml": {
		"source": "apache",
		"extensions": [
			"ssdl"
		]
	},
	"application/ssml+xml": {
		"source": "iana",
		"extensions": [
			"ssml"
		]
	},
	"application/tamp-apex-update": {
		"source": "iana"
	},
	"application/tamp-apex-update-confirm": {
		"source": "iana"
	},
	"application/tamp-community-update": {
		"source": "iana"
	},
	"application/tamp-community-update-confirm": {
		"source": "iana"
	},
	"application/tamp-error": {
		"source": "iana"
	},
	"application/tamp-sequence-adjust": {
		"source": "iana"
	},
	"application/tamp-sequence-adjust-confirm": {
		"source": "iana"
	},
	"application/tamp-status-query": {
		"source": "iana"
	},
	"application/tamp-status-response": {
		"source": "iana"
	},
	"application/tamp-update": {
		"source": "iana"
	},
	"application/tamp-update-confirm": {
		"source": "iana"
	},
	"application/tar": {
		"compressible": true
	},
	"application/tei+xml": {
		"source": "iana",
		"extensions": [
			"tei",
			"teicorpus"
		]
	},
	"application/thraud+xml": {
		"source": "iana",
		"extensions": [
			"tfi"
		]
	},
	"application/timestamp-query": {
		"source": "iana"
	},
	"application/timestamp-reply": {
		"source": "iana"
	},
	"application/timestamped-data": {
		"source": "iana",
		"extensions": [
			"tsd"
		]
	},
	"application/trig": {
		"source": "iana"
	},
	"application/ttml+xml": {
		"source": "iana"
	},
	"application/tve-trigger": {
		"source": "iana"
	},
	"application/ulpfec": {
		"source": "iana"
	},
	"application/urc-grpsheet+xml": {
		"source": "iana"
	},
	"application/urc-ressheet+xml": {
		"source": "iana"
	},
	"application/urc-targetdesc+xml": {
		"source": "iana"
	},
	"application/urc-uisocketdesc+xml": {
		"source": "iana"
	},
	"application/vcard+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vcard+xml": {
		"source": "iana"
	},
	"application/vemmi": {
		"source": "iana"
	},
	"application/vividence.scriptfile": {
		"source": "apache"
	},
	"application/vnd.3gpp-prose+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp-prose-pc3ch+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp.access-transfer-events+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp.bsf+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp.mid-call+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp.pic-bw-large": {
		"source": "iana",
		"extensions": [
			"plb"
		]
	},
	"application/vnd.3gpp.pic-bw-small": {
		"source": "iana",
		"extensions": [
			"psb"
		]
	},
	"application/vnd.3gpp.pic-bw-var": {
		"source": "iana",
		"extensions": [
			"pvb"
		]
	},
	"application/vnd.3gpp.sms": {
		"source": "iana"
	},
	"application/vnd.3gpp.sms+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp.srvcc-ext+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp.srvcc-info+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp.state-and-event-info+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp.ussd+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp2.bcmcsinfo+xml": {
		"source": "iana"
	},
	"application/vnd.3gpp2.sms": {
		"source": "iana"
	},
	"application/vnd.3gpp2.tcap": {
		"source": "iana",
		"extensions": [
			"tcap"
		]
	},
	"application/vnd.3lightssoftware.imagescal": {
		"source": "iana"
	},
	"application/vnd.3m.post-it-notes": {
		"source": "iana",
		"extensions": [
			"pwn"
		]
	},
	"application/vnd.accpac.simply.aso": {
		"source": "iana",
		"extensions": [
			"aso"
		]
	},
	"application/vnd.accpac.simply.imp": {
		"source": "iana",
		"extensions": [
			"imp"
		]
	},
	"application/vnd.acucobol": {
		"source": "iana",
		"extensions": [
			"acu"
		]
	},
	"application/vnd.acucorp": {
		"source": "iana",
		"extensions": [
			"atc",
			"acutc"
		]
	},
	"application/vnd.adobe.air-application-installer-package+zip": {
		"source": "apache",
		"extensions": [
			"air"
		]
	},
	"application/vnd.adobe.flash.movie": {
		"source": "iana"
	},
	"application/vnd.adobe.formscentral.fcdt": {
		"source": "iana",
		"extensions": [
			"fcdt"
		]
	},
	"application/vnd.adobe.fxp": {
		"source": "iana",
		"extensions": [
			"fxp",
			"fxpl"
		]
	},
	"application/vnd.adobe.partial-upload": {
		"source": "iana"
	},
	"application/vnd.adobe.xdp+xml": {
		"source": "iana",
		"extensions": [
			"xdp"
		]
	},
	"application/vnd.adobe.xfdf": {
		"source": "iana",
		"extensions": [
			"xfdf"
		]
	},
	"application/vnd.aether.imp": {
		"source": "iana"
	},
	"application/vnd.ah-barcode": {
		"source": "iana"
	},
	"application/vnd.ahead.space": {
		"source": "iana",
		"extensions": [
			"ahead"
		]
	},
	"application/vnd.airzip.filesecure.azf": {
		"source": "iana",
		"extensions": [
			"azf"
		]
	},
	"application/vnd.airzip.filesecure.azs": {
		"source": "iana",
		"extensions": [
			"azs"
		]
	},
	"application/vnd.amazon.ebook": {
		"source": "apache",
		"extensions": [
			"azw"
		]
	},
	"application/vnd.amazon.mobi8-ebook": {
		"source": "iana"
	},
	"application/vnd.americandynamics.acc": {
		"source": "iana",
		"extensions": [
			"acc"
		]
	},
	"application/vnd.amiga.ami": {
		"source": "iana",
		"extensions": [
			"ami"
		]
	},
	"application/vnd.amundsen.maze+xml": {
		"source": "iana"
	},
	"application/vnd.android.package-archive": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"apk"
		]
	},
	"application/vnd.anki": {
		"source": "iana"
	},
	"application/vnd.anser-web-certificate-issue-initiation": {
		"source": "iana",
		"extensions": [
			"cii"
		]
	},
	"application/vnd.anser-web-funds-transfer-initiation": {
		"source": "apache",
		"extensions": [
			"fti"
		]
	},
	"application/vnd.antix.game-component": {
		"source": "iana",
		"extensions": [
			"atx"
		]
	},
	"application/vnd.apache.thrift.binary": {
		"source": "iana"
	},
	"application/vnd.apache.thrift.compact": {
		"source": "iana"
	},
	"application/vnd.apache.thrift.json": {
		"source": "iana"
	},
	"application/vnd.api+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.apothekende.reservation+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.apple.installer+xml": {
		"source": "iana",
		"extensions": [
			"mpkg"
		]
	},
	"application/vnd.apple.mpegurl": {
		"source": "iana",
		"extensions": [
			"m3u8"
		]
	},
	"application/vnd.apple.pkpass": {
		"compressible": false,
		"extensions": [
			"pkpass"
		]
	},
	"application/vnd.arastra.swi": {
		"source": "iana"
	},
	"application/vnd.aristanetworks.swi": {
		"source": "iana",
		"extensions": [
			"swi"
		]
	},
	"application/vnd.artsquare": {
		"source": "iana"
	},
	"application/vnd.astraea-software.iota": {
		"source": "iana",
		"extensions": [
			"iota"
		]
	},
	"application/vnd.audiograph": {
		"source": "iana",
		"extensions": [
			"aep"
		]
	},
	"application/vnd.autopackage": {
		"source": "iana"
	},
	"application/vnd.avistar+xml": {
		"source": "iana"
	},
	"application/vnd.balsamiq.bmml+xml": {
		"source": "iana"
	},
	"application/vnd.balsamiq.bmpr": {
		"source": "iana"
	},
	"application/vnd.bekitzur-stech+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.biopax.rdf+xml": {
		"source": "iana"
	},
	"application/vnd.blueice.multipass": {
		"source": "iana",
		"extensions": [
			"mpm"
		]
	},
	"application/vnd.bluetooth.ep.oob": {
		"source": "iana"
	},
	"application/vnd.bluetooth.le.oob": {
		"source": "iana"
	},
	"application/vnd.bmi": {
		"source": "iana",
		"extensions": [
			"bmi"
		]
	},
	"application/vnd.businessobjects": {
		"source": "iana",
		"extensions": [
			"rep"
		]
	},
	"application/vnd.cab-jscript": {
		"source": "iana"
	},
	"application/vnd.canon-cpdl": {
		"source": "iana"
	},
	"application/vnd.canon-lips": {
		"source": "iana"
	},
	"application/vnd.cendio.thinlinc.clientconf": {
		"source": "iana"
	},
	"application/vnd.century-systems.tcp_stream": {
		"source": "iana"
	},
	"application/vnd.chemdraw+xml": {
		"source": "iana",
		"extensions": [
			"cdxml"
		]
	},
	"application/vnd.chess-pgn": {
		"source": "iana"
	},
	"application/vnd.chipnuts.karaoke-mmd": {
		"source": "iana",
		"extensions": [
			"mmd"
		]
	},
	"application/vnd.cinderella": {
		"source": "iana",
		"extensions": [
			"cdy"
		]
	},
	"application/vnd.cirpack.isdn-ext": {
		"source": "iana"
	},
	"application/vnd.citationstyles.style+xml": {
		"source": "iana"
	},
	"application/vnd.claymore": {
		"source": "iana",
		"extensions": [
			"cla"
		]
	},
	"application/vnd.cloanto.rp9": {
		"source": "iana",
		"extensions": [
			"rp9"
		]
	},
	"application/vnd.clonk.c4group": {
		"source": "iana",
		"extensions": [
			"c4g",
			"c4d",
			"c4f",
			"c4p",
			"c4u"
		]
	},
	"application/vnd.cluetrust.cartomobile-config": {
		"source": "iana",
		"extensions": [
			"c11amc"
		]
	},
	"application/vnd.cluetrust.cartomobile-config-pkg": {
		"source": "iana",
		"extensions": [
			"c11amz"
		]
	},
	"application/vnd.coffeescript": {
		"source": "iana"
	},
	"application/vnd.collection+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.collection.doc+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.collection.next+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.comicbook+zip": {
		"source": "iana"
	},
	"application/vnd.commerce-battelle": {
		"source": "iana"
	},
	"application/vnd.commonspace": {
		"source": "iana",
		"extensions": [
			"csp"
		]
	},
	"application/vnd.contact.cmsg": {
		"source": "iana",
		"extensions": [
			"cdbcmsg"
		]
	},
	"application/vnd.coreos.ignition+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.cosmocaller": {
		"source": "iana",
		"extensions": [
			"cmc"
		]
	},
	"application/vnd.crick.clicker": {
		"source": "iana",
		"extensions": [
			"clkx"
		]
	},
	"application/vnd.crick.clicker.keyboard": {
		"source": "iana",
		"extensions": [
			"clkk"
		]
	},
	"application/vnd.crick.clicker.palette": {
		"source": "iana",
		"extensions": [
			"clkp"
		]
	},
	"application/vnd.crick.clicker.template": {
		"source": "iana",
		"extensions": [
			"clkt"
		]
	},
	"application/vnd.crick.clicker.wordbank": {
		"source": "iana",
		"extensions": [
			"clkw"
		]
	},
	"application/vnd.criticaltools.wbs+xml": {
		"source": "iana",
		"extensions": [
			"wbs"
		]
	},
	"application/vnd.ctc-posml": {
		"source": "iana",
		"extensions": [
			"pml"
		]
	},
	"application/vnd.ctct.ws+xml": {
		"source": "iana"
	},
	"application/vnd.cups-pdf": {
		"source": "iana"
	},
	"application/vnd.cups-postscript": {
		"source": "iana"
	},
	"application/vnd.cups-ppd": {
		"source": "iana",
		"extensions": [
			"ppd"
		]
	},
	"application/vnd.cups-raster": {
		"source": "iana"
	},
	"application/vnd.cups-raw": {
		"source": "iana"
	},
	"application/vnd.curl": {
		"source": "iana"
	},
	"application/vnd.curl.car": {
		"source": "apache",
		"extensions": [
			"car"
		]
	},
	"application/vnd.curl.pcurl": {
		"source": "apache",
		"extensions": [
			"pcurl"
		]
	},
	"application/vnd.cyan.dean.root+xml": {
		"source": "iana"
	},
	"application/vnd.cybank": {
		"source": "iana"
	},
	"application/vnd.d2l.coursepackage1p0+zip": {
		"source": "iana"
	},
	"application/vnd.dart": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"dart"
		]
	},
	"application/vnd.data-vision.rdz": {
		"source": "iana",
		"extensions": [
			"rdz"
		]
	},
	"application/vnd.dataresource+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.debian.binary-package": {
		"source": "iana"
	},
	"application/vnd.dece.data": {
		"source": "iana",
		"extensions": [
			"uvf",
			"uvvf",
			"uvd",
			"uvvd"
		]
	},
	"application/vnd.dece.ttml+xml": {
		"source": "iana",
		"extensions": [
			"uvt",
			"uvvt"
		]
	},
	"application/vnd.dece.unspecified": {
		"source": "iana",
		"extensions": [
			"uvx",
			"uvvx"
		]
	},
	"application/vnd.dece.zip": {
		"source": "iana",
		"extensions": [
			"uvz",
			"uvvz"
		]
	},
	"application/vnd.denovo.fcselayout-link": {
		"source": "iana",
		"extensions": [
			"fe_launch"
		]
	},
	"application/vnd.desmume-movie": {
		"source": "iana"
	},
	"application/vnd.desmume.movie": {
		"source": "apache"
	},
	"application/vnd.dir-bi.plate-dl-nosuffix": {
		"source": "iana"
	},
	"application/vnd.dm.delegation+xml": {
		"source": "iana"
	},
	"application/vnd.dna": {
		"source": "iana",
		"extensions": [
			"dna"
		]
	},
	"application/vnd.document+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.dolby.mlp": {
		"source": "apache",
		"extensions": [
			"mlp"
		]
	},
	"application/vnd.dolby.mobile.1": {
		"source": "iana"
	},
	"application/vnd.dolby.mobile.2": {
		"source": "iana"
	},
	"application/vnd.doremir.scorecloud-binary-document": {
		"source": "iana"
	},
	"application/vnd.dpgraph": {
		"source": "iana",
		"extensions": [
			"dpg"
		]
	},
	"application/vnd.dreamfactory": {
		"source": "iana",
		"extensions": [
			"dfac"
		]
	},
	"application/vnd.drive+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.ds-keypoint": {
		"source": "apache",
		"extensions": [
			"kpxx"
		]
	},
	"application/vnd.dtg.local": {
		"source": "iana"
	},
	"application/vnd.dtg.local.flash": {
		"source": "iana"
	},
	"application/vnd.dtg.local.html": {
		"source": "iana"
	},
	"application/vnd.dvb.ait": {
		"source": "iana",
		"extensions": [
			"ait"
		]
	},
	"application/vnd.dvb.dvbj": {
		"source": "iana"
	},
	"application/vnd.dvb.esgcontainer": {
		"source": "iana"
	},
	"application/vnd.dvb.ipdcdftnotifaccess": {
		"source": "iana"
	},
	"application/vnd.dvb.ipdcesgaccess": {
		"source": "iana"
	},
	"application/vnd.dvb.ipdcesgaccess2": {
		"source": "iana"
	},
	"application/vnd.dvb.ipdcesgpdd": {
		"source": "iana"
	},
	"application/vnd.dvb.ipdcroaming": {
		"source": "iana"
	},
	"application/vnd.dvb.iptv.alfec-base": {
		"source": "iana"
	},
	"application/vnd.dvb.iptv.alfec-enhancement": {
		"source": "iana"
	},
	"application/vnd.dvb.notif-aggregate-root+xml": {
		"source": "iana"
	},
	"application/vnd.dvb.notif-container+xml": {
		"source": "iana"
	},
	"application/vnd.dvb.notif-generic+xml": {
		"source": "iana"
	},
	"application/vnd.dvb.notif-ia-msglist+xml": {
		"source": "iana"
	},
	"application/vnd.dvb.notif-ia-registration-request+xml": {
		"source": "iana"
	},
	"application/vnd.dvb.notif-ia-registration-response+xml": {
		"source": "iana"
	},
	"application/vnd.dvb.notif-init+xml": {
		"source": "iana"
	},
	"application/vnd.dvb.pfr": {
		"source": "iana"
	},
	"application/vnd.dvb.service": {
		"source": "iana",
		"extensions": [
			"svc"
		]
	},
	"application/vnd.dxr": {
		"source": "iana"
	},
	"application/vnd.dynageo": {
		"source": "iana",
		"extensions": [
			"geo"
		]
	},
	"application/vnd.dzr": {
		"source": "iana"
	},
	"application/vnd.easykaraoke.cdgdownload": {
		"source": "iana"
	},
	"application/vnd.ecdis-update": {
		"source": "iana"
	},
	"application/vnd.ecowin.chart": {
		"source": "iana",
		"extensions": [
			"mag"
		]
	},
	"application/vnd.ecowin.filerequest": {
		"source": "iana"
	},
	"application/vnd.ecowin.fileupdate": {
		"source": "iana"
	},
	"application/vnd.ecowin.series": {
		"source": "iana"
	},
	"application/vnd.ecowin.seriesrequest": {
		"source": "iana"
	},
	"application/vnd.ecowin.seriesupdate": {
		"source": "iana"
	},
	"application/vnd.efi.img": {
		"source": "iana"
	},
	"application/vnd.efi.iso": {
		"source": "iana"
	},
	"application/vnd.emclient.accessrequest+xml": {
		"source": "iana"
	},
	"application/vnd.enliven": {
		"source": "iana",
		"extensions": [
			"nml"
		]
	},
	"application/vnd.enphase.envoy": {
		"source": "iana"
	},
	"application/vnd.eprints.data+xml": {
		"source": "iana"
	},
	"application/vnd.epson.esf": {
		"source": "iana",
		"extensions": [
			"esf"
		]
	},
	"application/vnd.epson.msf": {
		"source": "iana",
		"extensions": [
			"msf"
		]
	},
	"application/vnd.epson.quickanime": {
		"source": "iana",
		"extensions": [
			"qam"
		]
	},
	"application/vnd.epson.salt": {
		"source": "iana",
		"extensions": [
			"slt"
		]
	},
	"application/vnd.epson.ssf": {
		"source": "iana",
		"extensions": [
			"ssf"
		]
	},
	"application/vnd.ericsson.quickcall": {
		"source": "iana"
	},
	"application/vnd.espass-espass+zip": {
		"source": "iana"
	},
	"application/vnd.eszigno3+xml": {
		"source": "iana",
		"extensions": [
			"es3",
			"et3"
		]
	},
	"application/vnd.etsi.aoc+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.asic-e+zip": {
		"source": "iana"
	},
	"application/vnd.etsi.asic-s+zip": {
		"source": "iana"
	},
	"application/vnd.etsi.cug+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvcommand+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvdiscovery+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvprofile+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvsad-bc+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvsad-cod+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvsad-npvr+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvservice+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvsync+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.iptvueprofile+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.mcid+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.mheg5": {
		"source": "iana"
	},
	"application/vnd.etsi.overload-control-policy-dataset+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.pstn+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.sci+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.simservs+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.timestamp-token": {
		"source": "iana"
	},
	"application/vnd.etsi.tsl+xml": {
		"source": "iana"
	},
	"application/vnd.etsi.tsl.der": {
		"source": "iana"
	},
	"application/vnd.eudora.data": {
		"source": "iana"
	},
	"application/vnd.ezpix-album": {
		"source": "iana",
		"extensions": [
			"ez2"
		]
	},
	"application/vnd.ezpix-package": {
		"source": "iana",
		"extensions": [
			"ez3"
		]
	},
	"application/vnd.f-secure.mobile": {
		"source": "iana"
	},
	"application/vnd.fastcopy-disk-image": {
		"source": "iana"
	},
	"application/vnd.fdf": {
		"source": "iana",
		"extensions": [
			"fdf"
		]
	},
	"application/vnd.fdsn.mseed": {
		"source": "iana",
		"extensions": [
			"mseed"
		]
	},
	"application/vnd.fdsn.seed": {
		"source": "iana",
		"extensions": [
			"seed",
			"dataless"
		]
	},
	"application/vnd.ffsns": {
		"source": "iana"
	},
	"application/vnd.filmit.zfc": {
		"source": "iana"
	},
	"application/vnd.fints": {
		"source": "iana"
	},
	"application/vnd.firemonkeys.cloudcell": {
		"source": "iana"
	},
	"application/vnd.flographit": {
		"source": "iana",
		"extensions": [
			"gph"
		]
	},
	"application/vnd.fluxtime.clip": {
		"source": "iana",
		"extensions": [
			"ftc"
		]
	},
	"application/vnd.font-fontforge-sfd": {
		"source": "iana"
	},
	"application/vnd.framemaker": {
		"source": "iana",
		"extensions": [
			"fm",
			"frame",
			"maker",
			"book"
		]
	},
	"application/vnd.frogans.fnc": {
		"source": "iana",
		"extensions": [
			"fnc"
		]
	},
	"application/vnd.frogans.ltf": {
		"source": "iana",
		"extensions": [
			"ltf"
		]
	},
	"application/vnd.fsc.weblaunch": {
		"source": "iana",
		"extensions": [
			"fsc"
		]
	},
	"application/vnd.fujitsu.oasys": {
		"source": "iana",
		"extensions": [
			"oas"
		]
	},
	"application/vnd.fujitsu.oasys2": {
		"source": "iana",
		"extensions": [
			"oa2"
		]
	},
	"application/vnd.fujitsu.oasys3": {
		"source": "iana",
		"extensions": [
			"oa3"
		]
	},
	"application/vnd.fujitsu.oasysgp": {
		"source": "iana",
		"extensions": [
			"fg5"
		]
	},
	"application/vnd.fujitsu.oasysprs": {
		"source": "iana",
		"extensions": [
			"bh2"
		]
	},
	"application/vnd.fujixerox.art-ex": {
		"source": "iana"
	},
	"application/vnd.fujixerox.art4": {
		"source": "iana"
	},
	"application/vnd.fujixerox.ddd": {
		"source": "iana",
		"extensions": [
			"ddd"
		]
	},
	"application/vnd.fujixerox.docuworks": {
		"source": "iana",
		"extensions": [
			"xdw"
		]
	},
	"application/vnd.fujixerox.docuworks.binder": {
		"source": "iana",
		"extensions": [
			"xbd"
		]
	},
	"application/vnd.fujixerox.docuworks.container": {
		"source": "iana"
	},
	"application/vnd.fujixerox.hbpl": {
		"source": "iana"
	},
	"application/vnd.fut-misnet": {
		"source": "iana"
	},
	"application/vnd.fuzzysheet": {
		"source": "iana",
		"extensions": [
			"fzs"
		]
	},
	"application/vnd.genomatix.tuxedo": {
		"source": "iana",
		"extensions": [
			"txd"
		]
	},
	"application/vnd.geo+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.geocube+xml": {
		"source": "iana"
	},
	"application/vnd.geogebra.file": {
		"source": "iana",
		"extensions": [
			"ggb"
		]
	},
	"application/vnd.geogebra.tool": {
		"source": "iana",
		"extensions": [
			"ggt"
		]
	},
	"application/vnd.geometry-explorer": {
		"source": "iana",
		"extensions": [
			"gex",
			"gre"
		]
	},
	"application/vnd.geonext": {
		"source": "iana",
		"extensions": [
			"gxt"
		]
	},
	"application/vnd.geoplan": {
		"source": "iana",
		"extensions": [
			"g2w"
		]
	},
	"application/vnd.geospace": {
		"source": "iana",
		"extensions": [
			"g3w"
		]
	},
	"application/vnd.gerber": {
		"source": "iana"
	},
	"application/vnd.globalplatform.card-content-mgt": {
		"source": "iana"
	},
	"application/vnd.globalplatform.card-content-mgt-response": {
		"source": "iana"
	},
	"application/vnd.gmx": {
		"source": "iana",
		"extensions": [
			"gmx"
		]
	},
	"application/vnd.google-apps.document": {
		"compressible": false,
		"extensions": [
			"gdoc"
		]
	},
	"application/vnd.google-apps.presentation": {
		"compressible": false,
		"extensions": [
			"gslides"
		]
	},
	"application/vnd.google-apps.spreadsheet": {
		"compressible": false,
		"extensions": [
			"gsheet"
		]
	},
	"application/vnd.google-earth.kml+xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"kml"
		]
	},
	"application/vnd.google-earth.kmz": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"kmz"
		]
	},
	"application/vnd.gov.sk.e-form+xml": {
		"source": "iana"
	},
	"application/vnd.gov.sk.e-form+zip": {
		"source": "iana"
	},
	"application/vnd.gov.sk.xmldatacontainer+xml": {
		"source": "iana"
	},
	"application/vnd.grafeq": {
		"source": "iana",
		"extensions": [
			"gqf",
			"gqs"
		]
	},
	"application/vnd.gridmp": {
		"source": "iana"
	},
	"application/vnd.groove-account": {
		"source": "iana",
		"extensions": [
			"gac"
		]
	},
	"application/vnd.groove-help": {
		"source": "iana",
		"extensions": [
			"ghf"
		]
	},
	"application/vnd.groove-identity-message": {
		"source": "iana",
		"extensions": [
			"gim"
		]
	},
	"application/vnd.groove-injector": {
		"source": "iana",
		"extensions": [
			"grv"
		]
	},
	"application/vnd.groove-tool-message": {
		"source": "iana",
		"extensions": [
			"gtm"
		]
	},
	"application/vnd.groove-tool-template": {
		"source": "iana",
		"extensions": [
			"tpl"
		]
	},
	"application/vnd.groove-vcard": {
		"source": "iana",
		"extensions": [
			"vcg"
		]
	},
	"application/vnd.hal+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.hal+xml": {
		"source": "iana",
		"extensions": [
			"hal"
		]
	},
	"application/vnd.handheld-entertainment+xml": {
		"source": "iana",
		"extensions": [
			"zmm"
		]
	},
	"application/vnd.hbci": {
		"source": "iana",
		"extensions": [
			"hbci"
		]
	},
	"application/vnd.hc+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.hcl-bireports": {
		"source": "iana"
	},
	"application/vnd.hdt": {
		"source": "iana"
	},
	"application/vnd.heroku+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.hhe.lesson-player": {
		"source": "iana",
		"extensions": [
			"les"
		]
	},
	"application/vnd.hp-hpgl": {
		"source": "iana",
		"extensions": [
			"hpgl"
		]
	},
	"application/vnd.hp-hpid": {
		"source": "iana",
		"extensions": [
			"hpid"
		]
	},
	"application/vnd.hp-hps": {
		"source": "iana",
		"extensions": [
			"hps"
		]
	},
	"application/vnd.hp-jlyt": {
		"source": "iana",
		"extensions": [
			"jlt"
		]
	},
	"application/vnd.hp-pcl": {
		"source": "iana",
		"extensions": [
			"pcl"
		]
	},
	"application/vnd.hp-pclxl": {
		"source": "iana",
		"extensions": [
			"pclxl"
		]
	},
	"application/vnd.httphone": {
		"source": "iana"
	},
	"application/vnd.hydrostatix.sof-data": {
		"source": "iana",
		"extensions": [
			"sfd-hdstx"
		]
	},
	"application/vnd.hyperdrive+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.hzn-3d-crossword": {
		"source": "iana"
	},
	"application/vnd.ibm.afplinedata": {
		"source": "iana"
	},
	"application/vnd.ibm.electronic-media": {
		"source": "iana"
	},
	"application/vnd.ibm.minipay": {
		"source": "iana",
		"extensions": [
			"mpy"
		]
	},
	"application/vnd.ibm.modcap": {
		"source": "iana",
		"extensions": [
			"afp",
			"listafp",
			"list3820"
		]
	},
	"application/vnd.ibm.rights-management": {
		"source": "iana",
		"extensions": [
			"irm"
		]
	},
	"application/vnd.ibm.secure-container": {
		"source": "iana",
		"extensions": [
			"sc"
		]
	},
	"application/vnd.iccprofile": {
		"source": "iana",
		"extensions": [
			"icc",
			"icm"
		]
	},
	"application/vnd.ieee.1905": {
		"source": "iana"
	},
	"application/vnd.igloader": {
		"source": "iana",
		"extensions": [
			"igl"
		]
	},
	"application/vnd.imagemeter.image+zip": {
		"source": "iana"
	},
	"application/vnd.immervision-ivp": {
		"source": "iana",
		"extensions": [
			"ivp"
		]
	},
	"application/vnd.immervision-ivu": {
		"source": "iana",
		"extensions": [
			"ivu"
		]
	},
	"application/vnd.ims.imsccv1p1": {
		"source": "iana"
	},
	"application/vnd.ims.imsccv1p2": {
		"source": "iana"
	},
	"application/vnd.ims.imsccv1p3": {
		"source": "iana"
	},
	"application/vnd.ims.lis.v2.result+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.ims.lti.v2.toolproxy+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.ims.lti.v2.toolproxy.id+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.ims.lti.v2.toolsettings+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.informedcontrol.rms+xml": {
		"source": "iana"
	},
	"application/vnd.informix-visionary": {
		"source": "iana"
	},
	"application/vnd.infotech.project": {
		"source": "iana"
	},
	"application/vnd.infotech.project+xml": {
		"source": "iana"
	},
	"application/vnd.innopath.wamp.notification": {
		"source": "iana"
	},
	"application/vnd.insors.igm": {
		"source": "iana",
		"extensions": [
			"igm"
		]
	},
	"application/vnd.intercon.formnet": {
		"source": "iana",
		"extensions": [
			"xpw",
			"xpx"
		]
	},
	"application/vnd.intergeo": {
		"source": "iana",
		"extensions": [
			"i2g"
		]
	},
	"application/vnd.intertrust.digibox": {
		"source": "iana"
	},
	"application/vnd.intertrust.nncp": {
		"source": "iana"
	},
	"application/vnd.intu.qbo": {
		"source": "iana",
		"extensions": [
			"qbo"
		]
	},
	"application/vnd.intu.qfx": {
		"source": "iana",
		"extensions": [
			"qfx"
		]
	},
	"application/vnd.iptc.g2.catalogitem+xml": {
		"source": "iana"
	},
	"application/vnd.iptc.g2.conceptitem+xml": {
		"source": "iana"
	},
	"application/vnd.iptc.g2.knowledgeitem+xml": {
		"source": "iana"
	},
	"application/vnd.iptc.g2.newsitem+xml": {
		"source": "iana"
	},
	"application/vnd.iptc.g2.newsmessage+xml": {
		"source": "iana"
	},
	"application/vnd.iptc.g2.packageitem+xml": {
		"source": "iana"
	},
	"application/vnd.iptc.g2.planningitem+xml": {
		"source": "iana"
	},
	"application/vnd.ipunplugged.rcprofile": {
		"source": "iana",
		"extensions": [
			"rcprofile"
		]
	},
	"application/vnd.irepository.package+xml": {
		"source": "iana",
		"extensions": [
			"irp"
		]
	},
	"application/vnd.is-xpr": {
		"source": "iana",
		"extensions": [
			"xpr"
		]
	},
	"application/vnd.isac.fcs": {
		"source": "iana",
		"extensions": [
			"fcs"
		]
	},
	"application/vnd.jam": {
		"source": "iana",
		"extensions": [
			"jam"
		]
	},
	"application/vnd.japannet-directory-service": {
		"source": "iana"
	},
	"application/vnd.japannet-jpnstore-wakeup": {
		"source": "iana"
	},
	"application/vnd.japannet-payment-wakeup": {
		"source": "iana"
	},
	"application/vnd.japannet-registration": {
		"source": "iana"
	},
	"application/vnd.japannet-registration-wakeup": {
		"source": "iana"
	},
	"application/vnd.japannet-setstore-wakeup": {
		"source": "iana"
	},
	"application/vnd.japannet-verification": {
		"source": "iana"
	},
	"application/vnd.japannet-verification-wakeup": {
		"source": "iana"
	},
	"application/vnd.jcp.javame.midlet-rms": {
		"source": "iana",
		"extensions": [
			"rms"
		]
	},
	"application/vnd.jisp": {
		"source": "iana",
		"extensions": [
			"jisp"
		]
	},
	"application/vnd.joost.joda-archive": {
		"source": "iana",
		"extensions": [
			"joda"
		]
	},
	"application/vnd.jsk.isdn-ngn": {
		"source": "iana"
	},
	"application/vnd.kahootz": {
		"source": "iana",
		"extensions": [
			"ktz",
			"ktr"
		]
	},
	"application/vnd.kde.karbon": {
		"source": "iana",
		"extensions": [
			"karbon"
		]
	},
	"application/vnd.kde.kchart": {
		"source": "iana",
		"extensions": [
			"chrt"
		]
	},
	"application/vnd.kde.kformula": {
		"source": "iana",
		"extensions": [
			"kfo"
		]
	},
	"application/vnd.kde.kivio": {
		"source": "iana",
		"extensions": [
			"flw"
		]
	},
	"application/vnd.kde.kontour": {
		"source": "iana",
		"extensions": [
			"kon"
		]
	},
	"application/vnd.kde.kpresenter": {
		"source": "iana",
		"extensions": [
			"kpr",
			"kpt"
		]
	},
	"application/vnd.kde.kspread": {
		"source": "iana",
		"extensions": [
			"ksp"
		]
	},
	"application/vnd.kde.kword": {
		"source": "iana",
		"extensions": [
			"kwd",
			"kwt"
		]
	},
	"application/vnd.kenameaapp": {
		"source": "iana",
		"extensions": [
			"htke"
		]
	},
	"application/vnd.kidspiration": {
		"source": "iana",
		"extensions": [
			"kia"
		]
	},
	"application/vnd.kinar": {
		"source": "iana",
		"extensions": [
			"kne",
			"knp"
		]
	},
	"application/vnd.koan": {
		"source": "iana",
		"extensions": [
			"skp",
			"skd",
			"skt",
			"skm"
		]
	},
	"application/vnd.kodak-descriptor": {
		"source": "iana",
		"extensions": [
			"sse"
		]
	},
	"application/vnd.las.las+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.las.las+xml": {
		"source": "iana",
		"extensions": [
			"lasxml"
		]
	},
	"application/vnd.liberty-request+xml": {
		"source": "iana"
	},
	"application/vnd.llamagraphics.life-balance.desktop": {
		"source": "iana",
		"extensions": [
			"lbd"
		]
	},
	"application/vnd.llamagraphics.life-balance.exchange+xml": {
		"source": "iana",
		"extensions": [
			"lbe"
		]
	},
	"application/vnd.lotus-1-2-3": {
		"source": "iana",
		"extensions": [
			"123"
		]
	},
	"application/vnd.lotus-approach": {
		"source": "iana",
		"extensions": [
			"apr"
		]
	},
	"application/vnd.lotus-freelance": {
		"source": "iana",
		"extensions": [
			"pre"
		]
	},
	"application/vnd.lotus-notes": {
		"source": "iana",
		"extensions": [
			"nsf"
		]
	},
	"application/vnd.lotus-organizer": {
		"source": "iana",
		"extensions": [
			"org"
		]
	},
	"application/vnd.lotus-screencam": {
		"source": "iana",
		"extensions": [
			"scm"
		]
	},
	"application/vnd.lotus-wordpro": {
		"source": "iana",
		"extensions": [
			"lwp"
		]
	},
	"application/vnd.macports.portpkg": {
		"source": "iana",
		"extensions": [
			"portpkg"
		]
	},
	"application/vnd.mapbox-vector-tile": {
		"source": "iana"
	},
	"application/vnd.marlin.drm.actiontoken+xml": {
		"source": "iana"
	},
	"application/vnd.marlin.drm.conftoken+xml": {
		"source": "iana"
	},
	"application/vnd.marlin.drm.license+xml": {
		"source": "iana"
	},
	"application/vnd.marlin.drm.mdcf": {
		"source": "iana"
	},
	"application/vnd.mason+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.maxmind.maxmind-db": {
		"source": "iana"
	},
	"application/vnd.mcd": {
		"source": "iana",
		"extensions": [
			"mcd"
		]
	},
	"application/vnd.medcalcdata": {
		"source": "iana",
		"extensions": [
			"mc1"
		]
	},
	"application/vnd.mediastation.cdkey": {
		"source": "iana",
		"extensions": [
			"cdkey"
		]
	},
	"application/vnd.meridian-slingshot": {
		"source": "iana"
	},
	"application/vnd.mfer": {
		"source": "iana",
		"extensions": [
			"mwf"
		]
	},
	"application/vnd.mfmp": {
		"source": "iana",
		"extensions": [
			"mfm"
		]
	},
	"application/vnd.micro+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.micrografx.flo": {
		"source": "iana",
		"extensions": [
			"flo"
		]
	},
	"application/vnd.micrografx.igx": {
		"source": "iana",
		"extensions": [
			"igx"
		]
	},
	"application/vnd.microsoft.portable-executable": {
		"source": "iana"
	},
	"application/vnd.miele+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.mif": {
		"source": "iana",
		"extensions": [
			"mif"
		]
	},
	"application/vnd.minisoft-hp3000-save": {
		"source": "iana"
	},
	"application/vnd.mitsubishi.misty-guard.trustweb": {
		"source": "iana"
	},
	"application/vnd.mobius.daf": {
		"source": "iana",
		"extensions": [
			"daf"
		]
	},
	"application/vnd.mobius.dis": {
		"source": "iana",
		"extensions": [
			"dis"
		]
	},
	"application/vnd.mobius.mbk": {
		"source": "iana",
		"extensions": [
			"mbk"
		]
	},
	"application/vnd.mobius.mqy": {
		"source": "iana",
		"extensions": [
			"mqy"
		]
	},
	"application/vnd.mobius.msl": {
		"source": "iana",
		"extensions": [
			"msl"
		]
	},
	"application/vnd.mobius.plc": {
		"source": "iana",
		"extensions": [
			"plc"
		]
	},
	"application/vnd.mobius.txf": {
		"source": "iana",
		"extensions": [
			"txf"
		]
	},
	"application/vnd.mophun.application": {
		"source": "iana",
		"extensions": [
			"mpn"
		]
	},
	"application/vnd.mophun.certificate": {
		"source": "iana",
		"extensions": [
			"mpc"
		]
	},
	"application/vnd.motorola.flexsuite": {
		"source": "iana"
	},
	"application/vnd.motorola.flexsuite.adsi": {
		"source": "iana"
	},
	"application/vnd.motorola.flexsuite.fis": {
		"source": "iana"
	},
	"application/vnd.motorola.flexsuite.gotap": {
		"source": "iana"
	},
	"application/vnd.motorola.flexsuite.kmr": {
		"source": "iana"
	},
	"application/vnd.motorola.flexsuite.ttc": {
		"source": "iana"
	},
	"application/vnd.motorola.flexsuite.wem": {
		"source": "iana"
	},
	"application/vnd.motorola.iprm": {
		"source": "iana"
	},
	"application/vnd.mozilla.xul+xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"xul"
		]
	},
	"application/vnd.ms-3mfdocument": {
		"source": "iana"
	},
	"application/vnd.ms-artgalry": {
		"source": "iana",
		"extensions": [
			"cil"
		]
	},
	"application/vnd.ms-asf": {
		"source": "iana"
	},
	"application/vnd.ms-cab-compressed": {
		"source": "iana",
		"extensions": [
			"cab"
		]
	},
	"application/vnd.ms-color.iccprofile": {
		"source": "apache"
	},
	"application/vnd.ms-excel": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"xls",
			"xlm",
			"xla",
			"xlc",
			"xlt",
			"xlw"
		]
	},
	"application/vnd.ms-excel.addin.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"xlam"
		]
	},
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"xlsb"
		]
	},
	"application/vnd.ms-excel.sheet.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"xlsm"
		]
	},
	"application/vnd.ms-excel.template.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"xltm"
		]
	},
	"application/vnd.ms-fontobject": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"eot"
		]
	},
	"application/vnd.ms-htmlhelp": {
		"source": "iana",
		"extensions": [
			"chm"
		]
	},
	"application/vnd.ms-ims": {
		"source": "iana",
		"extensions": [
			"ims"
		]
	},
	"application/vnd.ms-lrm": {
		"source": "iana",
		"extensions": [
			"lrm"
		]
	},
	"application/vnd.ms-office.activex+xml": {
		"source": "iana"
	},
	"application/vnd.ms-officetheme": {
		"source": "iana",
		"extensions": [
			"thmx"
		]
	},
	"application/vnd.ms-opentype": {
		"source": "apache",
		"compressible": true
	},
	"application/vnd.ms-package.obfuscated-opentype": {
		"source": "apache"
	},
	"application/vnd.ms-pki.seccat": {
		"source": "apache",
		"extensions": [
			"cat"
		]
	},
	"application/vnd.ms-pki.stl": {
		"source": "apache",
		"extensions": [
			"stl"
		]
	},
	"application/vnd.ms-playready.initiator+xml": {
		"source": "iana"
	},
	"application/vnd.ms-powerpoint": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"ppt",
			"pps",
			"pot"
		]
	},
	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"ppam"
		]
	},
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"pptm"
		]
	},
	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"sldm"
		]
	},
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"ppsm"
		]
	},
	"application/vnd.ms-powerpoint.template.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"potm"
		]
	},
	"application/vnd.ms-printdevicecapabilities+xml": {
		"source": "iana"
	},
	"application/vnd.ms-printing.printticket+xml": {
		"source": "apache"
	},
	"application/vnd.ms-printschematicket+xml": {
		"source": "iana"
	},
	"application/vnd.ms-project": {
		"source": "iana",
		"extensions": [
			"mpp",
			"mpt"
		]
	},
	"application/vnd.ms-tnef": {
		"source": "iana"
	},
	"application/vnd.ms-windows.devicepairing": {
		"source": "iana"
	},
	"application/vnd.ms-windows.nwprinting.oob": {
		"source": "iana"
	},
	"application/vnd.ms-windows.printerpairing": {
		"source": "iana"
	},
	"application/vnd.ms-windows.wsd.oob": {
		"source": "iana"
	},
	"application/vnd.ms-wmdrm.lic-chlg-req": {
		"source": "iana"
	},
	"application/vnd.ms-wmdrm.lic-resp": {
		"source": "iana"
	},
	"application/vnd.ms-wmdrm.meter-chlg-req": {
		"source": "iana"
	},
	"application/vnd.ms-wmdrm.meter-resp": {
		"source": "iana"
	},
	"application/vnd.ms-word.document.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"docm"
		]
	},
	"application/vnd.ms-word.template.macroenabled.12": {
		"source": "iana",
		"extensions": [
			"dotm"
		]
	},
	"application/vnd.ms-works": {
		"source": "iana",
		"extensions": [
			"wps",
			"wks",
			"wcm",
			"wdb"
		]
	},
	"application/vnd.ms-wpl": {
		"source": "iana",
		"extensions": [
			"wpl"
		]
	},
	"application/vnd.ms-xpsdocument": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"xps"
		]
	},
	"application/vnd.msa-disk-image": {
		"source": "iana"
	},
	"application/vnd.mseq": {
		"source": "iana",
		"extensions": [
			"mseq"
		]
	},
	"application/vnd.msign": {
		"source": "iana"
	},
	"application/vnd.multiad.creator": {
		"source": "iana"
	},
	"application/vnd.multiad.creator.cif": {
		"source": "iana"
	},
	"application/vnd.music-niff": {
		"source": "iana"
	},
	"application/vnd.musician": {
		"source": "iana",
		"extensions": [
			"mus"
		]
	},
	"application/vnd.muvee.style": {
		"source": "iana",
		"extensions": [
			"msty"
		]
	},
	"application/vnd.mynfc": {
		"source": "iana",
		"extensions": [
			"taglet"
		]
	},
	"application/vnd.ncd.control": {
		"source": "iana"
	},
	"application/vnd.ncd.reference": {
		"source": "iana"
	},
	"application/vnd.nearst.inv+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.nervana": {
		"source": "iana"
	},
	"application/vnd.netfpx": {
		"source": "iana"
	},
	"application/vnd.neurolanguage.nlu": {
		"source": "iana",
		"extensions": [
			"nlu"
		]
	},
	"application/vnd.nintendo.nitro.rom": {
		"source": "iana"
	},
	"application/vnd.nintendo.snes.rom": {
		"source": "iana"
	},
	"application/vnd.nitf": {
		"source": "iana",
		"extensions": [
			"ntf",
			"nitf"
		]
	},
	"application/vnd.noblenet-directory": {
		"source": "iana",
		"extensions": [
			"nnd"
		]
	},
	"application/vnd.noblenet-sealer": {
		"source": "iana",
		"extensions": [
			"nns"
		]
	},
	"application/vnd.noblenet-web": {
		"source": "iana",
		"extensions": [
			"nnw"
		]
	},
	"application/vnd.nokia.catalogs": {
		"source": "iana"
	},
	"application/vnd.nokia.conml+wbxml": {
		"source": "iana"
	},
	"application/vnd.nokia.conml+xml": {
		"source": "iana"
	},
	"application/vnd.nokia.iptv.config+xml": {
		"source": "iana"
	},
	"application/vnd.nokia.isds-radio-presets": {
		"source": "iana"
	},
	"application/vnd.nokia.landmark+wbxml": {
		"source": "iana"
	},
	"application/vnd.nokia.landmark+xml": {
		"source": "iana"
	},
	"application/vnd.nokia.landmarkcollection+xml": {
		"source": "iana"
	},
	"application/vnd.nokia.n-gage.ac+xml": {
		"source": "iana"
	},
	"application/vnd.nokia.n-gage.data": {
		"source": "iana",
		"extensions": [
			"ngdat"
		]
	},
	"application/vnd.nokia.n-gage.symbian.install": {
		"source": "iana",
		"extensions": [
			"n-gage"
		]
	},
	"application/vnd.nokia.ncd": {
		"source": "iana"
	},
	"application/vnd.nokia.pcd+wbxml": {
		"source": "iana"
	},
	"application/vnd.nokia.pcd+xml": {
		"source": "iana"
	},
	"application/vnd.nokia.radio-preset": {
		"source": "iana",
		"extensions": [
			"rpst"
		]
	},
	"application/vnd.nokia.radio-presets": {
		"source": "iana",
		"extensions": [
			"rpss"
		]
	},
	"application/vnd.novadigm.edm": {
		"source": "iana",
		"extensions": [
			"edm"
		]
	},
	"application/vnd.novadigm.edx": {
		"source": "iana",
		"extensions": [
			"edx"
		]
	},
	"application/vnd.novadigm.ext": {
		"source": "iana",
		"extensions": [
			"ext"
		]
	},
	"application/vnd.ntt-local.content-share": {
		"source": "iana"
	},
	"application/vnd.ntt-local.file-transfer": {
		"source": "iana"
	},
	"application/vnd.ntt-local.ogw_remote-access": {
		"source": "iana"
	},
	"application/vnd.ntt-local.sip-ta_remote": {
		"source": "iana"
	},
	"application/vnd.ntt-local.sip-ta_tcp_stream": {
		"source": "iana"
	},
	"application/vnd.oasis.opendocument.chart": {
		"source": "iana",
		"extensions": [
			"odc"
		]
	},
	"application/vnd.oasis.opendocument.chart-template": {
		"source": "iana",
		"extensions": [
			"otc"
		]
	},
	"application/vnd.oasis.opendocument.database": {
		"source": "iana",
		"extensions": [
			"odb"
		]
	},
	"application/vnd.oasis.opendocument.formula": {
		"source": "iana",
		"extensions": [
			"odf"
		]
	},
	"application/vnd.oasis.opendocument.formula-template": {
		"source": "iana",
		"extensions": [
			"odft"
		]
	},
	"application/vnd.oasis.opendocument.graphics": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"odg"
		]
	},
	"application/vnd.oasis.opendocument.graphics-template": {
		"source": "iana",
		"extensions": [
			"otg"
		]
	},
	"application/vnd.oasis.opendocument.image": {
		"source": "iana",
		"extensions": [
			"odi"
		]
	},
	"application/vnd.oasis.opendocument.image-template": {
		"source": "iana",
		"extensions": [
			"oti"
		]
	},
	"application/vnd.oasis.opendocument.presentation": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"odp"
		]
	},
	"application/vnd.oasis.opendocument.presentation-template": {
		"source": "iana",
		"extensions": [
			"otp"
		]
	},
	"application/vnd.oasis.opendocument.spreadsheet": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"ods"
		]
	},
	"application/vnd.oasis.opendocument.spreadsheet-template": {
		"source": "iana",
		"extensions": [
			"ots"
		]
	},
	"application/vnd.oasis.opendocument.text": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"odt"
		]
	},
	"application/vnd.oasis.opendocument.text-master": {
		"source": "iana",
		"extensions": [
			"odm"
		]
	},
	"application/vnd.oasis.opendocument.text-template": {
		"source": "iana",
		"extensions": [
			"ott"
		]
	},
	"application/vnd.oasis.opendocument.text-web": {
		"source": "iana",
		"extensions": [
			"oth"
		]
	},
	"application/vnd.obn": {
		"source": "iana"
	},
	"application/vnd.ocf+cbor": {
		"source": "iana"
	},
	"application/vnd.oftn.l10n+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.oipf.contentaccessdownload+xml": {
		"source": "iana"
	},
	"application/vnd.oipf.contentaccessstreaming+xml": {
		"source": "iana"
	},
	"application/vnd.oipf.cspg-hexbinary": {
		"source": "iana"
	},
	"application/vnd.oipf.dae.svg+xml": {
		"source": "iana"
	},
	"application/vnd.oipf.dae.xhtml+xml": {
		"source": "iana"
	},
	"application/vnd.oipf.mippvcontrolmessage+xml": {
		"source": "iana"
	},
	"application/vnd.oipf.pae.gem": {
		"source": "iana"
	},
	"application/vnd.oipf.spdiscovery+xml": {
		"source": "iana"
	},
	"application/vnd.oipf.spdlist+xml": {
		"source": "iana"
	},
	"application/vnd.oipf.ueprofile+xml": {
		"source": "iana"
	},
	"application/vnd.oipf.userprofile+xml": {
		"source": "iana"
	},
	"application/vnd.olpc-sugar": {
		"source": "iana",
		"extensions": [
			"xo"
		]
	},
	"application/vnd.oma-scws-config": {
		"source": "iana"
	},
	"application/vnd.oma-scws-http-request": {
		"source": "iana"
	},
	"application/vnd.oma-scws-http-response": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.drm-trigger+xml": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.imd+xml": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.ltkm": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.notification+xml": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.provisioningtrigger": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.sgboot": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.sgdd+xml": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.sgdu": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.simple-symbol-container": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.smartcard-trigger+xml": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.sprov+xml": {
		"source": "iana"
	},
	"application/vnd.oma.bcast.stkm": {
		"source": "iana"
	},
	"application/vnd.oma.cab-address-book+xml": {
		"source": "iana"
	},
	"application/vnd.oma.cab-feature-handler+xml": {
		"source": "iana"
	},
	"application/vnd.oma.cab-pcc+xml": {
		"source": "iana"
	},
	"application/vnd.oma.cab-subs-invite+xml": {
		"source": "iana"
	},
	"application/vnd.oma.cab-user-prefs+xml": {
		"source": "iana"
	},
	"application/vnd.oma.dcd": {
		"source": "iana"
	},
	"application/vnd.oma.dcdc": {
		"source": "iana"
	},
	"application/vnd.oma.dd2+xml": {
		"source": "iana",
		"extensions": [
			"dd2"
		]
	},
	"application/vnd.oma.drm.risd+xml": {
		"source": "iana"
	},
	"application/vnd.oma.group-usage-list+xml": {
		"source": "iana"
	},
	"application/vnd.oma.lwm2m+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.oma.lwm2m+tlv": {
		"source": "iana"
	},
	"application/vnd.oma.pal+xml": {
		"source": "iana"
	},
	"application/vnd.oma.poc.detailed-progress-report+xml": {
		"source": "iana"
	},
	"application/vnd.oma.poc.final-report+xml": {
		"source": "iana"
	},
	"application/vnd.oma.poc.groups+xml": {
		"source": "iana"
	},
	"application/vnd.oma.poc.invocation-descriptor+xml": {
		"source": "iana"
	},
	"application/vnd.oma.poc.optimized-progress-report+xml": {
		"source": "iana"
	},
	"application/vnd.oma.push": {
		"source": "iana"
	},
	"application/vnd.oma.scidm.messages+xml": {
		"source": "iana"
	},
	"application/vnd.oma.xcap-directory+xml": {
		"source": "iana"
	},
	"application/vnd.omads-email+xml": {
		"source": "iana"
	},
	"application/vnd.omads-file+xml": {
		"source": "iana"
	},
	"application/vnd.omads-folder+xml": {
		"source": "iana"
	},
	"application/vnd.omaloc-supl-init": {
		"source": "iana"
	},
	"application/vnd.onepager": {
		"source": "iana"
	},
	"application/vnd.openblox.game+xml": {
		"source": "iana"
	},
	"application/vnd.openblox.game-binary": {
		"source": "iana"
	},
	"application/vnd.openeye.oeb": {
		"source": "iana"
	},
	"application/vnd.openofficeorg.extension": {
		"source": "apache",
		"extensions": [
			"oxt"
		]
	},
	"application/vnd.openstreetmap.data+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.drawing+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml-template": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"pptx"
		]
	},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
		"source": "iana",
		"extensions": [
			"sldx"
		]
	},
	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
		"source": "iana",
		"extensions": [
			"ppsx"
		]
	},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.template": {
		"source": "apache",
		"extensions": [
			"potx"
		]
	},
	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml-template": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"xlsx"
		]
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
		"source": "apache",
		"extensions": [
			"xltx"
		]
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.theme+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.vmldrawing": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml-template": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"docx"
		]
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
		"source": "apache",
		"extensions": [
			"dotx"
		]
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-package.core-properties+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
		"source": "iana"
	},
	"application/vnd.openxmlformats-package.relationships+xml": {
		"source": "iana"
	},
	"application/vnd.oracle.resource+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.orange.indata": {
		"source": "iana"
	},
	"application/vnd.osa.netdeploy": {
		"source": "iana"
	},
	"application/vnd.osgeo.mapguide.package": {
		"source": "iana",
		"extensions": [
			"mgp"
		]
	},
	"application/vnd.osgi.bundle": {
		"source": "iana"
	},
	"application/vnd.osgi.dp": {
		"source": "iana",
		"extensions": [
			"dp"
		]
	},
	"application/vnd.osgi.subsystem": {
		"source": "iana",
		"extensions": [
			"esa"
		]
	},
	"application/vnd.otps.ct-kip+xml": {
		"source": "iana"
	},
	"application/vnd.oxli.countgraph": {
		"source": "iana"
	},
	"application/vnd.pagerduty+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.palm": {
		"source": "iana",
		"extensions": [
			"pdb",
			"pqa",
			"oprc"
		]
	},
	"application/vnd.panoply": {
		"source": "iana"
	},
	"application/vnd.paos+xml": {
		"source": "iana"
	},
	"application/vnd.paos.xml": {
		"source": "apache"
	},
	"application/vnd.pawaafile": {
		"source": "iana",
		"extensions": [
			"paw"
		]
	},
	"application/vnd.pcos": {
		"source": "iana"
	},
	"application/vnd.pg.format": {
		"source": "iana",
		"extensions": [
			"str"
		]
	},
	"application/vnd.pg.osasli": {
		"source": "iana",
		"extensions": [
			"ei6"
		]
	},
	"application/vnd.piaccess.application-licence": {
		"source": "iana"
	},
	"application/vnd.picsel": {
		"source": "iana",
		"extensions": [
			"efif"
		]
	},
	"application/vnd.pmi.widget": {
		"source": "iana",
		"extensions": [
			"wg"
		]
	},
	"application/vnd.poc.group-advertisement+xml": {
		"source": "iana"
	},
	"application/vnd.pocketlearn": {
		"source": "iana",
		"extensions": [
			"plf"
		]
	},
	"application/vnd.powerbuilder6": {
		"source": "iana",
		"extensions": [
			"pbd"
		]
	},
	"application/vnd.powerbuilder6-s": {
		"source": "iana"
	},
	"application/vnd.powerbuilder7": {
		"source": "iana"
	},
	"application/vnd.powerbuilder7-s": {
		"source": "iana"
	},
	"application/vnd.powerbuilder75": {
		"source": "iana"
	},
	"application/vnd.powerbuilder75-s": {
		"source": "iana"
	},
	"application/vnd.preminet": {
		"source": "iana"
	},
	"application/vnd.previewsystems.box": {
		"source": "iana",
		"extensions": [
			"box"
		]
	},
	"application/vnd.proteus.magazine": {
		"source": "iana",
		"extensions": [
			"mgz"
		]
	},
	"application/vnd.publishare-delta-tree": {
		"source": "iana",
		"extensions": [
			"qps"
		]
	},
	"application/vnd.pvi.ptid1": {
		"source": "iana",
		"extensions": [
			"ptid"
		]
	},
	"application/vnd.pwg-multiplexed": {
		"source": "iana"
	},
	"application/vnd.pwg-xhtml-print+xml": {
		"source": "iana"
	},
	"application/vnd.qualcomm.brew-app-res": {
		"source": "iana"
	},
	"application/vnd.quarantainenet": {
		"source": "iana"
	},
	"application/vnd.quark.quarkxpress": {
		"source": "iana",
		"extensions": [
			"qxd",
			"qxt",
			"qwd",
			"qwt",
			"qxl",
			"qxb"
		]
	},
	"application/vnd.quobject-quoxdocument": {
		"source": "iana"
	},
	"application/vnd.radisys.moml+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-audit+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-audit-conf+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-audit-conn+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-audit-dialog+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-audit-stream+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-conf+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-dialog+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-dialog-base+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-dialog-group+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-dialog-speech+xml": {
		"source": "iana"
	},
	"application/vnd.radisys.msml-dialog-transform+xml": {
		"source": "iana"
	},
	"application/vnd.rainstor.data": {
		"source": "iana"
	},
	"application/vnd.rapid": {
		"source": "iana"
	},
	"application/vnd.rar": {
		"source": "iana"
	},
	"application/vnd.realvnc.bed": {
		"source": "iana",
		"extensions": [
			"bed"
		]
	},
	"application/vnd.recordare.musicxml": {
		"source": "iana",
		"extensions": [
			"mxl"
		]
	},
	"application/vnd.recordare.musicxml+xml": {
		"source": "iana",
		"extensions": [
			"musicxml"
		]
	},
	"application/vnd.renlearn.rlprint": {
		"source": "iana"
	},
	"application/vnd.rig.cryptonote": {
		"source": "iana",
		"extensions": [
			"cryptonote"
		]
	},
	"application/vnd.rim.cod": {
		"source": "apache",
		"extensions": [
			"cod"
		]
	},
	"application/vnd.rn-realmedia": {
		"source": "apache",
		"extensions": [
			"rm"
		]
	},
	"application/vnd.rn-realmedia-vbr": {
		"source": "apache",
		"extensions": [
			"rmvb"
		]
	},
	"application/vnd.route66.link66+xml": {
		"source": "iana",
		"extensions": [
			"link66"
		]
	},
	"application/vnd.rs-274x": {
		"source": "iana"
	},
	"application/vnd.ruckus.download": {
		"source": "iana"
	},
	"application/vnd.s3sms": {
		"source": "iana"
	},
	"application/vnd.sailingtracker.track": {
		"source": "iana",
		"extensions": [
			"st"
		]
	},
	"application/vnd.sbm.cid": {
		"source": "iana"
	},
	"application/vnd.sbm.mid2": {
		"source": "iana"
	},
	"application/vnd.scribus": {
		"source": "iana"
	},
	"application/vnd.sealed.3df": {
		"source": "iana"
	},
	"application/vnd.sealed.csf": {
		"source": "iana"
	},
	"application/vnd.sealed.doc": {
		"source": "iana"
	},
	"application/vnd.sealed.eml": {
		"source": "iana"
	},
	"application/vnd.sealed.mht": {
		"source": "iana"
	},
	"application/vnd.sealed.net": {
		"source": "iana"
	},
	"application/vnd.sealed.ppt": {
		"source": "iana"
	},
	"application/vnd.sealed.tiff": {
		"source": "iana"
	},
	"application/vnd.sealed.xls": {
		"source": "iana"
	},
	"application/vnd.sealedmedia.softseal.html": {
		"source": "iana"
	},
	"application/vnd.sealedmedia.softseal.pdf": {
		"source": "iana"
	},
	"application/vnd.seemail": {
		"source": "iana",
		"extensions": [
			"see"
		]
	},
	"application/vnd.sema": {
		"source": "iana",
		"extensions": [
			"sema"
		]
	},
	"application/vnd.semd": {
		"source": "iana",
		"extensions": [
			"semd"
		]
	},
	"application/vnd.semf": {
		"source": "iana",
		"extensions": [
			"semf"
		]
	},
	"application/vnd.shana.informed.formdata": {
		"source": "iana",
		"extensions": [
			"ifm"
		]
	},
	"application/vnd.shana.informed.formtemplate": {
		"source": "iana",
		"extensions": [
			"itp"
		]
	},
	"application/vnd.shana.informed.interchange": {
		"source": "iana",
		"extensions": [
			"iif"
		]
	},
	"application/vnd.shana.informed.package": {
		"source": "iana",
		"extensions": [
			"ipk"
		]
	},
	"application/vnd.simtech-mindmapper": {
		"source": "iana",
		"extensions": [
			"twd",
			"twds"
		]
	},
	"application/vnd.siren+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.smaf": {
		"source": "iana",
		"extensions": [
			"mmf"
		]
	},
	"application/vnd.smart.notebook": {
		"source": "iana"
	},
	"application/vnd.smart.teacher": {
		"source": "iana",
		"extensions": [
			"teacher"
		]
	},
	"application/vnd.software602.filler.form+xml": {
		"source": "iana"
	},
	"application/vnd.software602.filler.form-xml-zip": {
		"source": "iana"
	},
	"application/vnd.solent.sdkm+xml": {
		"source": "iana",
		"extensions": [
			"sdkm",
			"sdkd"
		]
	},
	"application/vnd.spotfire.dxp": {
		"source": "iana",
		"extensions": [
			"dxp"
		]
	},
	"application/vnd.spotfire.sfs": {
		"source": "iana",
		"extensions": [
			"sfs"
		]
	},
	"application/vnd.sss-cod": {
		"source": "iana"
	},
	"application/vnd.sss-dtf": {
		"source": "iana"
	},
	"application/vnd.sss-ntf": {
		"source": "iana"
	},
	"application/vnd.stardivision.calc": {
		"source": "apache",
		"extensions": [
			"sdc"
		]
	},
	"application/vnd.stardivision.draw": {
		"source": "apache",
		"extensions": [
			"sda"
		]
	},
	"application/vnd.stardivision.impress": {
		"source": "apache",
		"extensions": [
			"sdd"
		]
	},
	"application/vnd.stardivision.math": {
		"source": "apache",
		"extensions": [
			"smf"
		]
	},
	"application/vnd.stardivision.writer": {
		"source": "apache",
		"extensions": [
			"sdw",
			"vor"
		]
	},
	"application/vnd.stardivision.writer-global": {
		"source": "apache",
		"extensions": [
			"sgl"
		]
	},
	"application/vnd.stepmania.package": {
		"source": "iana",
		"extensions": [
			"smzip"
		]
	},
	"application/vnd.stepmania.stepchart": {
		"source": "iana",
		"extensions": [
			"sm"
		]
	},
	"application/vnd.street-stream": {
		"source": "iana"
	},
	"application/vnd.sun.wadl+xml": {
		"source": "iana"
	},
	"application/vnd.sun.xml.calc": {
		"source": "apache",
		"extensions": [
			"sxc"
		]
	},
	"application/vnd.sun.xml.calc.template": {
		"source": "apache",
		"extensions": [
			"stc"
		]
	},
	"application/vnd.sun.xml.draw": {
		"source": "apache",
		"extensions": [
			"sxd"
		]
	},
	"application/vnd.sun.xml.draw.template": {
		"source": "apache",
		"extensions": [
			"std"
		]
	},
	"application/vnd.sun.xml.impress": {
		"source": "apache",
		"extensions": [
			"sxi"
		]
	},
	"application/vnd.sun.xml.impress.template": {
		"source": "apache",
		"extensions": [
			"sti"
		]
	},
	"application/vnd.sun.xml.math": {
		"source": "apache",
		"extensions": [
			"sxm"
		]
	},
	"application/vnd.sun.xml.writer": {
		"source": "apache",
		"extensions": [
			"sxw"
		]
	},
	"application/vnd.sun.xml.writer.global": {
		"source": "apache",
		"extensions": [
			"sxg"
		]
	},
	"application/vnd.sun.xml.writer.template": {
		"source": "apache",
		"extensions": [
			"stw"
		]
	},
	"application/vnd.sus-calendar": {
		"source": "iana",
		"extensions": [
			"sus",
			"susp"
		]
	},
	"application/vnd.svd": {
		"source": "iana",
		"extensions": [
			"svd"
		]
	},
	"application/vnd.swiftview-ics": {
		"source": "iana"
	},
	"application/vnd.symbian.install": {
		"source": "apache",
		"extensions": [
			"sis",
			"sisx"
		]
	},
	"application/vnd.syncml+xml": {
		"source": "iana",
		"extensions": [
			"xsm"
		]
	},
	"application/vnd.syncml.dm+wbxml": {
		"source": "iana",
		"extensions": [
			"bdm"
		]
	},
	"application/vnd.syncml.dm+xml": {
		"source": "iana",
		"extensions": [
			"xdm"
		]
	},
	"application/vnd.syncml.dm.notification": {
		"source": "iana"
	},
	"application/vnd.syncml.dmddf+wbxml": {
		"source": "iana"
	},
	"application/vnd.syncml.dmddf+xml": {
		"source": "iana"
	},
	"application/vnd.syncml.dmtnds+wbxml": {
		"source": "iana"
	},
	"application/vnd.syncml.dmtnds+xml": {
		"source": "iana"
	},
	"application/vnd.syncml.ds.notification": {
		"source": "iana"
	},
	"application/vnd.tableschema+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.tao.intent-module-archive": {
		"source": "iana",
		"extensions": [
			"tao"
		]
	},
	"application/vnd.tcpdump.pcap": {
		"source": "iana",
		"extensions": [
			"pcap",
			"cap",
			"dmp"
		]
	},
	"application/vnd.tmd.mediaflex.api+xml": {
		"source": "iana"
	},
	"application/vnd.tml": {
		"source": "iana"
	},
	"application/vnd.tmobile-livetv": {
		"source": "iana",
		"extensions": [
			"tmo"
		]
	},
	"application/vnd.tri.onesource": {
		"source": "iana"
	},
	"application/vnd.trid.tpt": {
		"source": "iana",
		"extensions": [
			"tpt"
		]
	},
	"application/vnd.triscape.mxs": {
		"source": "iana",
		"extensions": [
			"mxs"
		]
	},
	"application/vnd.trueapp": {
		"source": "iana",
		"extensions": [
			"tra"
		]
	},
	"application/vnd.truedoc": {
		"source": "iana"
	},
	"application/vnd.ubisoft.webplayer": {
		"source": "iana"
	},
	"application/vnd.ufdl": {
		"source": "iana",
		"extensions": [
			"ufd",
			"ufdl"
		]
	},
	"application/vnd.uiq.theme": {
		"source": "iana",
		"extensions": [
			"utz"
		]
	},
	"application/vnd.umajin": {
		"source": "iana",
		"extensions": [
			"umj"
		]
	},
	"application/vnd.unity": {
		"source": "iana",
		"extensions": [
			"unityweb"
		]
	},
	"application/vnd.uoml+xml": {
		"source": "iana",
		"extensions": [
			"uoml"
		]
	},
	"application/vnd.uplanet.alert": {
		"source": "iana"
	},
	"application/vnd.uplanet.alert-wbxml": {
		"source": "iana"
	},
	"application/vnd.uplanet.bearer-choice": {
		"source": "iana"
	},
	"application/vnd.uplanet.bearer-choice-wbxml": {
		"source": "iana"
	},
	"application/vnd.uplanet.cacheop": {
		"source": "iana"
	},
	"application/vnd.uplanet.cacheop-wbxml": {
		"source": "iana"
	},
	"application/vnd.uplanet.channel": {
		"source": "iana"
	},
	"application/vnd.uplanet.channel-wbxml": {
		"source": "iana"
	},
	"application/vnd.uplanet.list": {
		"source": "iana"
	},
	"application/vnd.uplanet.list-wbxml": {
		"source": "iana"
	},
	"application/vnd.uplanet.listcmd": {
		"source": "iana"
	},
	"application/vnd.uplanet.listcmd-wbxml": {
		"source": "iana"
	},
	"application/vnd.uplanet.signal": {
		"source": "iana"
	},
	"application/vnd.uri-map": {
		"source": "iana"
	},
	"application/vnd.valve.source.material": {
		"source": "iana"
	},
	"application/vnd.vcx": {
		"source": "iana",
		"extensions": [
			"vcx"
		]
	},
	"application/vnd.vd-study": {
		"source": "iana"
	},
	"application/vnd.vectorworks": {
		"source": "iana"
	},
	"application/vnd.vel+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.verimatrix.vcas": {
		"source": "iana"
	},
	"application/vnd.vidsoft.vidconference": {
		"source": "iana"
	},
	"application/vnd.visio": {
		"source": "iana",
		"extensions": [
			"vsd",
			"vst",
			"vss",
			"vsw"
		]
	},
	"application/vnd.visionary": {
		"source": "iana",
		"extensions": [
			"vis"
		]
	},
	"application/vnd.vividence.scriptfile": {
		"source": "iana"
	},
	"application/vnd.vsf": {
		"source": "iana",
		"extensions": [
			"vsf"
		]
	},
	"application/vnd.wap.sic": {
		"source": "iana"
	},
	"application/vnd.wap.slc": {
		"source": "iana"
	},
	"application/vnd.wap.wbxml": {
		"source": "iana",
		"extensions": [
			"wbxml"
		]
	},
	"application/vnd.wap.wmlc": {
		"source": "iana",
		"extensions": [
			"wmlc"
		]
	},
	"application/vnd.wap.wmlscriptc": {
		"source": "iana",
		"extensions": [
			"wmlsc"
		]
	},
	"application/vnd.webturbo": {
		"source": "iana",
		"extensions": [
			"wtb"
		]
	},
	"application/vnd.wfa.p2p": {
		"source": "iana"
	},
	"application/vnd.wfa.wsc": {
		"source": "iana"
	},
	"application/vnd.windows.devicepairing": {
		"source": "iana"
	},
	"application/vnd.wmc": {
		"source": "iana"
	},
	"application/vnd.wmf.bootstrap": {
		"source": "iana"
	},
	"application/vnd.wolfram.mathematica": {
		"source": "iana"
	},
	"application/vnd.wolfram.mathematica.package": {
		"source": "iana"
	},
	"application/vnd.wolfram.player": {
		"source": "iana",
		"extensions": [
			"nbp"
		]
	},
	"application/vnd.wordperfect": {
		"source": "iana",
		"extensions": [
			"wpd"
		]
	},
	"application/vnd.wqd": {
		"source": "iana",
		"extensions": [
			"wqd"
		]
	},
	"application/vnd.wrq-hp3000-labelled": {
		"source": "iana"
	},
	"application/vnd.wt.stf": {
		"source": "iana",
		"extensions": [
			"stf"
		]
	},
	"application/vnd.wv.csp+wbxml": {
		"source": "iana"
	},
	"application/vnd.wv.csp+xml": {
		"source": "iana"
	},
	"application/vnd.wv.ssp+xml": {
		"source": "iana"
	},
	"application/vnd.xacml+json": {
		"source": "iana",
		"compressible": true
	},
	"application/vnd.xara": {
		"source": "iana",
		"extensions": [
			"xar"
		]
	},
	"application/vnd.xfdl": {
		"source": "iana",
		"extensions": [
			"xfdl"
		]
	},
	"application/vnd.xfdl.webform": {
		"source": "iana"
	},
	"application/vnd.xmi+xml": {
		"source": "iana"
	},
	"application/vnd.xmpie.cpkg": {
		"source": "iana"
	},
	"application/vnd.xmpie.dpkg": {
		"source": "iana"
	},
	"application/vnd.xmpie.plan": {
		"source": "iana"
	},
	"application/vnd.xmpie.ppkg": {
		"source": "iana"
	},
	"application/vnd.xmpie.xlim": {
		"source": "iana"
	},
	"application/vnd.yamaha.hv-dic": {
		"source": "iana",
		"extensions": [
			"hvd"
		]
	},
	"application/vnd.yamaha.hv-script": {
		"source": "iana",
		"extensions": [
			"hvs"
		]
	},
	"application/vnd.yamaha.hv-voice": {
		"source": "iana",
		"extensions": [
			"hvp"
		]
	},
	"application/vnd.yamaha.openscoreformat": {
		"source": "iana",
		"extensions": [
			"osf"
		]
	},
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
		"source": "iana",
		"extensions": [
			"osfpvg"
		]
	},
	"application/vnd.yamaha.remote-setup": {
		"source": "iana"
	},
	"application/vnd.yamaha.smaf-audio": {
		"source": "iana",
		"extensions": [
			"saf"
		]
	},
	"application/vnd.yamaha.smaf-phrase": {
		"source": "iana",
		"extensions": [
			"spf"
		]
	},
	"application/vnd.yamaha.through-ngn": {
		"source": "iana"
	},
	"application/vnd.yamaha.tunnel-udpencap": {
		"source": "iana"
	},
	"application/vnd.yaoweme": {
		"source": "iana"
	},
	"application/vnd.yellowriver-custom-menu": {
		"source": "iana",
		"extensions": [
			"cmp"
		]
	},
	"application/vnd.zul": {
		"source": "iana",
		"extensions": [
			"zir",
			"zirz"
		]
	},
	"application/vnd.zzazz.deck+xml": {
		"source": "iana",
		"extensions": [
			"zaz"
		]
	},
	"application/voicexml+xml": {
		"source": "iana",
		"extensions": [
			"vxml"
		]
	},
	"application/vq-rtcpxr": {
		"source": "iana"
	},
	"application/watcherinfo+xml": {
		"source": "iana"
	},
	"application/whoispp-query": {
		"source": "iana"
	},
	"application/whoispp-response": {
		"source": "iana"
	},
	"application/widget": {
		"source": "iana",
		"extensions": [
			"wgt"
		]
	},
	"application/winhlp": {
		"source": "apache",
		"extensions": [
			"hlp"
		]
	},
	"application/wita": {
		"source": "iana"
	},
	"application/wordperfect5.1": {
		"source": "iana"
	},
	"application/wsdl+xml": {
		"source": "iana",
		"extensions": [
			"wsdl"
		]
	},
	"application/wspolicy+xml": {
		"source": "iana",
		"extensions": [
			"wspolicy"
		]
	},
	"application/x-7z-compressed": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"7z"
		]
	},
	"application/x-abiword": {
		"source": "apache",
		"extensions": [
			"abw"
		]
	},
	"application/x-ace-compressed": {
		"source": "apache",
		"extensions": [
			"ace"
		]
	},
	"application/x-amf": {
		"source": "apache"
	},
	"application/x-apple-diskimage": {
		"source": "apache",
		"extensions": [
			"dmg"
		]
	},
	"application/x-authorware-bin": {
		"source": "apache",
		"extensions": [
			"aab",
			"x32",
			"u32",
			"vox"
		]
	},
	"application/x-authorware-map": {
		"source": "apache",
		"extensions": [
			"aam"
		]
	},
	"application/x-authorware-seg": {
		"source": "apache",
		"extensions": [
			"aas"
		]
	},
	"application/x-bcpio": {
		"source": "apache",
		"extensions": [
			"bcpio"
		]
	},
	"application/x-bdoc": {
		"compressible": false,
		"extensions": [
			"bdoc"
		]
	},
	"application/x-bittorrent": {
		"source": "apache",
		"extensions": [
			"torrent"
		]
	},
	"application/x-blorb": {
		"source": "apache",
		"extensions": [
			"blb",
			"blorb"
		]
	},
	"application/x-bzip": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"bz"
		]
	},
	"application/x-bzip2": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"bz2",
			"boz"
		]
	},
	"application/x-cbr": {
		"source": "apache",
		"extensions": [
			"cbr",
			"cba",
			"cbt",
			"cbz",
			"cb7"
		]
	},
	"application/x-cdlink": {
		"source": "apache",
		"extensions": [
			"vcd"
		]
	},
	"application/x-cfs-compressed": {
		"source": "apache",
		"extensions": [
			"cfs"
		]
	},
	"application/x-chat": {
		"source": "apache",
		"extensions": [
			"chat"
		]
	},
	"application/x-chess-pgn": {
		"source": "apache",
		"extensions": [
			"pgn"
		]
	},
	"application/x-chrome-extension": {
		"extensions": [
			"crx"
		]
	},
	"application/x-cocoa": {
		"source": "nginx",
		"extensions": [
			"cco"
		]
	},
	"application/x-compress": {
		"source": "apache"
	},
	"application/x-conference": {
		"source": "apache",
		"extensions": [
			"nsc"
		]
	},
	"application/x-cpio": {
		"source": "apache",
		"extensions": [
			"cpio"
		]
	},
	"application/x-csh": {
		"source": "apache",
		"extensions": [
			"csh"
		]
	},
	"application/x-deb": {
		"compressible": false
	},
	"application/x-debian-package": {
		"source": "apache",
		"extensions": [
			"deb",
			"udeb"
		]
	},
	"application/x-dgc-compressed": {
		"source": "apache",
		"extensions": [
			"dgc"
		]
	},
	"application/x-director": {
		"source": "apache",
		"extensions": [
			"dir",
			"dcr",
			"dxr",
			"cst",
			"cct",
			"cxt",
			"w3d",
			"fgd",
			"swa"
		]
	},
	"application/x-doom": {
		"source": "apache",
		"extensions": [
			"wad"
		]
	},
	"application/x-dtbncx+xml": {
		"source": "apache",
		"extensions": [
			"ncx"
		]
	},
	"application/x-dtbook+xml": {
		"source": "apache",
		"extensions": [
			"dtb"
		]
	},
	"application/x-dtbresource+xml": {
		"source": "apache",
		"extensions": [
			"res"
		]
	},
	"application/x-dvi": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"dvi"
		]
	},
	"application/x-envoy": {
		"source": "apache",
		"extensions": [
			"evy"
		]
	},
	"application/x-eva": {
		"source": "apache",
		"extensions": [
			"eva"
		]
	},
	"application/x-font-bdf": {
		"source": "apache",
		"extensions": [
			"bdf"
		]
	},
	"application/x-font-dos": {
		"source": "apache"
	},
	"application/x-font-framemaker": {
		"source": "apache"
	},
	"application/x-font-ghostscript": {
		"source": "apache",
		"extensions": [
			"gsf"
		]
	},
	"application/x-font-libgrx": {
		"source": "apache"
	},
	"application/x-font-linux-psf": {
		"source": "apache",
		"extensions": [
			"psf"
		]
	},
	"application/x-font-otf": {
		"source": "apache",
		"compressible": true,
		"extensions": [
			"otf"
		]
	},
	"application/x-font-pcf": {
		"source": "apache",
		"extensions": [
			"pcf"
		]
	},
	"application/x-font-snf": {
		"source": "apache",
		"extensions": [
			"snf"
		]
	},
	"application/x-font-speedo": {
		"source": "apache"
	},
	"application/x-font-sunos-news": {
		"source": "apache"
	},
	"application/x-font-ttf": {
		"source": "apache",
		"compressible": true,
		"extensions": [
			"ttf",
			"ttc"
		]
	},
	"application/x-font-type1": {
		"source": "apache",
		"extensions": [
			"pfa",
			"pfb",
			"pfm",
			"afm"
		]
	},
	"application/x-font-vfont": {
		"source": "apache"
	},
	"application/x-freearc": {
		"source": "apache",
		"extensions": [
			"arc"
		]
	},
	"application/x-futuresplash": {
		"source": "apache",
		"extensions": [
			"spl"
		]
	},
	"application/x-gca-compressed": {
		"source": "apache",
		"extensions": [
			"gca"
		]
	},
	"application/x-glulx": {
		"source": "apache",
		"extensions": [
			"ulx"
		]
	},
	"application/x-gnumeric": {
		"source": "apache",
		"extensions": [
			"gnumeric"
		]
	},
	"application/x-gramps-xml": {
		"source": "apache",
		"extensions": [
			"gramps"
		]
	},
	"application/x-gtar": {
		"source": "apache",
		"extensions": [
			"gtar"
		]
	},
	"application/x-gzip": {
		"source": "apache"
	},
	"application/x-hdf": {
		"source": "apache",
		"extensions": [
			"hdf"
		]
	},
	"application/x-httpd-php": {
		"compressible": true,
		"extensions": [
			"php"
		]
	},
	"application/x-install-instructions": {
		"source": "apache",
		"extensions": [
			"install"
		]
	},
	"application/x-iso9660-image": {
		"source": "apache",
		"extensions": [
			"iso"
		]
	},
	"application/x-java-archive-diff": {
		"source": "nginx",
		"extensions": [
			"jardiff"
		]
	},
	"application/x-java-jnlp-file": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"jnlp"
		]
	},
	"application/x-javascript": {
		"compressible": true
	},
	"application/x-latex": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"latex"
		]
	},
	"application/x-lua-bytecode": {
		"extensions": [
			"luac"
		]
	},
	"application/x-lzh-compressed": {
		"source": "apache",
		"extensions": [
			"lzh",
			"lha"
		]
	},
	"application/x-makeself": {
		"source": "nginx",
		"extensions": [
			"run"
		]
	},
	"application/x-mie": {
		"source": "apache",
		"extensions": [
			"mie"
		]
	},
	"application/x-mobipocket-ebook": {
		"source": "apache",
		"extensions": [
			"prc",
			"mobi"
		]
	},
	"application/x-mpegurl": {
		"compressible": false
	},
	"application/x-ms-application": {
		"source": "apache",
		"extensions": [
			"application"
		]
	},
	"application/x-ms-shortcut": {
		"source": "apache",
		"extensions": [
			"lnk"
		]
	},
	"application/x-ms-wmd": {
		"source": "apache",
		"extensions": [
			"wmd"
		]
	},
	"application/x-ms-wmz": {
		"source": "apache",
		"extensions": [
			"wmz"
		]
	},
	"application/x-ms-xbap": {
		"source": "apache",
		"extensions": [
			"xbap"
		]
	},
	"application/x-msaccess": {
		"source": "apache",
		"extensions": [
			"mdb"
		]
	},
	"application/x-msbinder": {
		"source": "apache",
		"extensions": [
			"obd"
		]
	},
	"application/x-mscardfile": {
		"source": "apache",
		"extensions": [
			"crd"
		]
	},
	"application/x-msclip": {
		"source": "apache",
		"extensions": [
			"clp"
		]
	},
	"application/x-msdos-program": {
		"extensions": [
			"exe"
		]
	},
	"application/x-msdownload": {
		"source": "apache",
		"extensions": [
			"exe",
			"dll",
			"com",
			"bat",
			"msi"
		]
	},
	"application/x-msmediaview": {
		"source": "apache",
		"extensions": [
			"mvb",
			"m13",
			"m14"
		]
	},
	"application/x-msmetafile": {
		"source": "apache",
		"extensions": [
			"wmf",
			"wmz",
			"emf",
			"emz"
		]
	},
	"application/x-msmoney": {
		"source": "apache",
		"extensions": [
			"mny"
		]
	},
	"application/x-mspublisher": {
		"source": "apache",
		"extensions": [
			"pub"
		]
	},
	"application/x-msschedule": {
		"source": "apache",
		"extensions": [
			"scd"
		]
	},
	"application/x-msterminal": {
		"source": "apache",
		"extensions": [
			"trm"
		]
	},
	"application/x-mswrite": {
		"source": "apache",
		"extensions": [
			"wri"
		]
	},
	"application/x-netcdf": {
		"source": "apache",
		"extensions": [
			"nc",
			"cdf"
		]
	},
	"application/x-ns-proxy-autoconfig": {
		"compressible": true,
		"extensions": [
			"pac"
		]
	},
	"application/x-nzb": {
		"source": "apache",
		"extensions": [
			"nzb"
		]
	},
	"application/x-perl": {
		"source": "nginx",
		"extensions": [
			"pl",
			"pm"
		]
	},
	"application/x-pilot": {
		"source": "nginx",
		"extensions": [
			"prc",
			"pdb"
		]
	},
	"application/x-pkcs12": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"p12",
			"pfx"
		]
	},
	"application/x-pkcs7-certificates": {
		"source": "apache",
		"extensions": [
			"p7b",
			"spc"
		]
	},
	"application/x-pkcs7-certreqresp": {
		"source": "apache",
		"extensions": [
			"p7r"
		]
	},
	"application/x-rar-compressed": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"rar"
		]
	},
	"application/x-redhat-package-manager": {
		"source": "nginx",
		"extensions": [
			"rpm"
		]
	},
	"application/x-research-info-systems": {
		"source": "apache",
		"extensions": [
			"ris"
		]
	},
	"application/x-sea": {
		"source": "nginx",
		"extensions": [
			"sea"
		]
	},
	"application/x-sh": {
		"source": "apache",
		"compressible": true,
		"extensions": [
			"sh"
		]
	},
	"application/x-shar": {
		"source": "apache",
		"extensions": [
			"shar"
		]
	},
	"application/x-shockwave-flash": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"swf"
		]
	},
	"application/x-silverlight-app": {
		"source": "apache",
		"extensions": [
			"xap"
		]
	},
	"application/x-sql": {
		"source": "apache",
		"extensions": [
			"sql"
		]
	},
	"application/x-stuffit": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"sit"
		]
	},
	"application/x-stuffitx": {
		"source": "apache",
		"extensions": [
			"sitx"
		]
	},
	"application/x-subrip": {
		"source": "apache",
		"extensions": [
			"srt"
		]
	},
	"application/x-sv4cpio": {
		"source": "apache",
		"extensions": [
			"sv4cpio"
		]
	},
	"application/x-sv4crc": {
		"source": "apache",
		"extensions": [
			"sv4crc"
		]
	},
	"application/x-t3vm-image": {
		"source": "apache",
		"extensions": [
			"t3"
		]
	},
	"application/x-tads": {
		"source": "apache",
		"extensions": [
			"gam"
		]
	},
	"application/x-tar": {
		"source": "apache",
		"compressible": true,
		"extensions": [
			"tar"
		]
	},
	"application/x-tcl": {
		"source": "apache",
		"extensions": [
			"tcl",
			"tk"
		]
	},
	"application/x-tex": {
		"source": "apache",
		"extensions": [
			"tex"
		]
	},
	"application/x-tex-tfm": {
		"source": "apache",
		"extensions": [
			"tfm"
		]
	},
	"application/x-texinfo": {
		"source": "apache",
		"extensions": [
			"texinfo",
			"texi"
		]
	},
	"application/x-tgif": {
		"source": "apache",
		"extensions": [
			"obj"
		]
	},
	"application/x-ustar": {
		"source": "apache",
		"extensions": [
			"ustar"
		]
	},
	"application/x-wais-source": {
		"source": "apache",
		"extensions": [
			"src"
		]
	},
	"application/x-web-app-manifest+json": {
		"compressible": true,
		"extensions": [
			"webapp"
		]
	},
	"application/x-www-form-urlencoded": {
		"source": "iana",
		"compressible": true
	},
	"application/x-x509-ca-cert": {
		"source": "apache",
		"extensions": [
			"der",
			"crt",
			"pem"
		]
	},
	"application/x-xfig": {
		"source": "apache",
		"extensions": [
			"fig"
		]
	},
	"application/x-xliff+xml": {
		"source": "apache",
		"extensions": [
			"xlf"
		]
	},
	"application/x-xpinstall": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"xpi"
		]
	},
	"application/x-xz": {
		"source": "apache",
		"extensions": [
			"xz"
		]
	},
	"application/x-zmachine": {
		"source": "apache",
		"extensions": [
			"z1",
			"z2",
			"z3",
			"z4",
			"z5",
			"z6",
			"z7",
			"z8"
		]
	},
	"application/x400-bp": {
		"source": "iana"
	},
	"application/xacml+xml": {
		"source": "iana"
	},
	"application/xaml+xml": {
		"source": "apache",
		"extensions": [
			"xaml"
		]
	},
	"application/xcap-att+xml": {
		"source": "iana"
	},
	"application/xcap-caps+xml": {
		"source": "iana"
	},
	"application/xcap-diff+xml": {
		"source": "iana",
		"extensions": [
			"xdf"
		]
	},
	"application/xcap-el+xml": {
		"source": "iana"
	},
	"application/xcap-error+xml": {
		"source": "iana"
	},
	"application/xcap-ns+xml": {
		"source": "iana"
	},
	"application/xcon-conference-info+xml": {
		"source": "iana"
	},
	"application/xcon-conference-info-diff+xml": {
		"source": "iana"
	},
	"application/xenc+xml": {
		"source": "iana",
		"extensions": [
			"xenc"
		]
	},
	"application/xhtml+xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"xhtml",
			"xht"
		]
	},
	"application/xhtml-voice+xml": {
		"source": "apache"
	},
	"application/xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"xml",
			"xsl",
			"xsd",
			"rng"
		]
	},
	"application/xml-dtd": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"dtd"
		]
	},
	"application/xml-external-parsed-entity": {
		"source": "iana"
	},
	"application/xml-patch+xml": {
		"source": "iana"
	},
	"application/xmpp+xml": {
		"source": "iana"
	},
	"application/xop+xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"xop"
		]
	},
	"application/xproc+xml": {
		"source": "apache",
		"extensions": [
			"xpl"
		]
	},
	"application/xslt+xml": {
		"source": "iana",
		"extensions": [
			"xslt"
		]
	},
	"application/xspf+xml": {
		"source": "apache",
		"extensions": [
			"xspf"
		]
	},
	"application/xv+xml": {
		"source": "iana",
		"extensions": [
			"mxml",
			"xhvml",
			"xvml",
			"xvm"
		]
	},
	"application/yang": {
		"source": "iana",
		"extensions": [
			"yang"
		]
	},
	"application/yang-data+json": {
		"source": "iana",
		"compressible": true
	},
	"application/yang-data+xml": {
		"source": "iana"
	},
	"application/yang-patch+json": {
		"source": "iana",
		"compressible": true
	},
	"application/yang-patch+xml": {
		"source": "iana"
	},
	"application/yin+xml": {
		"source": "iana",
		"extensions": [
			"yin"
		]
	},
	"application/zip": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"zip"
		]
	},
	"application/zlib": {
		"source": "iana"
	},
	"audio/1d-interleaved-parityfec": {
		"source": "iana"
	},
	"audio/32kadpcm": {
		"source": "iana"
	},
	"audio/3gpp": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"3gpp"
		]
	},
	"audio/3gpp2": {
		"source": "iana"
	},
	"audio/ac3": {
		"source": "iana"
	},
	"audio/adpcm": {
		"source": "apache",
		"extensions": [
			"adp"
		]
	},
	"audio/amr": {
		"source": "iana"
	},
	"audio/amr-wb": {
		"source": "iana"
	},
	"audio/amr-wb+": {
		"source": "iana"
	},
	"audio/aptx": {
		"source": "iana"
	},
	"audio/asc": {
		"source": "iana"
	},
	"audio/atrac-advanced-lossless": {
		"source": "iana"
	},
	"audio/atrac-x": {
		"source": "iana"
	},
	"audio/atrac3": {
		"source": "iana"
	},
	"audio/basic": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"au",
			"snd"
		]
	},
	"audio/bv16": {
		"source": "iana"
	},
	"audio/bv32": {
		"source": "iana"
	},
	"audio/clearmode": {
		"source": "iana"
	},
	"audio/cn": {
		"source": "iana"
	},
	"audio/dat12": {
		"source": "iana"
	},
	"audio/dls": {
		"source": "iana"
	},
	"audio/dsr-es201108": {
		"source": "iana"
	},
	"audio/dsr-es202050": {
		"source": "iana"
	},
	"audio/dsr-es202211": {
		"source": "iana"
	},
	"audio/dsr-es202212": {
		"source": "iana"
	},
	"audio/dv": {
		"source": "iana"
	},
	"audio/dvi4": {
		"source": "iana"
	},
	"audio/eac3": {
		"source": "iana"
	},
	"audio/encaprtp": {
		"source": "iana"
	},
	"audio/evrc": {
		"source": "iana"
	},
	"audio/evrc-qcp": {
		"source": "iana"
	},
	"audio/evrc0": {
		"source": "iana"
	},
	"audio/evrc1": {
		"source": "iana"
	},
	"audio/evrcb": {
		"source": "iana"
	},
	"audio/evrcb0": {
		"source": "iana"
	},
	"audio/evrcb1": {
		"source": "iana"
	},
	"audio/evrcnw": {
		"source": "iana"
	},
	"audio/evrcnw0": {
		"source": "iana"
	},
	"audio/evrcnw1": {
		"source": "iana"
	},
	"audio/evrcwb": {
		"source": "iana"
	},
	"audio/evrcwb0": {
		"source": "iana"
	},
	"audio/evrcwb1": {
		"source": "iana"
	},
	"audio/evs": {
		"source": "iana"
	},
	"audio/fwdred": {
		"source": "iana"
	},
	"audio/g711-0": {
		"source": "iana"
	},
	"audio/g719": {
		"source": "iana"
	},
	"audio/g722": {
		"source": "iana"
	},
	"audio/g7221": {
		"source": "iana"
	},
	"audio/g723": {
		"source": "iana"
	},
	"audio/g726-16": {
		"source": "iana"
	},
	"audio/g726-24": {
		"source": "iana"
	},
	"audio/g726-32": {
		"source": "iana"
	},
	"audio/g726-40": {
		"source": "iana"
	},
	"audio/g728": {
		"source": "iana"
	},
	"audio/g729": {
		"source": "iana"
	},
	"audio/g7291": {
		"source": "iana"
	},
	"audio/g729d": {
		"source": "iana"
	},
	"audio/g729e": {
		"source": "iana"
	},
	"audio/gsm": {
		"source": "iana"
	},
	"audio/gsm-efr": {
		"source": "iana"
	},
	"audio/gsm-hr-08": {
		"source": "iana"
	},
	"audio/ilbc": {
		"source": "iana"
	},
	"audio/ip-mr_v2.5": {
		"source": "iana"
	},
	"audio/isac": {
		"source": "apache"
	},
	"audio/l16": {
		"source": "iana"
	},
	"audio/l20": {
		"source": "iana"
	},
	"audio/l24": {
		"source": "iana",
		"compressible": false
	},
	"audio/l8": {
		"source": "iana"
	},
	"audio/lpc": {
		"source": "iana"
	},
	"audio/melp": {
		"source": "iana"
	},
	"audio/melp1200": {
		"source": "iana"
	},
	"audio/melp2400": {
		"source": "iana"
	},
	"audio/melp600": {
		"source": "iana"
	},
	"audio/midi": {
		"source": "apache",
		"extensions": [
			"mid",
			"midi",
			"kar",
			"rmi"
		]
	},
	"audio/mobile-xmf": {
		"source": "iana"
	},
	"audio/mp3": {
		"compressible": false,
		"extensions": [
			"mp3"
		]
	},
	"audio/mp4": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"m4a",
			"mp4a"
		]
	},
	"audio/mp4a-latm": {
		"source": "iana"
	},
	"audio/mpa": {
		"source": "iana"
	},
	"audio/mpa-robust": {
		"source": "iana"
	},
	"audio/mpeg": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"mpga",
			"mp2",
			"mp2a",
			"mp3",
			"m2a",
			"m3a"
		]
	},
	"audio/mpeg4-generic": {
		"source": "iana"
	},
	"audio/musepack": {
		"source": "apache"
	},
	"audio/ogg": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"oga",
			"ogg",
			"spx"
		]
	},
	"audio/opus": {
		"source": "iana"
	},
	"audio/parityfec": {
		"source": "iana"
	},
	"audio/pcma": {
		"source": "iana"
	},
	"audio/pcma-wb": {
		"source": "iana"
	},
	"audio/pcmu": {
		"source": "iana"
	},
	"audio/pcmu-wb": {
		"source": "iana"
	},
	"audio/prs.sid": {
		"source": "iana"
	},
	"audio/qcelp": {
		"source": "iana"
	},
	"audio/raptorfec": {
		"source": "iana"
	},
	"audio/red": {
		"source": "iana"
	},
	"audio/rtp-enc-aescm128": {
		"source": "iana"
	},
	"audio/rtp-midi": {
		"source": "iana"
	},
	"audio/rtploopback": {
		"source": "iana"
	},
	"audio/rtx": {
		"source": "iana"
	},
	"audio/s3m": {
		"source": "apache",
		"extensions": [
			"s3m"
		]
	},
	"audio/silk": {
		"source": "apache",
		"extensions": [
			"sil"
		]
	},
	"audio/smv": {
		"source": "iana"
	},
	"audio/smv-qcp": {
		"source": "iana"
	},
	"audio/smv0": {
		"source": "iana"
	},
	"audio/sp-midi": {
		"source": "iana"
	},
	"audio/speex": {
		"source": "iana"
	},
	"audio/t140c": {
		"source": "iana"
	},
	"audio/t38": {
		"source": "iana"
	},
	"audio/telephone-event": {
		"source": "iana"
	},
	"audio/tone": {
		"source": "iana"
	},
	"audio/uemclip": {
		"source": "iana"
	},
	"audio/ulpfec": {
		"source": "iana"
	},
	"audio/vdvi": {
		"source": "iana"
	},
	"audio/vmr-wb": {
		"source": "iana"
	},
	"audio/vnd.3gpp.iufp": {
		"source": "iana"
	},
	"audio/vnd.4sb": {
		"source": "iana"
	},
	"audio/vnd.audiokoz": {
		"source": "iana"
	},
	"audio/vnd.celp": {
		"source": "iana"
	},
	"audio/vnd.cisco.nse": {
		"source": "iana"
	},
	"audio/vnd.cmles.radio-events": {
		"source": "iana"
	},
	"audio/vnd.cns.anp1": {
		"source": "iana"
	},
	"audio/vnd.cns.inf1": {
		"source": "iana"
	},
	"audio/vnd.dece.audio": {
		"source": "iana",
		"extensions": [
			"uva",
			"uvva"
		]
	},
	"audio/vnd.digital-winds": {
		"source": "iana",
		"extensions": [
			"eol"
		]
	},
	"audio/vnd.dlna.adts": {
		"source": "iana"
	},
	"audio/vnd.dolby.heaac.1": {
		"source": "iana"
	},
	"audio/vnd.dolby.heaac.2": {
		"source": "iana"
	},
	"audio/vnd.dolby.mlp": {
		"source": "iana"
	},
	"audio/vnd.dolby.mps": {
		"source": "iana"
	},
	"audio/vnd.dolby.pl2": {
		"source": "iana"
	},
	"audio/vnd.dolby.pl2x": {
		"source": "iana"
	},
	"audio/vnd.dolby.pl2z": {
		"source": "iana"
	},
	"audio/vnd.dolby.pulse.1": {
		"source": "iana"
	},
	"audio/vnd.dra": {
		"source": "iana",
		"extensions": [
			"dra"
		]
	},
	"audio/vnd.dts": {
		"source": "iana",
		"extensions": [
			"dts"
		]
	},
	"audio/vnd.dts.hd": {
		"source": "iana",
		"extensions": [
			"dtshd"
		]
	},
	"audio/vnd.dvb.file": {
		"source": "iana"
	},
	"audio/vnd.everad.plj": {
		"source": "iana"
	},
	"audio/vnd.hns.audio": {
		"source": "iana"
	},
	"audio/vnd.lucent.voice": {
		"source": "iana",
		"extensions": [
			"lvp"
		]
	},
	"audio/vnd.ms-playready.media.pya": {
		"source": "iana",
		"extensions": [
			"pya"
		]
	},
	"audio/vnd.nokia.mobile-xmf": {
		"source": "iana"
	},
	"audio/vnd.nortel.vbk": {
		"source": "iana"
	},
	"audio/vnd.nuera.ecelp4800": {
		"source": "iana",
		"extensions": [
			"ecelp4800"
		]
	},
	"audio/vnd.nuera.ecelp7470": {
		"source": "iana",
		"extensions": [
			"ecelp7470"
		]
	},
	"audio/vnd.nuera.ecelp9600": {
		"source": "iana",
		"extensions": [
			"ecelp9600"
		]
	},
	"audio/vnd.octel.sbc": {
		"source": "iana"
	},
	"audio/vnd.qcelp": {
		"source": "iana"
	},
	"audio/vnd.rhetorex.32kadpcm": {
		"source": "iana"
	},
	"audio/vnd.rip": {
		"source": "iana",
		"extensions": [
			"rip"
		]
	},
	"audio/vnd.rn-realaudio": {
		"compressible": false
	},
	"audio/vnd.sealedmedia.softseal.mpeg": {
		"source": "iana"
	},
	"audio/vnd.vmx.cvsd": {
		"source": "iana"
	},
	"audio/vnd.wave": {
		"compressible": false
	},
	"audio/vorbis": {
		"source": "iana",
		"compressible": false
	},
	"audio/vorbis-config": {
		"source": "iana"
	},
	"audio/wav": {
		"compressible": false,
		"extensions": [
			"wav"
		]
	},
	"audio/wave": {
		"compressible": false,
		"extensions": [
			"wav"
		]
	},
	"audio/webm": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"weba"
		]
	},
	"audio/x-aac": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"aac"
		]
	},
	"audio/x-aiff": {
		"source": "apache",
		"extensions": [
			"aif",
			"aiff",
			"aifc"
		]
	},
	"audio/x-caf": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"caf"
		]
	},
	"audio/x-flac": {
		"source": "apache",
		"extensions": [
			"flac"
		]
	},
	"audio/x-m4a": {
		"source": "nginx",
		"extensions": [
			"m4a"
		]
	},
	"audio/x-matroska": {
		"source": "apache",
		"extensions": [
			"mka"
		]
	},
	"audio/x-mpegurl": {
		"source": "apache",
		"extensions": [
			"m3u"
		]
	},
	"audio/x-ms-wax": {
		"source": "apache",
		"extensions": [
			"wax"
		]
	},
	"audio/x-ms-wma": {
		"source": "apache",
		"extensions": [
			"wma"
		]
	},
	"audio/x-pn-realaudio": {
		"source": "apache",
		"extensions": [
			"ram",
			"ra"
		]
	},
	"audio/x-pn-realaudio-plugin": {
		"source": "apache",
		"extensions": [
			"rmp"
		]
	},
	"audio/x-realaudio": {
		"source": "nginx",
		"extensions": [
			"ra"
		]
	},
	"audio/x-tta": {
		"source": "apache"
	},
	"audio/x-wav": {
		"source": "apache",
		"extensions": [
			"wav"
		]
	},
	"audio/xm": {
		"source": "apache",
		"extensions": [
			"xm"
		]
	},
	"chemical/x-cdx": {
		"source": "apache",
		"extensions": [
			"cdx"
		]
	},
	"chemical/x-cif": {
		"source": "apache",
		"extensions": [
			"cif"
		]
	},
	"chemical/x-cmdf": {
		"source": "apache",
		"extensions": [
			"cmdf"
		]
	},
	"chemical/x-cml": {
		"source": "apache",
		"extensions": [
			"cml"
		]
	},
	"chemical/x-csml": {
		"source": "apache",
		"extensions": [
			"csml"
		]
	},
	"chemical/x-pdb": {
		"source": "apache"
	},
	"chemical/x-xyz": {
		"source": "apache",
		"extensions": [
			"xyz"
		]
	},
	"font/opentype": {
		"compressible": true,
		"extensions": [
			"otf"
		]
	},
	"image/apng": {
		"compressible": false,
		"extensions": [
			"apng"
		]
	},
	"image/bmp": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"bmp"
		]
	},
	"image/cgm": {
		"source": "iana",
		"extensions": [
			"cgm"
		]
	},
	"image/dicom-rle": {
		"source": "iana"
	},
	"image/emf": {
		"source": "iana"
	},
	"image/fits": {
		"source": "iana"
	},
	"image/g3fax": {
		"source": "iana",
		"extensions": [
			"g3"
		]
	},
	"image/gif": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"gif"
		]
	},
	"image/ief": {
		"source": "iana",
		"extensions": [
			"ief"
		]
	},
	"image/jls": {
		"source": "iana"
	},
	"image/jp2": {
		"source": "iana"
	},
	"image/jpeg": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"jpeg",
			"jpg",
			"jpe"
		]
	},
	"image/jpm": {
		"source": "iana"
	},
	"image/jpx": {
		"source": "iana"
	},
	"image/ktx": {
		"source": "iana",
		"extensions": [
			"ktx"
		]
	},
	"image/naplps": {
		"source": "iana"
	},
	"image/pjpeg": {
		"compressible": false
	},
	"image/png": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"png"
		]
	},
	"image/prs.btif": {
		"source": "iana",
		"extensions": [
			"btif"
		]
	},
	"image/prs.pti": {
		"source": "iana"
	},
	"image/pwg-raster": {
		"source": "iana"
	},
	"image/sgi": {
		"source": "apache",
		"extensions": [
			"sgi"
		]
	},
	"image/svg+xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"svg",
			"svgz"
		]
	},
	"image/t38": {
		"source": "iana"
	},
	"image/tiff": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"tiff",
			"tif"
		]
	},
	"image/tiff-fx": {
		"source": "iana"
	},
	"image/vnd.adobe.photoshop": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"psd"
		]
	},
	"image/vnd.airzip.accelerator.azv": {
		"source": "iana"
	},
	"image/vnd.cns.inf2": {
		"source": "iana"
	},
	"image/vnd.dece.graphic": {
		"source": "iana",
		"extensions": [
			"uvi",
			"uvvi",
			"uvg",
			"uvvg"
		]
	},
	"image/vnd.djvu": {
		"source": "iana",
		"extensions": [
			"djvu",
			"djv"
		]
	},
	"image/vnd.dvb.subtitle": {
		"source": "iana",
		"extensions": [
			"sub"
		]
	},
	"image/vnd.dwg": {
		"source": "iana",
		"extensions": [
			"dwg"
		]
	},
	"image/vnd.dxf": {
		"source": "iana",
		"extensions": [
			"dxf"
		]
	},
	"image/vnd.fastbidsheet": {
		"source": "iana",
		"extensions": [
			"fbs"
		]
	},
	"image/vnd.fpx": {
		"source": "iana",
		"extensions": [
			"fpx"
		]
	},
	"image/vnd.fst": {
		"source": "iana",
		"extensions": [
			"fst"
		]
	},
	"image/vnd.fujixerox.edmics-mmr": {
		"source": "iana",
		"extensions": [
			"mmr"
		]
	},
	"image/vnd.fujixerox.edmics-rlc": {
		"source": "iana",
		"extensions": [
			"rlc"
		]
	},
	"image/vnd.globalgraphics.pgb": {
		"source": "iana"
	},
	"image/vnd.microsoft.icon": {
		"source": "iana"
	},
	"image/vnd.mix": {
		"source": "iana"
	},
	"image/vnd.mozilla.apng": {
		"source": "iana"
	},
	"image/vnd.ms-modi": {
		"source": "iana",
		"extensions": [
			"mdi"
		]
	},
	"image/vnd.ms-photo": {
		"source": "apache",
		"extensions": [
			"wdp"
		]
	},
	"image/vnd.net-fpx": {
		"source": "iana",
		"extensions": [
			"npx"
		]
	},
	"image/vnd.radiance": {
		"source": "iana"
	},
	"image/vnd.sealed.png": {
		"source": "iana"
	},
	"image/vnd.sealedmedia.softseal.gif": {
		"source": "iana"
	},
	"image/vnd.sealedmedia.softseal.jpg": {
		"source": "iana"
	},
	"image/vnd.svf": {
		"source": "iana"
	},
	"image/vnd.tencent.tap": {
		"source": "iana"
	},
	"image/vnd.valve.source.texture": {
		"source": "iana"
	},
	"image/vnd.wap.wbmp": {
		"source": "iana",
		"extensions": [
			"wbmp"
		]
	},
	"image/vnd.xiff": {
		"source": "iana",
		"extensions": [
			"xif"
		]
	},
	"image/vnd.zbrush.pcx": {
		"source": "iana"
	},
	"image/webp": {
		"source": "apache",
		"extensions": [
			"webp"
		]
	},
	"image/wmf": {
		"source": "iana"
	},
	"image/x-3ds": {
		"source": "apache",
		"extensions": [
			"3ds"
		]
	},
	"image/x-cmu-raster": {
		"source": "apache",
		"extensions": [
			"ras"
		]
	},
	"image/x-cmx": {
		"source": "apache",
		"extensions": [
			"cmx"
		]
	},
	"image/x-freehand": {
		"source": "apache",
		"extensions": [
			"fh",
			"fhc",
			"fh4",
			"fh5",
			"fh7"
		]
	},
	"image/x-icon": {
		"source": "apache",
		"compressible": true,
		"extensions": [
			"ico"
		]
	},
	"image/x-jng": {
		"source": "nginx",
		"extensions": [
			"jng"
		]
	},
	"image/x-mrsid-image": {
		"source": "apache",
		"extensions": [
			"sid"
		]
	},
	"image/x-ms-bmp": {
		"source": "nginx",
		"compressible": true,
		"extensions": [
			"bmp"
		]
	},
	"image/x-pcx": {
		"source": "apache",
		"extensions": [
			"pcx"
		]
	},
	"image/x-pict": {
		"source": "apache",
		"extensions": [
			"pic",
			"pct"
		]
	},
	"image/x-portable-anymap": {
		"source": "apache",
		"extensions": [
			"pnm"
		]
	},
	"image/x-portable-bitmap": {
		"source": "apache",
		"extensions": [
			"pbm"
		]
	},
	"image/x-portable-graymap": {
		"source": "apache",
		"extensions": [
			"pgm"
		]
	},
	"image/x-portable-pixmap": {
		"source": "apache",
		"extensions": [
			"ppm"
		]
	},
	"image/x-rgb": {
		"source": "apache",
		"extensions": [
			"rgb"
		]
	},
	"image/x-tga": {
		"source": "apache",
		"extensions": [
			"tga"
		]
	},
	"image/x-xbitmap": {
		"source": "apache",
		"extensions": [
			"xbm"
		]
	},
	"image/x-xcf": {
		"compressible": false
	},
	"image/x-xpixmap": {
		"source": "apache",
		"extensions": [
			"xpm"
		]
	},
	"image/x-xwindowdump": {
		"source": "apache",
		"extensions": [
			"xwd"
		]
	},
	"message/cpim": {
		"source": "iana"
	},
	"message/delivery-status": {
		"source": "iana"
	},
	"message/disposition-notification": {
		"source": "iana"
	},
	"message/external-body": {
		"source": "iana"
	},
	"message/feedback-report": {
		"source": "iana"
	},
	"message/global": {
		"source": "iana"
	},
	"message/global-delivery-status": {
		"source": "iana"
	},
	"message/global-disposition-notification": {
		"source": "iana"
	},
	"message/global-headers": {
		"source": "iana"
	},
	"message/http": {
		"source": "iana",
		"compressible": false
	},
	"message/imdn+xml": {
		"source": "iana",
		"compressible": true
	},
	"message/news": {
		"source": "iana"
	},
	"message/partial": {
		"source": "iana",
		"compressible": false
	},
	"message/rfc822": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"eml",
			"mime"
		]
	},
	"message/s-http": {
		"source": "iana"
	},
	"message/sip": {
		"source": "iana"
	},
	"message/sipfrag": {
		"source": "iana"
	},
	"message/tracking-status": {
		"source": "iana"
	},
	"message/vnd.si.simp": {
		"source": "iana"
	},
	"message/vnd.wfa.wsc": {
		"source": "iana"
	},
	"model/gltf+json": {
		"source": "iana",
		"compressible": true
	},
	"model/iges": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"igs",
			"iges"
		]
	},
	"model/mesh": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"msh",
			"mesh",
			"silo"
		]
	},
	"model/vnd.collada+xml": {
		"source": "iana",
		"extensions": [
			"dae"
		]
	},
	"model/vnd.dwf": {
		"source": "iana",
		"extensions": [
			"dwf"
		]
	},
	"model/vnd.flatland.3dml": {
		"source": "iana"
	},
	"model/vnd.gdl": {
		"source": "iana",
		"extensions": [
			"gdl"
		]
	},
	"model/vnd.gs-gdl": {
		"source": "apache"
	},
	"model/vnd.gs.gdl": {
		"source": "iana"
	},
	"model/vnd.gtw": {
		"source": "iana",
		"extensions": [
			"gtw"
		]
	},
	"model/vnd.moml+xml": {
		"source": "iana"
	},
	"model/vnd.mts": {
		"source": "iana",
		"extensions": [
			"mts"
		]
	},
	"model/vnd.opengex": {
		"source": "iana"
	},
	"model/vnd.parasolid.transmit.binary": {
		"source": "iana"
	},
	"model/vnd.parasolid.transmit.text": {
		"source": "iana"
	},
	"model/vnd.rosette.annotated-data-model": {
		"source": "iana"
	},
	"model/vnd.valve.source.compiled-map": {
		"source": "iana"
	},
	"model/vnd.vtu": {
		"source": "iana",
		"extensions": [
			"vtu"
		]
	},
	"model/vrml": {
		"source": "iana",
		"compressible": false,
		"extensions": [
			"wrl",
			"vrml"
		]
	},
	"model/x3d+binary": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"x3db",
			"x3dbz"
		]
	},
	"model/x3d+fastinfoset": {
		"source": "iana"
	},
	"model/x3d+vrml": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"x3dv",
			"x3dvz"
		]
	},
	"model/x3d+xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"x3d",
			"x3dz"
		]
	},
	"model/x3d-vrml": {
		"source": "iana"
	},
	"multipart/alternative": {
		"source": "iana",
		"compressible": false
	},
	"multipart/appledouble": {
		"source": "iana"
	},
	"multipart/byteranges": {
		"source": "iana"
	},
	"multipart/digest": {
		"source": "iana"
	},
	"multipart/encrypted": {
		"source": "iana",
		"compressible": false
	},
	"multipart/form-data": {
		"source": "iana",
		"compressible": false
	},
	"multipart/header-set": {
		"source": "iana"
	},
	"multipart/mixed": {
		"source": "iana",
		"compressible": false
	},
	"multipart/parallel": {
		"source": "iana"
	},
	"multipart/related": {
		"source": "iana",
		"compressible": false
	},
	"multipart/report": {
		"source": "iana"
	},
	"multipart/signed": {
		"source": "iana",
		"compressible": false
	},
	"multipart/voice-message": {
		"source": "iana"
	},
	"multipart/x-mixed-replace": {
		"source": "iana"
	},
	"text/1d-interleaved-parityfec": {
		"source": "iana"
	},
	"text/cache-manifest": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"appcache",
			"manifest"
		]
	},
	"text/calendar": {
		"source": "iana",
		"extensions": [
			"ics",
			"ifb"
		]
	},
	"text/calender": {
		"compressible": true
	},
	"text/cmd": {
		"compressible": true
	},
	"text/coffeescript": {
		"extensions": [
			"coffee",
			"litcoffee"
		]
	},
	"text/css": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"css"
		]
	},
	"text/csv": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"csv"
		]
	},
	"text/csv-schema": {
		"source": "iana"
	},
	"text/directory": {
		"source": "iana"
	},
	"text/dns": {
		"source": "iana"
	},
	"text/ecmascript": {
		"source": "iana"
	},
	"text/encaprtp": {
		"source": "iana"
	},
	"text/enriched": {
		"source": "iana"
	},
	"text/fwdred": {
		"source": "iana"
	},
	"text/grammar-ref-list": {
		"source": "iana"
	},
	"text/hjson": {
		"extensions": [
			"hjson"
		]
	},
	"text/html": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"html",
			"htm",
			"shtml"
		]
	},
	"text/jade": {
		"extensions": [
			"jade"
		]
	},
	"text/javascript": {
		"source": "iana",
		"compressible": true
	},
	"text/jcr-cnd": {
		"source": "iana"
	},
	"text/jsx": {
		"compressible": true,
		"extensions": [
			"jsx"
		]
	},
	"text/less": {
		"extensions": [
			"less"
		]
	},
	"text/markdown": {
		"source": "iana"
	},
	"text/mathml": {
		"source": "nginx",
		"extensions": [
			"mml"
		]
	},
	"text/mizar": {
		"source": "iana"
	},
	"text/n3": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"n3"
		]
	},
	"text/parameters": {
		"source": "iana"
	},
	"text/parityfec": {
		"source": "iana"
	},
	"text/plain": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"txt",
			"text",
			"conf",
			"def",
			"list",
			"log",
			"in",
			"ini"
		]
	},
	"text/provenance-notation": {
		"source": "iana"
	},
	"text/prs.fallenstein.rst": {
		"source": "iana"
	},
	"text/prs.lines.tag": {
		"source": "iana",
		"extensions": [
			"dsc"
		]
	},
	"text/prs.prop.logic": {
		"source": "iana"
	},
	"text/raptorfec": {
		"source": "iana"
	},
	"text/red": {
		"source": "iana"
	},
	"text/rfc822-headers": {
		"source": "iana"
	},
	"text/richtext": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"rtx"
		]
	},
	"text/rtf": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"rtf"
		]
	},
	"text/rtp-enc-aescm128": {
		"source": "iana"
	},
	"text/rtploopback": {
		"source": "iana"
	},
	"text/rtx": {
		"source": "iana"
	},
	"text/sgml": {
		"source": "iana",
		"extensions": [
			"sgml",
			"sgm"
		]
	},
	"text/slim": {
		"extensions": [
			"slim",
			"slm"
		]
	},
	"text/stylus": {
		"extensions": [
			"stylus",
			"styl"
		]
	},
	"text/t140": {
		"source": "iana"
	},
	"text/tab-separated-values": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"tsv"
		]
	},
	"text/troff": {
		"source": "iana",
		"extensions": [
			"t",
			"tr",
			"roff",
			"man",
			"me",
			"ms"
		]
	},
	"text/turtle": {
		"source": "iana",
		"extensions": [
			"ttl"
		]
	},
	"text/ulpfec": {
		"source": "iana"
	},
	"text/uri-list": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"uri",
			"uris",
			"urls"
		]
	},
	"text/vcard": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"vcard"
		]
	},
	"text/vnd.a": {
		"source": "iana"
	},
	"text/vnd.abc": {
		"source": "iana"
	},
	"text/vnd.ascii-art": {
		"source": "iana"
	},
	"text/vnd.curl": {
		"source": "iana",
		"extensions": [
			"curl"
		]
	},
	"text/vnd.curl.dcurl": {
		"source": "apache",
		"extensions": [
			"dcurl"
		]
	},
	"text/vnd.curl.mcurl": {
		"source": "apache",
		"extensions": [
			"mcurl"
		]
	},
	"text/vnd.curl.scurl": {
		"source": "apache",
		"extensions": [
			"scurl"
		]
	},
	"text/vnd.debian.copyright": {
		"source": "iana"
	},
	"text/vnd.dmclientscript": {
		"source": "iana"
	},
	"text/vnd.dvb.subtitle": {
		"source": "iana",
		"extensions": [
			"sub"
		]
	},
	"text/vnd.esmertec.theme-descriptor": {
		"source": "iana"
	},
	"text/vnd.fly": {
		"source": "iana",
		"extensions": [
			"fly"
		]
	},
	"text/vnd.fmi.flexstor": {
		"source": "iana",
		"extensions": [
			"flx"
		]
	},
	"text/vnd.graphviz": {
		"source": "iana",
		"extensions": [
			"gv"
		]
	},
	"text/vnd.in3d.3dml": {
		"source": "iana",
		"extensions": [
			"3dml"
		]
	},
	"text/vnd.in3d.spot": {
		"source": "iana",
		"extensions": [
			"spot"
		]
	},
	"text/vnd.iptc.newsml": {
		"source": "iana"
	},
	"text/vnd.iptc.nitf": {
		"source": "iana"
	},
	"text/vnd.latex-z": {
		"source": "iana"
	},
	"text/vnd.motorola.reflex": {
		"source": "iana"
	},
	"text/vnd.ms-mediapackage": {
		"source": "iana"
	},
	"text/vnd.net2phone.commcenter.command": {
		"source": "iana"
	},
	"text/vnd.radisys.msml-basic-layout": {
		"source": "iana"
	},
	"text/vnd.si.uricatalogue": {
		"source": "iana"
	},
	"text/vnd.sun.j2me.app-descriptor": {
		"source": "iana",
		"extensions": [
			"jad"
		]
	},
	"text/vnd.trolltech.linguist": {
		"source": "iana"
	},
	"text/vnd.wap.si": {
		"source": "iana"
	},
	"text/vnd.wap.sl": {
		"source": "iana"
	},
	"text/vnd.wap.wml": {
		"source": "iana",
		"extensions": [
			"wml"
		]
	},
	"text/vnd.wap.wmlscript": {
		"source": "iana",
		"extensions": [
			"wmls"
		]
	},
	"text/vtt": {
		"charset": "UTF-8",
		"compressible": true,
		"extensions": [
			"vtt"
		]
	},
	"text/x-asm": {
		"source": "apache",
		"extensions": [
			"s",
			"asm"
		]
	},
	"text/x-c": {
		"source": "apache",
		"extensions": [
			"c",
			"cc",
			"cxx",
			"cpp",
			"h",
			"hh",
			"dic"
		]
	},
	"text/x-component": {
		"source": "nginx",
		"extensions": [
			"htc"
		]
	},
	"text/x-fortran": {
		"source": "apache",
		"extensions": [
			"f",
			"for",
			"f77",
			"f90"
		]
	},
	"text/x-gwt-rpc": {
		"compressible": true
	},
	"text/x-handlebars-template": {
		"extensions": [
			"hbs"
		]
	},
	"text/x-java-source": {
		"source": "apache",
		"extensions": [
			"java"
		]
	},
	"text/x-jquery-tmpl": {
		"compressible": true
	},
	"text/x-lua": {
		"extensions": [
			"lua"
		]
	},
	"text/x-markdown": {
		"compressible": true,
		"extensions": [
			"markdown",
			"md",
			"mkd"
		]
	},
	"text/x-nfo": {
		"source": "apache",
		"extensions": [
			"nfo"
		]
	},
	"text/x-opml": {
		"source": "apache",
		"extensions": [
			"opml"
		]
	},
	"text/x-pascal": {
		"source": "apache",
		"extensions": [
			"p",
			"pas"
		]
	},
	"text/x-processing": {
		"compressible": true,
		"extensions": [
			"pde"
		]
	},
	"text/x-sass": {
		"extensions": [
			"sass"
		]
	},
	"text/x-scss": {
		"extensions": [
			"scss"
		]
	},
	"text/x-setext": {
		"source": "apache",
		"extensions": [
			"etx"
		]
	},
	"text/x-sfv": {
		"source": "apache",
		"extensions": [
			"sfv"
		]
	},
	"text/x-suse-ymp": {
		"compressible": true,
		"extensions": [
			"ymp"
		]
	},
	"text/x-uuencode": {
		"source": "apache",
		"extensions": [
			"uu"
		]
	},
	"text/x-vcalendar": {
		"source": "apache",
		"extensions": [
			"vcs"
		]
	},
	"text/x-vcard": {
		"source": "apache",
		"extensions": [
			"vcf"
		]
	},
	"text/xml": {
		"source": "iana",
		"compressible": true,
		"extensions": [
			"xml"
		]
	},
	"text/xml-external-parsed-entity": {
		"source": "iana"
	},
	"text/yaml": {
		"extensions": [
			"yaml",
			"yml"
		]
	},
	"video/1d-interleaved-parityfec": {
		"source": "apache"
	},
	"video/3gpp": {
		"source": "apache",
		"extensions": [
			"3gp",
			"3gpp"
		]
	},
	"video/3gpp-tt": {
		"source": "apache"
	},
	"video/3gpp2": {
		"source": "apache",
		"extensions": [
			"3g2"
		]
	},
	"video/bmpeg": {
		"source": "apache"
	},
	"video/bt656": {
		"source": "apache"
	},
	"video/celb": {
		"source": "apache"
	},
	"video/dv": {
		"source": "apache"
	},
	"video/encaprtp": {
		"source": "apache"
	},
	"video/h261": {
		"source": "apache",
		"extensions": [
			"h261"
		]
	},
	"video/h263": {
		"source": "apache",
		"extensions": [
			"h263"
		]
	},
	"video/h263-1998": {
		"source": "apache"
	},
	"video/h263-2000": {
		"source": "apache"
	},
	"video/h264": {
		"source": "apache",
		"extensions": [
			"h264"
		]
	},
	"video/h264-rcdo": {
		"source": "apache"
	},
	"video/h264-svc": {
		"source": "apache"
	},
	"video/h265": {
		"source": "apache"
	},
	"video/iso.segment": {
		"source": "apache"
	},
	"video/jpeg": {
		"source": "apache",
		"extensions": [
			"jpgv"
		]
	},
	"video/jpeg2000": {
		"source": "apache"
	},
	"video/jpm": {
		"source": "apache",
		"extensions": [
			"jpm",
			"jpgm"
		]
	},
	"video/mj2": {
		"source": "apache",
		"extensions": [
			"mj2",
			"mjp2"
		]
	},
	"video/mp1s": {
		"source": "apache"
	},
	"video/mp2p": {
		"source": "apache"
	},
	"video/mp2t": {
		"source": "apache",
		"extensions": [
			"ts"
		]
	},
	"video/mp4": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"mp4",
			"mp4v",
			"mpg4"
		]
	},
	"video/mp4v-es": {
		"source": "apache"
	},
	"video/mpeg": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"mpeg",
			"mpg",
			"mpe",
			"m1v",
			"m2v"
		]
	},
	"video/mpeg4-generic": {
		"source": "apache"
	},
	"video/mpv": {
		"source": "apache"
	},
	"video/nv": {
		"source": "apache"
	},
	"video/ogg": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"ogv"
		]
	},
	"video/parityfec": {
		"source": "apache"
	},
	"video/pointer": {
		"source": "apache"
	},
	"video/quicktime": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"qt",
			"mov"
		]
	},
	"video/raptorfec": {
		"source": "apache"
	},
	"video/raw": {
		"source": "apache"
	},
	"video/rtp-enc-aescm128": {
		"source": "apache"
	},
	"video/rtploopback": {
		"source": "apache"
	},
	"video/rtx": {
		"source": "apache"
	},
	"video/smpte292m": {
		"source": "apache"
	},
	"video/ulpfec": {
		"source": "apache"
	},
	"video/vc1": {
		"source": "apache"
	},
	"video/vnd.cctv": {
		"source": "apache"
	},
	"video/vnd.dece.hd": {
		"source": "apache",
		"extensions": [
			"uvh",
			"uvvh"
		]
	},
	"video/vnd.dece.mobile": {
		"source": "apache",
		"extensions": [
			"uvm",
			"uvvm"
		]
	},
	"video/vnd.dece.mp4": {
		"source": "apache"
	},
	"video/vnd.dece.pd": {
		"source": "apache",
		"extensions": [
			"uvp",
			"uvvp"
		]
	},
	"video/vnd.dece.sd": {
		"source": "apache",
		"extensions": [
			"uvs",
			"uvvs"
		]
	},
	"video/vnd.dece.video": {
		"source": "apache",
		"extensions": [
			"uvv",
			"uvvv"
		]
	},
	"video/vnd.directv.mpeg": {
		"source": "apache"
	},
	"video/vnd.directv.mpeg-tts": {
		"source": "apache"
	},
	"video/vnd.dlna.mpeg-tts": {
		"source": "apache"
	},
	"video/vnd.dvb.file": {
		"source": "apache",
		"extensions": [
			"dvb"
		]
	},
	"video/vnd.fvt": {
		"source": "apache",
		"extensions": [
			"fvt"
		]
	},
	"video/vnd.hns.video": {
		"source": "apache"
	},
	"video/vnd.iptvforum.1dparityfec-1010": {
		"source": "apache"
	},
	"video/vnd.iptvforum.1dparityfec-2005": {
		"source": "apache"
	},
	"video/vnd.iptvforum.2dparityfec-1010": {
		"source": "apache"
	},
	"video/vnd.iptvforum.2dparityfec-2005": {
		"source": "apache"
	},
	"video/vnd.iptvforum.ttsavc": {
		"source": "apache"
	},
	"video/vnd.iptvforum.ttsmpeg2": {
		"source": "apache"
	},
	"video/vnd.motorola.video": {
		"source": "apache"
	},
	"video/vnd.motorola.videop": {
		"source": "apache"
	},
	"video/vnd.mpegurl": {
		"source": "apache",
		"extensions": [
			"mxu",
			"m4u"
		]
	},
	"video/vnd.ms-playready.media.pyv": {
		"source": "apache",
		"extensions": [
			"pyv"
		]
	},
	"video/vnd.nokia.interleaved-multimedia": {
		"source": "apache"
	},
	"video/vnd.nokia.videovoip": {
		"source": "apache"
	},
	"video/vnd.objectvideo": {
		"source": "apache"
	},
	"video/vnd.radgamettools.bink": {
		"source": "apache"
	},
	"video/vnd.radgamettools.smacker": {
		"source": "apache"
	},
	"video/vnd.sealed.mpeg1": {
		"source": "apache"
	},
	"video/vnd.sealed.mpeg4": {
		"source": "apache"
	},
	"video/vnd.sealed.swf": {
		"source": "apache"
	},
	"video/vnd.sealedmedia.softseal.mov": {
		"source": "apache"
	},
	"video/vnd.uvvu.mp4": {
		"source": "apache",
		"extensions": [
			"uvu",
			"uvvu"
		]
	},
	"video/vnd.vivo": {
		"source": "apache",
		"extensions": [
			"viv"
		]
	},
	"video/vp8": {
		"source": "apache"
	},
	"video/webm": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"webm"
		]
	},
	"video/x-f4v": {
		"source": "apache",
		"extensions": [
			"f4v"
		]
	},
	"video/x-fli": {
		"source": "apache",
		"extensions": [
			"fli"
		]
	},
	"video/x-flv": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"flv"
		]
	},
	"video/x-m4v": {
		"source": "apache",
		"extensions": [
			"m4v"
		]
	},
	"video/x-matroska": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"mkv",
			"mk3d",
			"mks"
		]
	},
	"video/x-mng": {
		"source": "apache",
		"extensions": [
			"mng"
		]
	},
	"video/x-ms-asf": {
		"source": "apache",
		"extensions": [
			"asf",
			"asx"
		]
	},
	"video/x-ms-vob": {
		"source": "apache",
		"extensions": [
			"vob"
		]
	},
	"video/x-ms-wm": {
		"source": "apache",
		"extensions": [
			"wm"
		]
	},
	"video/x-ms-wmv": {
		"source": "apache",
		"compressible": false,
		"extensions": [
			"wmv"
		]
	},
	"video/x-ms-wmx": {
		"source": "apache",
		"extensions": [
			"wmx"
		]
	},
	"video/x-ms-wvx": {
		"source": "apache",
		"extensions": [
			"wvx"
		]
	},
	"video/x-msvideo": {
		"source": "apache",
		"extensions": [
			"avi"
		]
	},
	"video/x-sgi-movie": {
		"source": "apache",
		"extensions": [
			"movie"
		]
	},
	"video/x-smv": {
		"source": "apache",
		"extensions": [
			"smv"
		]
	},
	"x-conference/x-cooltalk": {
		"source": "apache",
		"extensions": [
			"ice"
		]
	},
	"x-shader/x-fragment": {
		"compressible": true
	},
	"x-shader/x-vertex": {
		"compressible": true
	}
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(121)


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(122)
var extname = __webpack_require__(33).extname

/**
 * Module variables.
 * @private
 */

var extractTypeRegExp = /^\s*([^;\s]*)(?:;|\s|$)/
var textTypeRegExp = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = extractTypeRegExp.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && textTypeRegExp.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = extractTypeRegExp.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchError", function() { return FetchError; });
// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
// (MIT licensed)

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

/**
 * body.js
 *
 * Body interface provides common methods for Request and Response
 */

const Stream = __webpack_require__(12);

var _require = __webpack_require__(12);

const PassThrough = _require.PassThrough;


let convert;
try {
	convert = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"encoding\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (typeof body === 'string') {
		// body is string
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
	} else if (body instanceof Blob) {
		// body is blob
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is array buffer
	} else if (body instanceof Stream) {
		// body is stream
	} else {
		// none of the above
		// coerce to string
		body = String(body);
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			_this[INTERNALS].error = new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}

};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	// body is null
	if (this.body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is string
	if (typeof this.body === 'string') {
		return Body.Promise.resolve(Buffer.from(this.body));
	}

	// body is blob
	if (this.body instanceof Blob) {
		return Body.Promise.resolve(this.body[BUFFER]);
	}

	// body is buffer
	if (Buffer.isBuffer(this.body)) {
		return Body.Promise.resolve(this.body);
	}

	// body is buffer
	if (Object.prototype.toString.call(this.body) === '[object ArrayBuffer]') {
		return Body.Promise.resolve(Buffer.from(this.body));
	}

	// istanbul ignore if: should never happen
	if (!(this.body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream error, such as incorrect content-encoding
		_this4.body.on('error', function (err) {
			reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
		});

		_this4.body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		_this4.body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Response or Request instance
 */
function extractContentType(instance) {
	const body = instance.body;

	// istanbul ignore if: Currently, because of a guard in Request, body
	// can never be null. Included here for completeness.

	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (body instanceof Blob) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is array buffer
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else {
		// body is stream
		// can't really do much about this
		return null;
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;

	// istanbul ignore if: included for completion

	if (body === null) {
		// body is null
		return 0;
	} else if (typeof body === 'string') {
		// body is string
		return Buffer.byteLength(body);
	} else if (isURLSearchParams(body)) {
		// body is URLSearchParams
		return Buffer.byteLength(String(body));
	} else if (body instanceof Blob) {
		// body is blob
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is array buffer
		return body.byteLength;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		// can't really do much about this
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (typeof body === 'string') {
		// body is string
		dest.write(body);
		dest.end();
	} else if (isURLSearchParams(body)) {
		// body is URLSearchParams
		dest.write(Buffer.from(String(body)));
		dest.end();
	} else if (body instanceof Blob) {
		// body is blob
		dest.write(body[BUFFER]);
		dest.end();
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is array buffer
		dest.write(Buffer.from(body));
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name)) {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) {
			// no op
		} else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

/**
 * response.js
 *
 * Response class provides content decoding
 */

var _require$1 = __webpack_require__(32);

const STATUS_CODES = _require$1.STATUS_CODES;


const INTERNALS$1 = Symbol('Response internals');

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers: new Headers(opts.headers)
		};
	}

	get url() {
		return this[INTERNALS$1].url;
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * request.js
 *
 * Request class contains server only options
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */

var _require$2 = __webpack_require__(34);

const format_url = _require$2.format;
const parse_url = _require$2.parse;


const INTERNALS$2 = Symbol('Request internals');

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (init.body != null) {
			const contentType = extractContentType(this);
			if (contentType !== null && !headers.has('Content-Type')) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}
	if (!headers.has('Connection') && !request.agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent: request.agent
	});
}

/**
 * index.js
 *
 * a request API compatible with window.fetch
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */

const http = __webpack_require__(32);
const https = __webpack_require__(60);

var _require$3 = __webpack_require__(12);

const PassThrough$1 = _require$3.PassThrough;

var _require2 = __webpack_require__(34);

const resolve_url = _require2.resolve;

const zlib = __webpack_require__(128);

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;

		// send request
		const req = send(options);
		let reqTimeout;

		function finalize() {
			req.abort();
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							headers.set('Location', locationURL);
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			let body = res.pipe(new PassThrough$1());
			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				resolve(new Response(body, response_options));
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				resolve(new Response(body, response_options));
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					resolve(new Response(body, response_options));
				});
				return;
			}

			// otherwise, use response as-is
			resolve(new Response(body, response_options));
		});

		writeToStream(req, request);
	});
}

/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// Needed for TypeScript.
fetch.default = fetch;

// expose Promise
fetch.Promise = global.Promise;

/* harmony default export */ __webpack_exports__["default"] = (fetch);



/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.18.12
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if (typeof module === 'object' && module.exports) {
    // Node
    module.exports = factory(__webpack_require__(58), __webpack_require__(56), __webpack_require__(57));
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(58), __webpack_require__(56), __webpack_require__(57)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals (root is window)
    root.URI = factory(root.punycode, root.IPv6, root.SecondLevelDomains, root);
  }
}(this, function (punycode, IPv6, SLD, root) {
  'use strict';
  /*global location, escape, unescape */
  // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
  /*jshint camelcase: false */

  // save current URI variable, if any
  var _URI = root && root.URI;

  function URI(url, base) {
    var _urlSupplied = arguments.length >= 1;
    var _baseSupplied = arguments.length >= 2;

    // Allow instantiation without the 'new' keyword
    if (!(this instanceof URI)) {
      if (_urlSupplied) {
        if (_baseSupplied) {
          return new URI(url, base);
        }

        return new URI(url);
      }

      return new URI();
    }

    if (url === undefined) {
      if (_urlSupplied) {
        throw new TypeError('undefined is not a valid argument for URI');
      }

      if (typeof location !== 'undefined') {
        url = location.href + '';
      } else {
        url = '';
      }
    }

    if (url === null) {
      if (_urlSupplied) {
        throw new TypeError('null is not a valid argument for URI');
      }
    }

    this.href(url);

    // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
    if (base !== undefined) {
      return this.absoluteTo(base);
    }

    return this;
  }

  function isInteger(value) {
    return /^[0-9]+$/.test(value);
  }

  URI.version = '1.18.12';

  var p = URI.prototype;
  var hasOwn = Object.prototype.hasOwnProperty;

  function escapeRegEx(string) {
    // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
    return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }

  function getType(value) {
    // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
    if (value === undefined) {
      return 'Undefined';
    }

    return String(Object.prototype.toString.call(value)).slice(8, -1);
  }

  function isArray(obj) {
    return getType(obj) === 'Array';
  }

  function filterArrayValues(data, value) {
    var lookup = {};
    var i, length;

    if (getType(value) === 'RegExp') {
      lookup = null;
    } else if (isArray(value)) {
      for (i = 0, length = value.length; i < length; i++) {
        lookup[value[i]] = true;
      }
    } else {
      lookup[value] = true;
    }

    for (i = 0, length = data.length; i < length; i++) {
      /*jshint laxbreak: true */
      var _match = lookup && lookup[data[i]] !== undefined
        || !lookup && value.test(data[i]);
      /*jshint laxbreak: false */
      if (_match) {
        data.splice(i, 1);
        length--;
        i--;
      }
    }

    return data;
  }

  function arrayContains(list, value) {
    var i, length;

    // value may be string, number, array, regexp
    if (isArray(value)) {
      // Note: this can be optimized to O(n) (instead of current O(m * n))
      for (i = 0, length = value.length; i < length; i++) {
        if (!arrayContains(list, value[i])) {
          return false;
        }
      }

      return true;
    }

    var _type = getType(value);
    for (i = 0, length = list.length; i < length; i++) {
      if (_type === 'RegExp') {
        if (typeof list[i] === 'string' && list[i].match(value)) {
          return true;
        }
      } else if (list[i] === value) {
        return true;
      }
    }

    return false;
  }

  function arraysEqual(one, two) {
    if (!isArray(one) || !isArray(two)) {
      return false;
    }

    // arrays can't be equal if they have different amount of content
    if (one.length !== two.length) {
      return false;
    }

    one.sort();
    two.sort();

    for (var i = 0, l = one.length; i < l; i++) {
      if (one[i] !== two[i]) {
        return false;
      }
    }

    return true;
  }

  function trimSlashes(text) {
    var trim_expression = /^\/+|\/+$/g;
    return text.replace(trim_expression, '');
  }

  URI._parts = function() {
    return {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      urn: null,
      port: null,
      path: null,
      query: null,
      fragment: null,
      // state
      duplicateQueryParameters: URI.duplicateQueryParameters,
      escapeQuerySpace: URI.escapeQuerySpace
    };
  };
  // state: allow duplicate query parameters (a=1&a=1)
  URI.duplicateQueryParameters = false;
  // state: replaces + with %20 (space in query strings)
  URI.escapeQuerySpace = true;
  // static properties
  URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
  URI.idn_expression = /[^a-z0-9\._-]/i;
  URI.punycode_expression = /(xn--)/i;
  // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
  URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  // credits to Rich Brown
  // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
  // specification: http://www.ietf.org/rfc/rfc4291.txt
  URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  // expression used is "gruber revised" (@gruber v2) determined to be the
  // best solution in a regex-golf we did a couple of ages ago at
  // * http://mathiasbynens.be/demo/url-regex
  // * http://rodneyrehm.de/t/url-regex.html
  URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
  URI.findUri = {
    // valid "scheme://" or "www."
    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
    // everything up to the next whitespace
    end: /[\s\r\n]|$/,
    // trim trailing punctuation captured by end RegExp
    trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
    // balanced parens inclusion (), [], {}, <>
    parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g,
  };
  // http://www.iana.org/assignments/uri-schemes.html
  // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
  URI.defaultPorts = {
    http: '80',
    https: '443',
    ftp: '21',
    gopher: '70',
    ws: '80',
    wss: '443'
  };
  // list of protocols which always require a hostname
  URI.hostProtocols = [
    'http',
    'https'
  ];

  // allowed hostname characters according to RFC 3986
  // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
  // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . - _
  URI.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/;
  // map DOM Elements to their URI attribute
  URI.domAttributes = {
    'a': 'href',
    'blockquote': 'cite',
    'link': 'href',
    'base': 'href',
    'script': 'src',
    'form': 'action',
    'img': 'src',
    'area': 'href',
    'iframe': 'src',
    'embed': 'src',
    'source': 'src',
    'track': 'src',
    'input': 'src', // but only if type="image"
    'audio': 'src',
    'video': 'src'
  };
  URI.getDomAttribute = function(node) {
    if (!node || !node.nodeName) {
      return undefined;
    }

    var nodeName = node.nodeName.toLowerCase();
    // <input> should only expose src for type="image"
    if (nodeName === 'input' && node.type !== 'image') {
      return undefined;
    }

    return URI.domAttributes[nodeName];
  };

  function escapeForDumbFirefox36(value) {
    // https://github.com/medialize/URI.js/issues/91
    return escape(value);
  }

  // encoding / decoding according to RFC3986
  function strictEncodeURIComponent(string) {
    // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
    return encodeURIComponent(string)
      .replace(/[!'()*]/g, escapeForDumbFirefox36)
      .replace(/\*/g, '%2A');
  }
  URI.encode = strictEncodeURIComponent;
  URI.decode = decodeURIComponent;
  URI.iso8859 = function() {
    URI.encode = escape;
    URI.decode = unescape;
  };
  URI.unicode = function() {
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
  };
  URI.characters = {
    pathname: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
        map: {
          // -._~!'()*
          '%24': '$',
          '%26': '&',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%3A': ':',
          '%40': '@'
        }
      },
      decode: {
        expression: /[\/\?#]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23'
        }
      }
    },
    reserved: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
        map: {
          // gen-delims
          '%3A': ':',
          '%2F': '/',
          '%3F': '?',
          '%23': '#',
          '%5B': '[',
          '%5D': ']',
          '%40': '@',
          // sub-delims
          '%21': '!',
          '%24': '$',
          '%26': '&',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '='
        }
      }
    },
    urnpath: {
      // The characters under `encode` are the characters called out by RFC 2141 as being acceptable
      // for usage in a URN. RFC2141 also calls out "-", ".", and "_" as acceptable characters, but
      // these aren't encoded by encodeURIComponent, so we don't have to call them out here. Also
      // note that the colon character is not featured in the encoding map; this is because URI.js
      // gives the colons in URNs semantic meaning as the delimiters of path segements, and so it
      // should not appear unencoded in a segment itself.
      // See also the note above about RFC3986 and capitalalized hex digits.
      encode: {
        expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,
        map: {
          '%21': '!',
          '%24': '$',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%40': '@'
        }
      },
      // These characters are the characters called out by RFC2141 as "reserved" characters that
      // should never appear in a URN, plus the colon character (see note above).
      decode: {
        expression: /[\/\?#:]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23',
          ':': '%3A'
        }
      }
    }
  };
  URI.encodeQuery = function(string, escapeQuerySpace) {
    var escaped = URI.encode(string + '');
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
  };
  URI.decodeQuery = function(string, escapeQuerySpace) {
    string += '';
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    try {
      return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
    } catch(e) {
      // we're not going to mess with weird encodings,
      // give up and return the undecoded original string
      // see https://github.com/medialize/URI.js/issues/87
      // see https://github.com/medialize/URI.js/issues/92
      return string;
    }
  };
  // generate encode/decode path functions
  var _parts = {'encode':'encode', 'decode':'decode'};
  var _part;
  var generateAccessor = function(_group, _part) {
    return function(string) {
      try {
        return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function(c) {
          return URI.characters[_group][_part].map[c];
        });
      } catch (e) {
        // we're not going to mess with weird encodings,
        // give up and return the undecoded original string
        // see https://github.com/medialize/URI.js/issues/87
        // see https://github.com/medialize/URI.js/issues/92
        return string;
      }
    };
  };

  for (_part in _parts) {
    URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
    URI[_part + 'UrnPathSegment'] = generateAccessor('urnpath', _parts[_part]);
  }

  var generateSegmentedPathFunction = function(_sep, _codingFuncName, _innerCodingFuncName) {
    return function(string) {
      // Why pass in names of functions, rather than the function objects themselves? The
      // definitions of some functions (but in particular, URI.decode) will occasionally change due
      // to URI.js having ISO8859 and Unicode modes. Passing in the name and getting it will ensure
      // that the functions we use here are "fresh".
      var actualCodingFunc;
      if (!_innerCodingFuncName) {
        actualCodingFunc = URI[_codingFuncName];
      } else {
        actualCodingFunc = function(string) {
          return URI[_codingFuncName](URI[_innerCodingFuncName](string));
        };
      }

      var segments = (string + '').split(_sep);

      for (var i = 0, length = segments.length; i < length; i++) {
        segments[i] = actualCodingFunc(segments[i]);
      }

      return segments.join(_sep);
    };
  };

  // This takes place outside the above loop because we don't want, e.g., encodeUrnPath functions.
  URI.decodePath = generateSegmentedPathFunction('/', 'decodePathSegment');
  URI.decodeUrnPath = generateSegmentedPathFunction(':', 'decodeUrnPathSegment');
  URI.recodePath = generateSegmentedPathFunction('/', 'encodePathSegment', 'decode');
  URI.recodeUrnPath = generateSegmentedPathFunction(':', 'encodeUrnPathSegment', 'decode');

  URI.encodeReserved = generateAccessor('reserved', 'encode');

  URI.parse = function(string, parts) {
    var pos;
    if (!parts) {
      parts = {};
    }
    // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]

    // extract fragment
    pos = string.indexOf('#');
    if (pos > -1) {
      // escaping?
      parts.fragment = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract query
    pos = string.indexOf('?');
    if (pos > -1) {
      // escaping?
      parts.query = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract protocol
    if (string.substring(0, 2) === '//') {
      // relative-scheme
      parts.protocol = null;
      string = string.substring(2);
      // extract "user:pass@host:port"
      string = URI.parseAuthority(string, parts);
    } else {
      pos = string.indexOf(':');
      if (pos > -1) {
        parts.protocol = string.substring(0, pos) || null;
        if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
          // : may be within the path
          parts.protocol = undefined;
        } else if (string.substring(pos + 1, pos + 3) === '//') {
          string = string.substring(pos + 3);

          // extract "user:pass@host:port"
          string = URI.parseAuthority(string, parts);
        } else {
          string = string.substring(pos + 1);
          parts.urn = true;
        }
      }
    }

    // what's left must be the path
    parts.path = string;

    // and we're done
    return parts;
  };
  URI.parseHost = function(string, parts) {
    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://github.com/joyent/node/blob/386fd24f49b0e9d1a8a076592a404168faeecc34/lib/url.js#L115-L124
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    // https://github.com/medialize/URI.js/pull/233
    string = string.replace(/\\/g, '/');

    // extract host:port
    var pos = string.indexOf('/');
    var bracketPos;
    var t;

    if (pos === -1) {
      pos = string.length;
    }

    if (string.charAt(0) === '[') {
      // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
      // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
      // IPv6+port in the format [2001:db8::1]:80 (for the time being)
      bracketPos = string.indexOf(']');
      parts.hostname = string.substring(1, bracketPos) || null;
      parts.port = string.substring(bracketPos + 2, pos) || null;
      if (parts.port === '/') {
        parts.port = null;
      }
    } else {
      var firstColon = string.indexOf(':');
      var firstSlash = string.indexOf('/');
      var nextColon = string.indexOf(':', firstColon + 1);
      if (nextColon !== -1 && (firstSlash === -1 || nextColon < firstSlash)) {
        // IPv6 host contains multiple colons - but no port
        // this notation is actually not allowed by RFC 3986, but we're a liberal parser
        parts.hostname = string.substring(0, pos) || null;
        parts.port = null;
      } else {
        t = string.substring(0, pos).split(':');
        parts.hostname = t[0] || null;
        parts.port = t[1] || null;
      }
    }

    if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
      pos++;
      string = '/' + string;
    }

    URI.ensureValidHostname(parts.hostname, parts.protocol);

    if (parts.port) {
      URI.ensureValidPort(parts.port);
    }

    return string.substring(pos) || '/';
  };
  URI.parseAuthority = function(string, parts) {
    string = URI.parseUserinfo(string, parts);
    return URI.parseHost(string, parts);
  };
  URI.parseUserinfo = function(string, parts) {
    // extract username:password
    var firstSlash = string.indexOf('/');
    var pos = string.lastIndexOf('@', firstSlash > -1 ? firstSlash : string.length - 1);
    var t;

    // authority@ must come before /path
    if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
      t = string.substring(0, pos).split(':');
      parts.username = t[0] ? URI.decode(t[0]) : null;
      t.shift();
      parts.password = t[0] ? URI.decode(t.join(':')) : null;
      string = string.substring(pos + 1);
    } else {
      parts.username = null;
      parts.password = null;
    }

    return string;
  };
  URI.parseQuery = function(string, escapeQuerySpace) {
    if (!string) {
      return {};
    }

    // throw out the funky business - "?"[name"="value"&"]+
    string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

    if (!string) {
      return {};
    }

    var items = {};
    var splits = string.split('&');
    var length = splits.length;
    var v, name, value;

    for (var i = 0; i < length; i++) {
      v = splits[i].split('=');
      name = URI.decodeQuery(v.shift(), escapeQuerySpace);
      // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
      value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;

      if (hasOwn.call(items, name)) {
        if (typeof items[name] === 'string' || items[name] === null) {
          items[name] = [items[name]];
        }

        items[name].push(value);
      } else {
        items[name] = value;
      }
    }

    return items;
  };

  URI.build = function(parts) {
    var t = '';

    if (parts.protocol) {
      t += parts.protocol + ':';
    }

    if (!parts.urn && (t || parts.hostname)) {
      t += '//';
    }

    t += (URI.buildAuthority(parts) || '');

    if (typeof parts.path === 'string') {
      if (parts.path.charAt(0) !== '/' && typeof parts.hostname === 'string') {
        t += '/';
      }

      t += parts.path;
    }

    if (typeof parts.query === 'string' && parts.query) {
      t += '?' + parts.query;
    }

    if (typeof parts.fragment === 'string' && parts.fragment) {
      t += '#' + parts.fragment;
    }
    return t;
  };
  URI.buildHost = function(parts) {
    var t = '';

    if (!parts.hostname) {
      return '';
    } else if (URI.ip6_expression.test(parts.hostname)) {
      t += '[' + parts.hostname + ']';
    } else {
      t += parts.hostname;
    }

    if (parts.port) {
      t += ':' + parts.port;
    }

    return t;
  };
  URI.buildAuthority = function(parts) {
    return URI.buildUserinfo(parts) + URI.buildHost(parts);
  };
  URI.buildUserinfo = function(parts) {
    var t = '';

    if (parts.username) {
      t += URI.encode(parts.username);
    }

    if (parts.password) {
      t += ':' + URI.encode(parts.password);
    }

    if (t) {
      t += '@';
    }

    return t;
  };
  URI.buildQuery = function(data, duplicateQueryParameters, escapeQuerySpace) {
    // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
    // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
    // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
    // URI.js treats the query string as being application/x-www-form-urlencoded
    // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type

    var t = '';
    var unique, key, i, length;
    for (key in data) {
      if (hasOwn.call(data, key) && key) {
        if (isArray(data[key])) {
          unique = {};
          for (i = 0, length = data[key].length; i < length; i++) {
            if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
              t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
              if (duplicateQueryParameters !== true) {
                unique[data[key][i] + ''] = true;
              }
            }
          }
        } else if (data[key] !== undefined) {
          t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
        }
      }
    }

    return t.substring(1);
  };
  URI.buildQueryParameter = function(name, value, escapeQuerySpace) {
    // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
    // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
    return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
  };

  URI.addQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.addQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (data[name] === undefined) {
        data[name] = value;
        return;
      } else if (typeof data[name] === 'string') {
        data[name] = [data[name]];
      }

      if (!isArray(value)) {
        value = [value];
      }

      data[name] = (data[name] || []).concat(value);
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }
  };
  URI.removeQuery = function(data, name, value) {
    var i, length, key;

    if (isArray(name)) {
      for (i = 0, length = name.length; i < length; i++) {
        data[name[i]] = undefined;
      }
    } else if (getType(name) === 'RegExp') {
      for (key in data) {
        if (name.test(key)) {
          data[key] = undefined;
        }
      }
    } else if (typeof name === 'object') {
      for (key in name) {
        if (hasOwn.call(name, key)) {
          URI.removeQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (value !== undefined) {
        if (getType(value) === 'RegExp') {
          if (!isArray(data[name]) && value.test(data[name])) {
            data[name] = undefined;
          } else {
            data[name] = filterArrayValues(data[name], value);
          }
        } else if (data[name] === String(value) && (!isArray(value) || value.length === 1)) {
          data[name] = undefined;
        } else if (isArray(data[name])) {
          data[name] = filterArrayValues(data[name], value);
        }
      } else {
        data[name] = undefined;
      }
    } else {
      throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
    }
  };
  URI.hasQuery = function(data, name, value, withinArray) {
    switch (getType(name)) {
      case 'String':
        // Nothing to do here
        break;

      case 'RegExp':
        for (var key in data) {
          if (hasOwn.call(data, key)) {
            if (name.test(key) && (value === undefined || URI.hasQuery(data, key, value))) {
              return true;
            }
          }
        }

        return false;

      case 'Object':
        for (var _key in name) {
          if (hasOwn.call(name, _key)) {
            if (!URI.hasQuery(data, _key, name[_key])) {
              return false;
            }
          }
        }

        return true;

      default:
        throw new TypeError('URI.hasQuery() accepts a string, regular expression or object as the name parameter');
    }

    switch (getType(value)) {
      case 'Undefined':
        // true if exists (but may be empty)
        return name in data; // data[name] !== undefined;

      case 'Boolean':
        // true if exists and non-empty
        var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
        return value === _booly;

      case 'Function':
        // allow complex comparison
        return !!value(data[name], name, data);

      case 'Array':
        if (!isArray(data[name])) {
          return false;
        }

        var op = withinArray ? arrayContains : arraysEqual;
        return op(data[name], value);

      case 'RegExp':
        if (!isArray(data[name])) {
          return Boolean(data[name] && data[name].match(value));
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      case 'Number':
        value = String(value);
        /* falls through */
      case 'String':
        if (!isArray(data[name])) {
          return data[name] === value;
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      default:
        throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
    }
  };


  URI.joinPaths = function() {
    var input = [];
    var segments = [];
    var nonEmptySegments = 0;

    for (var i = 0; i < arguments.length; i++) {
      var url = new URI(arguments[i]);
      input.push(url);
      var _segments = url.segment();
      for (var s = 0; s < _segments.length; s++) {
        if (typeof _segments[s] === 'string') {
          segments.push(_segments[s]);
        }

        if (_segments[s]) {
          nonEmptySegments++;
        }
      }
    }

    if (!segments.length || !nonEmptySegments) {
      return new URI('');
    }

    var uri = new URI('').segment(segments);

    if (input[0].path() === '' || input[0].path().slice(0, 1) === '/') {
      uri.path('/' + uri.path());
    }

    return uri.normalize();
  };

  URI.commonPath = function(one, two) {
    var length = Math.min(one.length, two.length);
    var pos;

    // find first non-matching character
    for (pos = 0; pos < length; pos++) {
      if (one.charAt(pos) !== two.charAt(pos)) {
        pos--;
        break;
      }
    }

    if (pos < 1) {
      return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
    }

    // revert to last /
    if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
      pos = one.substring(0, pos).lastIndexOf('/');
    }

    return one.substring(0, pos + 1);
  };

  URI.withinString = function(string, callback, options) {
    options || (options = {});
    var _start = options.start || URI.findUri.start;
    var _end = options.end || URI.findUri.end;
    var _trim = options.trim || URI.findUri.trim;
    var _parens = options.parens || URI.findUri.parens;
    var _attributeOpen = /[a-z0-9-]=["']?$/i;

    _start.lastIndex = 0;
    while (true) {
      var match = _start.exec(string);
      if (!match) {
        break;
      }

      var start = match.index;
      if (options.ignoreHtml) {
        // attribut(e=["']?$)
        var attributeOpen = string.slice(Math.max(start - 3, 0), start);
        if (attributeOpen && _attributeOpen.test(attributeOpen)) {
          continue;
        }
      }

      var end = start + string.slice(start).search(_end);
      var slice = string.slice(start, end);
      // make sure we include well balanced parens
      var parensEnd = -1;
      while (true) {
        var parensMatch = _parens.exec(slice);
        if (!parensMatch) {
          break;
        }

        var parensMatchEnd = parensMatch.index + parensMatch[0].length;
        parensEnd = Math.max(parensEnd, parensMatchEnd);
      }

      if (parensEnd > -1) {
        slice = slice.slice(0, parensEnd) + slice.slice(parensEnd).replace(_trim, '');
      } else {
        slice = slice.replace(_trim, '');
      }

      if (slice.length <= match[0].length) {
        // the extract only contains the starting marker of a URI,
        // e.g. "www" or "http://"
        continue;
      }

      if (options.ignore && options.ignore.test(slice)) {
        continue;
      }

      end = start + slice.length;
      var result = callback(slice, start, end, string);
      if (result === undefined) {
        _start.lastIndex = end;
        continue;
      }

      result = String(result);
      string = string.slice(0, start) + result + string.slice(end);
      _start.lastIndex = start + result.length;
    }

    _start.lastIndex = 0;
    return string;
  };

  URI.ensureValidHostname = function(v, protocol) {
    // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
    // they are not part of DNS and therefore ignored by URI.js

    var hasHostname = !!v; // not null and not an empty string
    var hasProtocol = !!protocol;
    var rejectEmptyHostname = false;

    if (hasProtocol) {
      rejectEmptyHostname = arrayContains(URI.hostProtocols, protocol);
    }

    if (rejectEmptyHostname && !hasHostname) {
      throw new TypeError('Hostname cannot be empty, if protocol is ' + protocol);
    } else if (v && v.match(URI.invalid_hostname_characters)) {
      // test punycode
      if (!punycode) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
      }
      if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_]');
      }
    }
  };

  URI.ensureValidPort = function (v) {
    if (!v) {
      return;
    }

    var port = Number(v);
    if (isInteger(port) && (port > 0) && (port < 65536)) {
      return;
    }

    throw new TypeError('Port "' + v + '" is not a valid port');
  };

  // noConflict
  URI.noConflict = function(removeAll) {
    if (removeAll) {
      var unconflicted = {
        URI: this.noConflict()
      };

      if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
        unconflicted.URITemplate = root.URITemplate.noConflict();
      }

      if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
        unconflicted.IPv6 = root.IPv6.noConflict();
      }

      if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
        unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
      }

      return unconflicted;
    } else if (root.URI === this) {
      root.URI = _URI;
    }

    return this;
  };

  p.build = function(deferBuild) {
    if (deferBuild === true) {
      this._deferred_build = true;
    } else if (deferBuild === undefined || this._deferred_build) {
      this._string = URI.build(this._parts);
      this._deferred_build = false;
    }

    return this;
  };

  p.clone = function() {
    return new URI(this);
  };

  p.valueOf = p.toString = function() {
    return this.build(false)._string;
  };


  function generateSimpleAccessor(_part){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        this._parts[_part] = v || null;
        this.build(!build);
        return this;
      }
    };
  }

  function generatePrefixAccessor(_part, _key){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        if (v !== null) {
          v = v + '';
          if (v.charAt(0) === _key) {
            v = v.substring(1);
          }
        }

        this._parts[_part] = v;
        this.build(!build);
        return this;
      }
    };
  }

  p.protocol = generateSimpleAccessor('protocol');
  p.username = generateSimpleAccessor('username');
  p.password = generateSimpleAccessor('password');
  p.hostname = generateSimpleAccessor('hostname');
  p.port = generateSimpleAccessor('port');
  p.query = generatePrefixAccessor('query', '?');
  p.fragment = generatePrefixAccessor('fragment', '#');

  p.search = function(v, build) {
    var t = this.query(v, build);
    return typeof t === 'string' && t.length ? ('?' + t) : t;
  };
  p.hash = function(v, build) {
    var t = this.fragment(v, build);
    return typeof t === 'string' && t.length ? ('#' + t) : t;
  };

  p.pathname = function(v, build) {
    if (v === undefined || v === true) {
      var res = this._parts.path || (this._parts.hostname ? '/' : '');
      return v ? (this._parts.urn ? URI.decodeUrnPath : URI.decodePath)(res) : res;
    } else {
      if (this._parts.urn) {
        this._parts.path = v ? URI.recodeUrnPath(v) : '';
      } else {
        this._parts.path = v ? URI.recodePath(v) : '/';
      }
      this.build(!build);
      return this;
    }
  };
  p.path = p.pathname;
  p.href = function(href, build) {
    var key;

    if (href === undefined) {
      return this.toString();
    }

    this._string = '';
    this._parts = URI._parts();

    var _URI = href instanceof URI;
    var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
    if (href.nodeName) {
      var attribute = URI.getDomAttribute(href);
      href = href[attribute] || '';
      _object = false;
    }

    // window.location is reported to be an object, but it's not the sort
    // of object we're looking for:
    // * location.protocol ends with a colon
    // * location.query != object.search
    // * location.hash != object.fragment
    // simply serializing the unknown object should do the trick
    // (for location, not for everything...)
    if (!_URI && _object && href.pathname !== undefined) {
      href = href.toString();
    }

    if (typeof href === 'string' || href instanceof String) {
      this._parts = URI.parse(String(href), this._parts);
    } else if (_URI || _object) {
      var src = _URI ? href._parts : href;
      for (key in src) {
        if (hasOwn.call(this._parts, key)) {
          this._parts[key] = src[key];
        }
      }
    } else {
      throw new TypeError('invalid input');
    }

    this.build(!build);
    return this;
  };

  // identification accessors
  p.is = function(what) {
    var ip = false;
    var ip4 = false;
    var ip6 = false;
    var name = false;
    var sld = false;
    var idn = false;
    var punycode = false;
    var relative = !this._parts.urn;

    if (this._parts.hostname) {
      relative = false;
      ip4 = URI.ip4_expression.test(this._parts.hostname);
      ip6 = URI.ip6_expression.test(this._parts.hostname);
      ip = ip4 || ip6;
      name = !ip;
      sld = name && SLD && SLD.has(this._parts.hostname);
      idn = name && URI.idn_expression.test(this._parts.hostname);
      punycode = name && URI.punycode_expression.test(this._parts.hostname);
    }

    switch (what.toLowerCase()) {
      case 'relative':
        return relative;

      case 'absolute':
        return !relative;

      // hostname identification
      case 'domain':
      case 'name':
        return name;

      case 'sld':
        return sld;

      case 'ip':
        return ip;

      case 'ip4':
      case 'ipv4':
      case 'inet4':
        return ip4;

      case 'ip6':
      case 'ipv6':
      case 'inet6':
        return ip6;

      case 'idn':
        return idn;

      case 'url':
        return !this._parts.urn;

      case 'urn':
        return !!this._parts.urn;

      case 'punycode':
        return punycode;
    }

    return null;
  };

  // component specific input validation
  var _protocol = p.protocol;
  var _port = p.port;
  var _hostname = p.hostname;

  p.protocol = function(v, build) {
    if (v !== undefined) {
      if (v) {
        // accept trailing ://
        v = v.replace(/:(\/\/)?$/, '');

        if (!v.match(URI.protocol_expression)) {
          throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
        }
      }
    }
    return _protocol.call(this, v, build);
  };
  p.scheme = p.protocol;
  p.port = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      if (v === 0) {
        v = null;
      }

      if (v) {
        v += '';
        if (v.charAt(0) === ':') {
          v = v.substring(1);
        }

        URI.ensureValidPort(v);
      }
    }
    return _port.call(this, v, build);
  };
  p.hostname = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      var x = {};
      var res = URI.parseHost(v, x);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      v = x.hostname;
      URI.ensureValidHostname(v, this._parts.protocol);
    }
    return _hostname.call(this, v, build);
  };

  // compound accessors
  p.origin = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var protocol = this.protocol();
      var authority = this.authority();
      if (!authority) {
        return '';
      }

      return (protocol ? protocol + '://' : '') + this.authority();
    } else {
      var origin = URI(v);
      this
        .protocol(origin.protocol())
        .authority(origin.authority())
        .build(!build);
      return this;
    }
  };
  p.host = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildHost(this._parts) : '';
    } else {
      var res = URI.parseHost(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.authority = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
    } else {
      var res = URI.parseAuthority(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.userinfo = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var t = URI.buildUserinfo(this._parts);
      return t ? t.substring(0, t.length -1) : t;
    } else {
      if (v[v.length-1] !== '@') {
        v += '@';
      }

      URI.parseUserinfo(v, this._parts);
      this.build(!build);
      return this;
    }
  };
  p.resource = function(v, build) {
    var parts;

    if (v === undefined) {
      return this.path() + this.search() + this.hash();
    }

    parts = URI.parse(v);
    this._parts.path = parts.path;
    this._parts.query = parts.query;
    this._parts.fragment = parts.fragment;
    this.build(!build);
    return this;
  };

  // fraction accessors
  p.subdomain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    // convenience, return "www" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // grab domain and add another segment
      var end = this._parts.hostname.length - this.domain().length - 1;
      return this._parts.hostname.substring(0, end) || '';
    } else {
      var e = this._parts.hostname.length - this.domain().length;
      var sub = this._parts.hostname.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(sub));

      if (v && v.charAt(v.length - 1) !== '.') {
        v += '.';
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      if (v) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }

      this._parts.hostname = this._parts.hostname.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.domain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // convenience, return "example.org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // if hostname consists of 1 or 2 segments, it must be the domain
      var t = this._parts.hostname.match(/\./g);
      if (t && t.length < 2) {
        return this._parts.hostname;
      }

      // grab tld and add another segment
      var end = this._parts.hostname.length - this.tld(build).length - 1;
      end = this._parts.hostname.lastIndexOf('.', end -1) + 1;
      return this._parts.hostname.substring(end) || '';
    } else {
      if (!v) {
        throw new TypeError('cannot set domain empty');
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      URI.ensureValidHostname(v, this._parts.protocol);

      if (!this._parts.hostname || this.is('IP')) {
        this._parts.hostname = v;
      } else {
        var replace = new RegExp(escapeRegEx(this.domain()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.tld = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // return "org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      var pos = this._parts.hostname.lastIndexOf('.');
      var tld = this._parts.hostname.substring(pos + 1);

      if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
        return SLD.get(this._parts.hostname) || tld;
      }

      return tld;
    } else {
      var replace;

      if (!v) {
        throw new TypeError('cannot set TLD empty');
      } else if (v.match(/[^a-zA-Z0-9-]/)) {
        if (SLD && SLD.is(v)) {
          replace = new RegExp(escapeRegEx(this.tld()) + '$');
          this._parts.hostname = this._parts.hostname.replace(replace, v);
        } else {
          throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
        }
      } else if (!this._parts.hostname || this.is('IP')) {
        throw new ReferenceError('cannot set TLD on non-domain host');
      } else {
        replace = new RegExp(escapeRegEx(this.tld()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.directory = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path && !this._parts.hostname) {
        return '';
      }

      if (this._parts.path === '/') {
        return '/';
      }

      var end = this._parts.path.length - this.filename().length - 1;
      var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');

      return v ? URI.decodePath(res) : res;

    } else {
      var e = this._parts.path.length - this.filename().length;
      var directory = this._parts.path.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(directory));

      // fully qualifier directories begin with a slash
      if (!this.is('relative')) {
        if (!v) {
          v = '/';
        }

        if (v.charAt(0) !== '/') {
          v = '/' + v;
        }
      }

      // directories always end with a slash
      if (v && v.charAt(v.length - 1) !== '/') {
        v += '/';
      }

      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.filename = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v !== 'string') {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var pos = this._parts.path.lastIndexOf('/');
      var res = this._parts.path.substring(pos+1);

      return v ? URI.decodePathSegment(res) : res;
    } else {
      var mutatedDirectory = false;

      if (v.charAt(0) === '/') {
        v = v.substring(1);
      }

      if (v.match(/\.?\//)) {
        mutatedDirectory = true;
      }

      var replace = new RegExp(escapeRegEx(this.filename()) + '$');
      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);

      if (mutatedDirectory) {
        this.normalizePath(build);
      } else {
        this.build(!build);
      }

      return this;
    }
  };
  p.suffix = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var filename = this.filename();
      var pos = filename.lastIndexOf('.');
      var s, res;

      if (pos === -1) {
        return '';
      }

      // suffix may only contain alnum characters (yup, I made this up.)
      s = filename.substring(pos+1);
      res = (/^[a-z0-9%]+$/i).test(s) ? s : '';
      return v ? URI.decodePathSegment(res) : res;
    } else {
      if (v.charAt(0) === '.') {
        v = v.substring(1);
      }

      var suffix = this.suffix();
      var replace;

      if (!suffix) {
        if (!v) {
          return this;
        }

        this._parts.path += '.' + URI.recodePath(v);
      } else if (!v) {
        replace = new RegExp(escapeRegEx('.' + suffix) + '$');
      } else {
        replace = new RegExp(escapeRegEx(suffix) + '$');
      }

      if (replace) {
        v = URI.recodePath(v);
        this._parts.path = this._parts.path.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.segment = function(segment, v, build) {
    var separator = this._parts.urn ? ':' : '/';
    var path = this.path();
    var absolute = path.substring(0, 1) === '/';
    var segments = path.split(separator);

    if (segment !== undefined && typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (segment !== undefined && typeof segment !== 'number') {
      throw new Error('Bad segment "' + segment + '", must be 0-based integer');
    }

    if (absolute) {
      segments.shift();
    }

    if (segment < 0) {
      // allow negative indexes to address from the end
      segment = Math.max(segments.length + segment, 0);
    }

    if (v === undefined) {
      /*jshint laxbreak: true */
      return segment === undefined
        ? segments
        : segments[segment];
      /*jshint laxbreak: false */
    } else if (segment === null || segments[segment] === undefined) {
      if (isArray(v)) {
        segments = [];
        // collapse empty elements within array
        for (var i=0, l=v.length; i < l; i++) {
          if (!v[i].length && (!segments.length || !segments[segments.length -1].length)) {
            continue;
          }

          if (segments.length && !segments[segments.length -1].length) {
            segments.pop();
          }

          segments.push(trimSlashes(v[i]));
        }
      } else if (v || typeof v === 'string') {
        v = trimSlashes(v);
        if (segments[segments.length -1] === '') {
          // empty trailing elements have to be overwritten
          // to prevent results such as /foo//bar
          segments[segments.length -1] = v;
        } else {
          segments.push(v);
        }
      }
    } else {
      if (v) {
        segments[segment] = trimSlashes(v);
      } else {
        segments.splice(segment, 1);
      }
    }

    if (absolute) {
      segments.unshift('');
    }

    return this.path(segments.join(separator), build);
  };
  p.segmentCoded = function(segment, v, build) {
    var segments, i, l;

    if (typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (v === undefined) {
      segments = this.segment(segment, v, build);
      if (!isArray(segments)) {
        segments = segments !== undefined ? URI.decode(segments) : undefined;
      } else {
        for (i = 0, l = segments.length; i < l; i++) {
          segments[i] = URI.decode(segments[i]);
        }
      }

      return segments;
    }

    if (!isArray(v)) {
      v = (typeof v === 'string' || v instanceof String) ? URI.encode(v) : v;
    } else {
      for (i = 0, l = v.length; i < l; i++) {
        v[i] = URI.encode(v[i]);
      }
    }

    return this.segment(segment, v, build);
  };

  // mutating query string
  var q = p.query;
  p.query = function(v, build) {
    if (v === true) {
      return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    } else if (typeof v === 'function') {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      var result = v.call(this, data);
      this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else if (v !== undefined && typeof v !== 'string') {
      this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else {
      return q.call(this, v, build);
    }
  };
  p.setQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

    if (typeof name === 'string' || name instanceof String) {
      data[name] = value !== undefined ? value : null;
    } else if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          data[key] = name[key];
        }
      }
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }

    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.addQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.addQuery(data, name, value === undefined ? null : value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.removeQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.removeQuery(data, name, value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.hasQuery = function(name, value, withinArray) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return URI.hasQuery(data, name, value, withinArray);
  };
  p.setSearch = p.setQuery;
  p.addSearch = p.addQuery;
  p.removeSearch = p.removeQuery;
  p.hasSearch = p.hasQuery;

  // sanitizing URLs
  p.normalize = function() {
    if (this._parts.urn) {
      return this
        .normalizeProtocol(false)
        .normalizePath(false)
        .normalizeQuery(false)
        .normalizeFragment(false)
        .build();
    }

    return this
      .normalizeProtocol(false)
      .normalizeHostname(false)
      .normalizePort(false)
      .normalizePath(false)
      .normalizeQuery(false)
      .normalizeFragment(false)
      .build();
  };
  p.normalizeProtocol = function(build) {
    if (typeof this._parts.protocol === 'string') {
      this._parts.protocol = this._parts.protocol.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizeHostname = function(build) {
    if (this._parts.hostname) {
      if (this.is('IDN') && punycode) {
        this._parts.hostname = punycode.toASCII(this._parts.hostname);
      } else if (this.is('IPv6') && IPv6) {
        this._parts.hostname = IPv6.best(this._parts.hostname);
      }

      this._parts.hostname = this._parts.hostname.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizePort = function(build) {
    // remove port of it's the protocol's default
    if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
      this._parts.port = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizePath = function(build) {
    var _path = this._parts.path;
    if (!_path) {
      return this;
    }

    if (this._parts.urn) {
      this._parts.path = URI.recodeUrnPath(this._parts.path);
      this.build(!build);
      return this;
    }

    if (this._parts.path === '/') {
      return this;
    }

    _path = URI.recodePath(_path);

    var _was_relative;
    var _leadingParents = '';
    var _parent, _pos;

    // handle relative paths
    if (_path.charAt(0) !== '/') {
      _was_relative = true;
      _path = '/' + _path;
    }

    // handle relative files (as opposed to directories)
    if (_path.slice(-3) === '/..' || _path.slice(-2) === '/.') {
      _path += '/';
    }

    // resolve simples
    _path = _path
      .replace(/(\/(\.\/)+)|(\/\.$)/g, '/')
      .replace(/\/{2,}/g, '/');

    // remember leading parents
    if (_was_relative) {
      _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
      if (_leadingParents) {
        _leadingParents = _leadingParents[0];
      }
    }

    // resolve parents
    while (true) {
      _parent = _path.search(/\/\.\.(\/|$)/);
      if (_parent === -1) {
        // no more ../ to resolve
        break;
      } else if (_parent === 0) {
        // top level cannot be relative, skip it
        _path = _path.substring(3);
        continue;
      }

      _pos = _path.substring(0, _parent).lastIndexOf('/');
      if (_pos === -1) {
        _pos = _parent;
      }
      _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
    }

    // revert to relative
    if (_was_relative && this.is('relative')) {
      _path = _leadingParents + _path.substring(1);
    }

    this._parts.path = _path;
    this.build(!build);
    return this;
  };
  p.normalizePathname = p.normalizePath;
  p.normalizeQuery = function(build) {
    if (typeof this._parts.query === 'string') {
      if (!this._parts.query.length) {
        this._parts.query = null;
      } else {
        this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
      }

      this.build(!build);
    }

    return this;
  };
  p.normalizeFragment = function(build) {
    if (!this._parts.fragment) {
      this._parts.fragment = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizeSearch = p.normalizeQuery;
  p.normalizeHash = p.normalizeFragment;

  p.iso8859 = function() {
    // expect unicode input, iso8859 output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = escape;
    URI.decode = decodeURIComponent;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.unicode = function() {
    // expect iso8859 input, unicode output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = strictEncodeURIComponent;
    URI.decode = unescape;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.readable = function() {
    var uri = this.clone();
    // removing username, password, because they shouldn't be displayed according to RFC 3986
    uri.username('').password('').normalize();
    var t = '';
    if (uri._parts.protocol) {
      t += uri._parts.protocol + '://';
    }

    if (uri._parts.hostname) {
      if (uri.is('punycode') && punycode) {
        t += punycode.toUnicode(uri._parts.hostname);
        if (uri._parts.port) {
          t += ':' + uri._parts.port;
        }
      } else {
        t += uri.host();
      }
    }

    if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
      t += '/';
    }

    t += uri.path(true);
    if (uri._parts.query) {
      var q = '';
      for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
        var kv = (qp[i] || '').split('=');
        q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace)
          .replace(/&/g, '%26');

        if (kv[1] !== undefined) {
          q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace)
            .replace(/&/g, '%26');
        }
      }
      t += '?' + q.substring(1);
    }

    t += URI.decodeQuery(uri.hash(), true);
    return t;
  };

  // resolving relative and absolute URLs
  p.absoluteTo = function(base) {
    var resolved = this.clone();
    var properties = ['protocol', 'username', 'password', 'hostname', 'port'];
    var basedir, i, p;

    if (this._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    if (!(base instanceof URI)) {
      base = new URI(base);
    }

    if (resolved._parts.protocol) {
      // Directly returns even if this._parts.hostname is empty.
      return resolved;
    } else {
      resolved._parts.protocol = base._parts.protocol;
    }

    if (this._parts.hostname) {
      return resolved;
    }

    for (i = 0; (p = properties[i]); i++) {
      resolved._parts[p] = base._parts[p];
    }

    if (!resolved._parts.path) {
      resolved._parts.path = base._parts.path;
      if (!resolved._parts.query) {
        resolved._parts.query = base._parts.query;
      }
    } else {
      if (resolved._parts.path.substring(-2) === '..') {
        resolved._parts.path += '/';
      }

      if (resolved.path().charAt(0) !== '/') {
        basedir = base.directory();
        basedir = basedir ? basedir : base.path().indexOf('/') === 0 ? '/' : '';
        resolved._parts.path = (basedir ? (basedir + '/') : '') + resolved._parts.path;
        resolved.normalizePath();
      }
    }

    resolved.build();
    return resolved;
  };
  p.relativeTo = function(base) {
    var relative = this.clone().normalize();
    var relativeParts, baseParts, common, relativePath, basePath;

    if (relative._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    base = new URI(base).normalize();
    relativeParts = relative._parts;
    baseParts = base._parts;
    relativePath = relative.path();
    basePath = base.path();

    if (relativePath.charAt(0) !== '/') {
      throw new Error('URI is already relative');
    }

    if (basePath.charAt(0) !== '/') {
      throw new Error('Cannot calculate a URI relative to another relative URI');
    }

    if (relativeParts.protocol === baseParts.protocol) {
      relativeParts.protocol = null;
    }

    if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
      return relative.build();
    }

    if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
      return relative.build();
    }

    if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
      relativeParts.hostname = null;
      relativeParts.port = null;
    } else {
      return relative.build();
    }

    if (relativePath === basePath) {
      relativeParts.path = '';
      return relative.build();
    }

    // determine common sub path
    common = URI.commonPath(relativePath, basePath);

    // If the paths have nothing in common, return a relative URL with the absolute path.
    if (!common) {
      return relative.build();
    }

    var parents = baseParts.path
      .substring(common.length)
      .replace(/[^\/]*$/, '')
      .replace(/.*?\//g, '../');

    relativeParts.path = (parents + relativeParts.path.substring(common.length)) || './';

    return relative.build();
  };

  // comparing URIs
  p.equals = function(uri) {
    var one = this.clone();
    var two = new URI(uri);
    var one_map = {};
    var two_map = {};
    var checked = {};
    var one_query, two_query, key;

    one.normalize();
    two.normalize();

    // exact match
    if (one.toString() === two.toString()) {
      return true;
    }

    // extract query string
    one_query = one.query();
    two_query = two.query();
    one.query('');
    two.query('');

    // definitely not equal if not even non-query parts match
    if (one.toString() !== two.toString()) {
      return false;
    }

    // query parameters have the same length, even if they're permuted
    if (one_query.length !== two_query.length) {
      return false;
    }

    one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
    two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);

    for (key in one_map) {
      if (hasOwn.call(one_map, key)) {
        if (!isArray(one_map[key])) {
          if (one_map[key] !== two_map[key]) {
            return false;
          }
        } else if (!arraysEqual(one_map[key], two_map[key])) {
          return false;
        }

        checked[key] = true;
      }
    }

    for (key in two_map) {
      if (hasOwn.call(two_map, key)) {
        if (!checked[key]) {
          // two contains a parameter not present in one
          return false;
        }
      }
    }

    return true;
  };

  // state
  p.duplicateQueryParameters = function(v) {
    this._parts.duplicateQueryParameters = !!v;
    return this;
  };

  p.escapeQuerySpace = function(v) {
    this._parts.escapeQuerySpace = !!v;
    return this;
  };

  return URI;
}));


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = {
	"name": "truevault",
	"description": "The official TrueVault JavaScript SDK",
	"version": "2.0.0",
	"repository": {
		"type": "git",
		"url": "https://github.com/truevault/truevault-js-sdk"
	},
	"keywords": [
		"truevault",
		"js",
		"javascript",
		"sdk",
		"rest",
		"api"
	],
	"scripts": {
		"test": "mocha --require babel-register --require babel-polyfill",
		"build-browser-tests": "webpack --config webpack.browser-test-config.js",
		"build-lambda-tests": "webpack --config webpack.lambda-test-config.js && pushd test/lambda && rm -f ../lambda.zip && zip -r ../lambda.zip . && popd",
		"build": "webpack --config webpack.node-config.js && webpack --config webpack.browser-config.js"
	},
	"license": "BSD-3-Clause",
	"main": "build/index-node.js",
	"browser": "build/index-web.js",
	"files": [
		"build/index-node.js",
		"build/index-web.js",
		"index.js",
		"README.md",
		"LICENSE"
	],
	"dependencies": {
		"babel-preset-env": "^1.5.2",
		"base-64": "^0.1.0",
		"content-disposition": "^0.5.2",
		"form-data": "^2.3.2",
		"node-fetch": "^2.1.2",
		"urijs": "^1.18.12"
	},
	"devDependencies": {
		"ajv": "^6.4.0",
		"babel-core": "^6.26.0",
		"babel-jest": "^22.4.3",
		"babel-loader": "^7.0.0",
		"babel-plugin-transform-runtime": "^6.23.0",
		"babel-polyfill": "^6.23.0",
		"babel-register": "^6.26.0",
		"documentation": "^4.0.0-rc.1",
		"dotenv": "^5.0.1",
		"dotenv-webpack": "^1.5.5",
		"mocha": "^5.0.5",
		"otplib": "^8.0.1",
		"regenerator-runtime": "^0.11.1",
		"should": "^13.2.1",
		"string-to-stream": "^1.1.0",
		"uglifyjs-webpack-plugin": "^1.2.4",
		"uuid": "^3.2.1",
		"webpack": "^2.6.1"
	}
};

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61);


/***/ })
/******/ ]);
});