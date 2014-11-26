'use strict';

import React from 'react';
import Markdown from 'remarkable';

var md = new Markdown('full');

var Remarkable = React.createClass({

  getDefaultProps() {
    return {
      component: 'div',
    };
  },

  render() {
    var Component = this.props.component;

    return (
      <Component>
        {this.source()}
      </Component>
    );
  },

  source() {
    if (this.props.source) {
      return <span dangerouslySetInnerHTML={{ __html: renderMarkdown(this.props.source) }} />;
    }
    else {
      return React.Children.map(this.props.children, function(child) {
        if (typeof child === 'string') {
          return <span dangerouslySetInnerHTML={{ __html: renderMarkdown(child) }} />;
        }
        else {
          return child;
        }
      });
    }
  }

});

function renderMarkdown(source) {
  return md.render(source);
}

export default Remarkable;
