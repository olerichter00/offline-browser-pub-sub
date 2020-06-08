"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _topic = _interopRequireDefault(require("./entities/topic"));

var _subscriber = _interopRequireDefault(require("./entities/subscriber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TopicRegistry = /*#__PURE__*/function () {
  function TopicRegistry() {
    _classCallCheck(this, TopicRegistry);

    this.topics = {};
  }

  _createClass(TopicRegistry, [{
    key: "register",
    value: function register(topicName, callback) {
      if (!this.topics[topicName]) this.topics[topicName] = new _topic["default"](topicName);
      var topic = this.topics[topicName];
      var subscriber = new _subscriber["default"](callback);
      topic.subscribers.push(subscriber);
      return subscriber;
    }
  }, {
    key: "unregister",
    value: function unregister(subscriberId) {
      Object.values(this.topics).forEach(function (topic) {
        topic.subscribers = topic.subscribers.filter(function (subscriber) {
          return subscriber.id !== subscriberId;
        });
      });
    }
  }, {
    key: "getSubscribersFor",
    value: function getSubscribersFor(topicName) {
      if (!this.topics[topicName]) return [];
      return this.topics[topicName].subscribers;
    }
  }]);

  return TopicRegistry;
}();

var _default = TopicRegistry;
exports["default"] = _default;