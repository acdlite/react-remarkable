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

        {/* Or pass it as children} */}
        {/* You can nest React components, too */}
        <Markdown>
          ## Reasons React is great

          1. Server-side rendering
          2. This totally works:

          <SomeOtherAmazingComponent />

          Pretty neat!
        </Markdown>
      </div>
    );
  }

});

```

## License
MIT
