react-remarkable
=================

A React component for rendering Markdown with [remarkable](https://github.com/jonschlinkert/remarkable).

```
npm install --save react-remarkable
```

## Usage

```jsx

var React = require('react');
var Markdown = require('react-remarkable');
var RemarkableEmoji = require('remarkable-emoji');
var twemoji = require('twemoji');

var MyComponent = React.createClass({

  render() {
    return (
      <div>
        {/* Pass Markdown source to the `source` prop */}
        <Markdown source="**Markdown is awesome!**" />

        {/* Or pass it as children */}
        {/* You can nest React components, too */}
        <Markdown>
          ## Reasons React is great

          1. Server-side rendering
          2. This totally works:

          <SomeOtherAmazingComponent />

          Pretty neat!
        </Markdown>

        {/* Pass remarkable plugins to the `plugins` prop */}
        {/* and transforms to the `transforms` prop */}
        <Markdown source="**Markdown is awesome!**" plugins={[RemarkableEmoji]} transforms={[twemoji.parse]} />
      </div>
    );
  }

});

```

Available props:

- `options` - Hash of Remarkable options
- `source`  - Markdown source. You can also pass the source as children, which allows you to mix React components and Markdown.
- `container` - Element to use as container. Defaults to `span`.
- `plugins` - Array of remarkable plugins
- `transforms` - Array of string transforms

## License
MIT
