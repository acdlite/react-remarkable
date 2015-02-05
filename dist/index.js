"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

"use strict";

var React = _interopRequire(require('react'));

var Markdown = _interopRequire(require('remarkable'));

var Remarkable = React.createClass({
  displayName: "Remarkable",


  getDefaultProps: function () {
    return {
      container: "div",
      options: {},
      plugins: [],
      transforms: []
    };
  },

  render: function () {
    var Container = this.props.container;

    return (React.createElement(Container, null, this.content()));
  },

  componentWillReceiveProps: function (nextProps) {
    this.md = this.makeMarkdown(nextProps.options, nextProps.plugins);
  },

  content: function () {
    var _this = this;
    if (this.props.source) {
      return React.createElement("span", {
        dangerouslySetInnerHTML: { __html: this.renderMarkdown(this.props.source) }
      });
    } else {
      return React.Children.map(this.props.children, function (child) {
        if (typeof child === "string") {
          return React.createElement("span", {
            dangerouslySetInnerHTML: { __html: _this.renderMarkdown(child) }
          });
        } else {
          return child;
        }
      });
    }
  },

  makeMarkdown: function (options, plugins) {
    return plugins.reduce(function (md, plugin) {
      return md.use(plugin);
    }, new Markdown(options));
  },

  renderMarkdown: function (source) {
    if (!this.md) {
      this.md = this.makeMarkdown(this.props.options, this.props.plugins);
    }

    return this.props.transforms.reduce(function (src, transform) {
      return transform(src);
    }, this.md.render(source));
  }

});

module.exports = Remarkable;