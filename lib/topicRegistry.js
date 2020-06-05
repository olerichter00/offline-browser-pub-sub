"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _topic = _interopRequireDefault(require("./entities/topic"));

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
    key: "get",
    value: function get(name) {
      if (!this.exists(name)) this.topics[name] = new _topic["default"](name);
      return this.topics[name];
    }
  }, {
    key: "exists",
    value: function exists(name) {
      return !!this.topics[name];
    }
  }, {
    key: "all",
    value: function all() {
      return Object.values(this.topics);
    }
  }]);

  return TopicRegistry;
}();

var _default = TopicRegistry;
exports["default"] = _default;