"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.browserPubSub = void 0;

var _topicRegistry = _interopRequireDefault(require("./topicRegistry"));

var _subscriber = _interopRequireDefault(require("./entities/subscriber"));

var _messageEvent = _interopRequireDefault(require("./entities/messageEvent"));

var _notifierService = _interopRequireDefault(require("./notifierService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var topicRegistry = new _topicRegistry["default"]();
var notifierService = new _notifierService["default"]({
  topicRegistry: topicRegistry
});

var subscribe = function subscribe(topicName, callback) {
  var topic = topicRegistry.get(topicName);
  var subscriber = new _subscriber["default"](callback);
  topic.subscribers.push(subscriber);
  return subscriber.id;
};

var unsubscribe = function unsubscribe(id) {
  topicRegistry.all().forEach(function (topic) {
    topic.subscribers = topic.subscribers.filter(function (subscriber) {
      return subscriber.id !== id;
    });
  });
};

var publish = function publish(topic, message) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$notifySameTab = _ref.notifySameTab,
      notifySameTab = _ref$notifySameTab === void 0 ? true : _ref$notifySameTab;

  var event = new _messageEvent["default"](message);
  notifierService.publish(topic, JSON.stringify(event), notifySameTab);
};

var browserPubSub = {
  subscribe: subscribe,
  unsubscribe: unsubscribe,
  publish: publish
};
exports.browserPubSub = browserPubSub;
var _default = browserPubSub;
exports["default"] = _default;