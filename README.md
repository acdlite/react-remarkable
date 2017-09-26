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

var MyComponent = React.createClass({

  render() {
    return (
      <div>
        {/* Pass Markdown source to the `source` prop */}
        <Markdown source="**Markdown is awesome!**" />

        {/* Or pass it as children */}
        {/* You can nest React components, too */}
        <Markdown>{`
          ## Reasons React is great

          1. Server-side rendering
          2. This totally works:

          <SomeOtherAmazingComponent />

          Pretty neat!
        `}</Markdown>
      </div>
    );
  }

});

```

Available props:

- `options` - Hash of Remarkable options
- `source`  - Markdown source. You can also pass the source as children, which allows you to mix React components and Markdown.
- `container` - Element to use as container. Defaults to `div`.

## Syntax Highlighting

### Atom

You can enable syntax highlighting in Atom using the following steps:

Go to Settings > Packages > language-babel Settings > Enter this for JavaScript Tagged Literal Grammar Extensions:

`"(?<=<Markdown>{)":source.gfm`

<img width="527" alt="screen shot 2017-05-28 at 9 04 27 am" src="https://cloud.githubusercontent.com/assets/108938/26529400/fe7ea216-4384-11e7-9eab-3259eb684648.png">

Shortly you'll see that markdown syntax highlighting is enabled.

<img width="449" alt="screen shot 2017-05-28 at 9 06 31 am" src="https://cloud.githubusercontent.com/assets/108938/26529401/fe7faf4e-4384-11e7-8977-f1fe39537524.png">

## License
MIT
