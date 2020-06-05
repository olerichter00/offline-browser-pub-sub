"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Topic = function Topic(name) {
  _classCallCheck(this, Topic);

  this.subscribers = [];
  this.name = name;
};

var _default = Topic;
exports["default"] = _default;