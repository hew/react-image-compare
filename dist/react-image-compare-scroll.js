'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _functionalEasing = require('functional-easing');

var _ReactTrack = require('../lib/ReactTrack');

var _reactImation = require('react-imation');

var _tweenValueFactories = require('react-imation/tween-value-factories');

var _trackingFormulas = require('react-track/tracking-formulas');

require('../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easeOutBounce = new _functionalEasing.Easer().using('out-bounce');

var ImageCompareScroll = function (_Component) {
  _inherits(ImageCompareScroll, _Component);

  function ImageCompareScroll() {
    _classCallCheck(this, ImageCompareScroll);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageCompareScroll).apply(this, arguments));
  }

  _createClass(ImageCompareScroll, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var srcUnder = _props.srcUnder;
      var srcOver = _props.srcOver;
      var vertical = _props.vertical;


      return _react2.default.createElement(
        _ReactTrack.TrackDocument,
        {
          formulas: [_trackingFormulas.getDocumentElement, _trackingFormulas.getDocumentRect, _trackingFormulas.calculateScrollY, _trackingFormulas.topTop, _trackingFormulas.centerCenter] },
        function (documentElement, documentRect, scrollY, topTop, centerCenter) {
          return _react2.default.createElement(
            _ReactTrack.TrackedDiv,
            { formulas: [topTop, centerCenter] },
            function (posCenterCenter, posTopTop) {
              return _react2.default.createElement(
                'div',
                { className: 'comparison' },
                _react2.default.createElement(
                  'figure',
                  null,
                  _react2.default.createElement('img', { src: srcOver, alt: '' }),
                  !vertical && _react2.default.createElement(
                    'div',
                    {
                      style: (0, _reactImation.tween)(scrollY, [[posTopTop, { width: (0, _tweenValueFactories.percent)(0), height: (0, _tweenValueFactories.percent)(100) }], [posCenterCenter, { width: (0, _tweenValueFactories.percent)(100), height: (0, _tweenValueFactories.percent)(100) }]]) },
                    _react2.default.createElement('div', { style: { backgroundImage: 'url(' + srcUnder + ')' } })
                  ),
                  vertical && _react2.default.createElement(
                    'div',
                    {
                      style: (0, _reactImation.tween)(scrollY, [[posTopTop, { height: (0, _tweenValueFactories.percent)(0), width: (0, _tweenValueFactories.percent)(100) }], [posCenterCenter, { height: (0, _tweenValueFactories.percent)(100), width: (0, _tweenValueFactories.percent)(100) }]]) },
                    _react2.default.createElement('div', { style: { backgroundImage: 'url(' + srcUnder + ')' } })
                  )
                )
              );
            }
          );
        }
      );
    }
  }]);

  return ImageCompareScroll;
}(_react.Component);

ImageCompareScroll.defaultProps = {
  vertical: false
};
exports.default = ImageCompareScroll;