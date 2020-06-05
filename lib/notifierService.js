"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
      if (!_this.topicRegistry.exists(e.key)) return;

      var topic = _this.topicRegistry.get(e.key);

      var event = JSON.parse(e.newValue);
      topic.subscribers.forEach(function (subscriber) {
        subscriber.call(event.message);
      });
    }, false);
  }

  _createClass(NotifierService, [{
    key: "publish",
    value: function publish(topic, message, notifySameTab) {
      // fire storage event in other windows
      this.setStorageItem(topic, message); // fire storage event in the same windows

      if (notifySameTab) this.fireStorageEvent(topic, message);
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