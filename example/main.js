var browserPubSub =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "browserPubSub", function() { return /* binding */ browserPubSub; });

// CONCATENATED MODULE: ./src/entities/topic.js
class Topic {
  constructor(name) {
    this.subscribers = []
    this.name = name
  }
}

/* harmony default export */ var entities_topic = (Topic);

// CONCATENATED MODULE: ./src/topicRegistry.js


class topicRegistry_TopicRegistry {
  constructor() {
    this.topics = {}
  }

  get(name) {
    if (!this.exists(name)) this.topics[name] = new entities_topic(name)

    return this.topics[name]
  }

  exists(name) {
    return !!this.topics[name]
  }

  all() {
    return Object.values(this.topics)
  }
}

/* harmony default export */ var topicRegistry = (topicRegistry_TopicRegistry);

// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/bytesToUuid.js
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var bytesToUuid_i = 0; bytesToUuid_i < 256; ++bytesToUuid_i) {
  byteToHex.push((bytesToUuid_i + 0x100).toString(16).substr(1));
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  return (bth[buf[i + 0]] + bth[buf[i + 1]] + bth[buf[i + 2]] + bth[buf[i + 3]] + '-' + bth[buf[i + 4]] + bth[buf[i + 5]] + '-' + bth[buf[i + 6]] + bth[buf[i + 7]] + '-' + bth[buf[i + 8]] + bth[buf[i + 9]] + '-' + bth[buf[i + 10]] + bth[buf[i + 11]] + bth[buf[i + 12]] + bth[buf[i + 13]] + bth[buf[i + 14]] + bth[buf[i + 15]]).toLowerCase();
}

/* harmony default export */ var esm_browser_bytesToUuid = (bytesToUuid);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  if (typeof options === 'string') {
    buf = options === 'binary' ? new Uint8Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    var start = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[start + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_bytesToUuid(rnds);
}

/* harmony default export */ var esm_browser_v4 = (v4);
// CONCATENATED MODULE: ./src/entities/subscriber.js


class subscriber_Subscriber {
  constructor(callback) {
    this.callback = callback
    this.id = esm_browser_v4()
  }

  call(message) {
    this.callback(message)
  }
}

/* harmony default export */ var entities_subscriber = (subscriber_Subscriber);

// CONCATENATED MODULE: ./src/entities/messageEvent.js


class messageEvent_MessageEvent {
  constructor(message) {
    this.message = message
    this.id = esm_browser_v4()
  }
}

/* harmony default export */ var messageEvent = (messageEvent_MessageEvent);

// CONCATENATED MODULE: ./src/notifierService.js
class NotifierService {
  constructor({ topicRegistry }) {
    this.topicRegistry = topicRegistry

    window.addEventListener(
      'storage',
      e => {
        if (!this.topicRegistry.exists(e.key)) return

        const topic = this.topicRegistry.get(e.key)
        const event = JSON.parse(e.newValue)

        topic.subscribers.forEach(subscriber => {
          subscriber.call(event.message)
        })
      },
      false,
    )
  }

  publish(topic, message, notifySameTab) {
    // fire storage event in other windows
    this.setStorageItem(topic, message)
    // fire storage event in the same windows
    if (notifySameTab) this.fireStorageEvent(topic, message)
  }

  setStorageItem(topic, message) {
    localStorage.setItem(topic, message)
  }

  fireStorageEvent(topic, message) {
    const event = new Event('storage')

    event.key = topic
    event.newValue = message

    window.dispatchEvent(event)
  }
}

/* harmony default export */ var notifierService = (NotifierService);

// CONCATENATED MODULE: ./src/browserPubSub.js





const browserPubSub_topicRegistry = new topicRegistry()
const browserPubSub_notifierService = new notifierService({ topicRegistry: browserPubSub_topicRegistry })

const subscribe = (topicName, callback) => {
  const topic = browserPubSub_topicRegistry.get(topicName)

  const subscriber = new entities_subscriber(callback)

  topic.subscribers.push(subscriber)

  return subscriber.id
}

const unsubscribe = id => {
  browserPubSub_topicRegistry.all().forEach(topic => {
    topic.subscribers = topic.subscribers.filter(
      subscriber => subscriber.id !== id,
    )
  })
}

const publish = (topic, message, { notifySameTab = true } = {}) => {
  const event = new messageEvent(message)

  browserPubSub_notifierService.publish(topic, JSON.stringify(event), notifySameTab)
}

const browserPubSub = { subscribe, unsubscribe, publish }
/* harmony default export */ var src_browserPubSub = __webpack_exports__["default"] = (browserPubSub);


/***/ })
/******/ ])["default"];