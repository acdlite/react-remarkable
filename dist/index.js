'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _remarkable = require('remarkable');

var _remarkable2 = _interopRequireDefault(_remarkable);

var Remarkable = (function (_React$Component) {
  _inherits(Remarkable, _React$Component);

  function Remarkable() {
    _classCallCheck(this, Remarkable);

    _get(Object.getPrototypeOf(Remarkable.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Remarkable, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextProps.options !== this.props.options) {
        this.md = this.createMarkdown(nextProps.options, nextProps.plugins);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.options !== this.props.options) {
        return true;
      } else if (this.props.source) {
        return this.props.source !== nextProps.source;
      } else if (_react2['default'].Children.count(this.props.children) === 1 && _react2['default'].Children.count(nextProps.children) === 1) {
        return typeof this.props.children === 'string' && this.props.children !== nextProps.children;
      } else {
        return true;
      }
    }
  }, {
    key: 'renderMarkdown',
    value: function renderMarkdown(source) {
      if (!this.md) {
        this.md = this.createMarkdown(this.props.options, this.props.plugins);
      }

      return this.md.render(source);
    }
  }, {
    key: 'createMarkdown',
    value: function createMarkdown(options, plugins) {
      return plugins.reduce(function (md, plugin) {
        return md.use(plugin);
      }, new _remarkable2['default'](options));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var _props =
      // ⬆ remove Remarkable props
      // ⬅ only pass non-Remarkable props
      this.props;
      var Container = _props.container;
      var children = _props.children;
      var options = _props.options;
      var plugins = _props.plugins;
      var source = _props.source;

      var props = _objectWithoutProperties(_props, ['container', 'children', 'options', 'plugins', 'source']);

      if (!children && !source) {
        return null;
      }

      if (children) {
        return _react2['default'].Children.map(children, function (child) {
          if (typeof child === 'string') {
            return _react2['default'].createElement(Container, _extends({}, props, {
              dangerouslySetInnerHTML: {
                __html: _this.renderMarkdown(child)
              }
            }));
          }
          return child;
        });
      }

      return _react2['default'].createElement(Container, _extends({}, props, {
        dangerouslySetInnerHTML: {
          __html: this.renderMarkdown(source)
        }
      }));
    }
  }]);

  return Remarkable;
})(_react2['default'].Component);

Remarkable.propTypes = {
  children: _propTypes2['default'].oneOfType([_propTypes2['default'].arrayOf(_propTypes2['default'].node), _propTypes2['default'].node]),
  container: _propTypes2['default'].string,
  options: _propTypes2['default'].object,
  plugins: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
  source: _propTypes2['default'].string
};

Remarkable.defaultProps = {
  container: 'div',
  options: {},
  plugins: []
};

exports['default'] = Remarkable;
module.exports = exports['default'];