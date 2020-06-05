"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageEvent = function MessageEvent(message) {
  _classCallCheck(this, MessageEvent);

  this.message = message;
  this.id = (0, _uuid.v4)();
};

var _default = MessageEvent;
exports["default"] = _default;