'use strict';

import React from 'react';
import Markdown from 'remarkable';

class Remarkable extends React.Component {

  render() {
    var Container = this.props.container;

    return (
      <Container>
        {this.content()}
      </Container>
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.options !== this.props.options) {
      this.md = new Markdown(nextProps.options);
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
      this.md = new Markdown(this.props.options);
    }

    return this.md.render(source);
  }
}

Remarkable.defaultProps = {
  container: 'div',
  contentWrapper: 'span',
  options: {},
};

export default Remarkable;
