import * as React from 'react';
import Markdown from 'remarkable';

export type Props = {
  container?: string;
  options?: {};
  source?: string;
  md?: Markdown;
};

class Remarkable extends React.Component<Props, {}> {
  md?: Markdown;

  componentWillUpdate(nextProps, nextState) {
      if (nextProps.md !== this.props.md || nextProps.options !== this.props.options) {
        this.md = undefined;
      }
  }

  render() {
    this.md = this.md || this.props.md || new Markdown(this.props.options || {});
    var Container = this.props.container || 'div';
    return (
      <Container>
        {this.content(this.md)}
      </Container>
    );
  }

  content(md: Markdown) {
    if (this.props.source) {
      return <span dangerouslySetInnerHTML={{ __html: md.render(md, this.props.source) }} />;
    }
    else {
      return React.Children.map(this.props.children, child => {
        if (typeof child === 'string') {
          return <span dangerouslySetInnerHTML={{ __html: md.render(md, child) }} />;
        }
        else {
          return child;
        }
      });
    }
  }
};

export default Remarkable;
