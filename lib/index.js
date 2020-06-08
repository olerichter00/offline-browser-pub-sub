"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _browserPubSub = _interopRequireDefault(require("./browserPubSub"));

var _topicRegistry = _interopRequireDefault(require("./topicRegistry"));

var _notifierService = _interopRequireDefault(require("./notifierService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var topicRegistry = new _topicRegistry["default"]();
var notifierService = new _notifierService["default"]({
  topicRegistry: topicRegistry
});
var browserPubSub = new _browserPubSub["default"]({
  topicRegistry: topicRegistry,
  notifierService: notifierService
});
var _default = browserPubSub;
exports["default"] = _default;