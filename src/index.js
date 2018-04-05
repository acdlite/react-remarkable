'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'remarkable';

class Remarkable extends React.Component {

  render() {
    var {
      container: Container,
      children,
      contentWrapper,
      options,
      plugins,
      source,
      // ⬆ remove Remarkable props
      ...props // ⬅ only pass non-Remarkable props
    } = this.props;

    return (
      <Container {...props}>
        {this.content()}
      </Container>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.options !== this.props.options) {
      return true;
    }
    else if (this.props.source) {
      return this.props.source !== nextProps.source;
    }
    else if (React.Children.count(this.props.children) === 1 && React.Children.count(nextProps.children) === 1) {
      return (typeof this.props.children === 'string') && this.props.children !== nextProps.children;
    }
    else {
      return true;
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.options !== this.props.options) {
      this.md = this.createMarkdown(nextProps.options, nextProps.plugins);
    }
  }

  content() {
    var Wrapper = this.props.contentWrapper;

    if (this.props.source) {
      return <Wrapper dangerouslySetInnerHTML={{ __html: this.renderMarkdown(this.props.source) }} />;
    }
    else {
      return React.Children.map(this.props.children, child => {
        if (typeof child === 'string') {
          return <Wrapper dangerouslySetInnerHTML={{ __html: this.renderMarkdown(child) }} />;
        }
        else {
          return child;
        }
      });
    }
  }

  renderMarkdown(source) {
    if (!this.md) {
      this.md = this.createMarkdown(this.props.options, this.props.plugins);
    }

    return this.md.render(source);
  }

  createMarkdown(options, plugins) {
    return plugins.reduce((md, plugin) => {
      return md.use(plugin);
    }, new Markdown(options));
  }
}

Remarkable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  container: PropTypes.string,
  contentWrapper: PropTypes.string,
  options: PropTypes.object,
  plugins: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
};

Remarkable.defaultProps = {
  container: 'div',
  contentWrapper: 'span',
  options: {},
  plugins: [],
};

export default Remarkable;
