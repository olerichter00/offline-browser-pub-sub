"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _messageEvent = _interopRequireDefault(require("./entities/messageEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NotifierService = /*#__PURE__*/function () {
  function NotifierService(_ref) {
    var _this = this;

    var topicRegistry = _ref.topicRegistry;

    _classCallCheck(this, NotifierService);

    this.topicRegistry = topicRegistry;
    window.addEventListener('storage', function (e) {
      var subscribers = _this.topicRegistry.getSubscribersFor(e.key);

      var event = JSON.parse(e.newValue);
      subscribers.forEach(function (subscriber) {
        subscriber.call(event.message);
      });
    }, false);
  }

  _createClass(NotifierService, [{
    key: "publish",
    value: function publish(topic, message, notifySameTab) {
      var event = new _messageEvent["default"](message); // fire storage event in other windows

      this.setStorageItem(topic, JSON.stringify(event)); // fire storage event in the same windows

      if (notifySameTab) this.fireStorageEvent(topic, JSON.stringify(event));
    }
  }, {
    key: "setStorageItem",
    value: function setStorageItem(topic, message) {
      localStorage.setItem(topic, message);
    }
  }, {
    key: "fireStorageEvent",
    value: function fireStorageEvent(topic, message) {
      var event = new Event('storage');
      event.key = topic;
      event.newValue = message;
      window.dispatchEvent(event);
    }
  }]);

  return NotifierService;
}();

var _default = NotifierService;
exports["default"] = _default;