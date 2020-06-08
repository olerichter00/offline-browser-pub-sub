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

var BrowserPubSub = /*#__PURE__*/function () {
  function BrowserPubSub(_ref) {
    var topicRegistry = _ref.topicRegistry,
        notifierService = _ref.notifierService;

    _classCallCheck(this, BrowserPubSub);

    this.topicRegistry = topicRegistry;
    this.notifierService = notifierService;
  }

  _createClass(BrowserPubSub, [{
    key: "verifyTopicName",
    value: function verifyTopicName(topicName) {
      if (typeof topicName !== 'string') throw Error('Topic musst be a string (${typeof topicName}).');
    }
  }, {
    key: "subscribe",
    value: function subscribe(topicName, callback) {
      this.verifyTopicName(topicName);
      var subscriber = this.topicRegistry.register(topicName, callback);
      return subscriber.id;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(subscriberId) {
      this.topicRegistry.unregister(subscriberId);
    }
  }, {
    key: "publish",
    value: function publish(topicName, message) {
      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref2$notifySameTab = _ref2.notifySameTab,
          notifySameTab = _ref2$notifySameTab === void 0 ? true : _ref2$notifySameTab;

      this.verifyTopicName(topicName);
      this.notifierService.publish(topicName, message, notifySameTab);
    }
  }]);

  return BrowserPubSub;
}();

var _default = BrowserPubSub;
exports["default"] = _default;