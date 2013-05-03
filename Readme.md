
# editable-shortcuts

  add keyboard shortcuts to [Editable](https://github.com/yields/editable) instance.

## Installation

    $ component install yields/editable-shortcuts

## Example

```js
var el = document.querySelector(el);
shortcuts(new Editable(el))
.map('command + z', 'undo')
.map('command + y', 'redo')
.map('command + b', 'bold')
.map('command + i', 'italic');
```

## License

  MIT
