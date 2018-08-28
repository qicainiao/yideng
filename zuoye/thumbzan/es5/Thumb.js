"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import PraiseButton from './PraiseButton'

var PraiseButton = function () {
  function PraiseButton() {
    _classCallCheck(this, PraiseButton);

    this.zanNum = 0;
  }

  _createClass(PraiseButton, [{
    key: "addZan",
    value: function addZan() {
      return this.zanNum++;
    }
  }, {
    key: "reduceZan",
    value: function reduceZan() {
      if (this.zanNum > 0) {
        return this.zanNum--;
      }
    }
  }]);

  return PraiseButton;
}();

var Thumb = exports.Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  function Thumb() {
    _classCallCheck(this, Thumb);

    var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

    _this.maxAddNum = 100;
    return _this;
  }

  _createClass(Thumb, [{
    key: "getZanNum",
    value: function getZanNum() {
      return this.zanNum;
    }
  }]);

  return Thumb;
}(PraiseButton);

console.log(new Thumb().addZan());