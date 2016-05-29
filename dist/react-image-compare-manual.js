'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageCompare = function (_Component) {
  _inherits(ImageCompare, _Component);

  function ImageCompare(props) {
    _classCallCheck(this, ImageCompare);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageCompare).call(this, props));

    _this.state = { percentage: 1 };

    _this._slide = _this._slide.bind(_this);
    return _this;
  }

  _createClass(ImageCompare, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var vertical = _props.vertical;
      var percentage = _props.percentage;
      var srcOver = _props.srcOver;
      var srcUnder = _props.srcUnder;
      var controls = _props.controls;
      var styles = _props.styles;


      return _react2.default.createElement(
        'div',
        { className: 'comparison' },
        _react2.default.createElement(
          'figure',
          null,
          _react2.default.createElement('img', { src: srcOver, alt: '' }),
          !vertical && _react2.default.createElement('div', { style: _extends({
              width: (percentage || this.state.percentage) + '%',
              backgroundImage: 'url(' + srcUnder + ')'
            }, styles) }),
          vertical && _react2.default.createElement('div', { style: _extends({
              height: (percentage || this.state.percentage) + '%',
              backgroundImage: 'url(' + srcUnder + ')'
            }, styles) })
        ),
        controls && _react2.default.createElement(
          'div',
          { className: 'compare-controls' },
          _react2.default.createElement('input', {
            type: 'range',
            min: '0',
            max: '100',
            value: this.state.percentage,
            ref: function ref(c) {
              return _this2._input = c;
            },
            onChange: this._slide
          })
        )
      );
    }
  }, {
    key: '_slide',
    value: function _slide() {
      this.setState({
        percentage: this._input.value
      });
    }
  }]);

  return ImageCompare;
}(_react.Component);

exports.default = ImageCompare;