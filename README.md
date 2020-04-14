# ember-mutation-observer-modifier

Use [`MutationObserver`][mutation-observer] through an Ember Modifier

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-mutation-observer-modifier
```

## Usage

This addon provides an Ember [modifier][ember-modifier] for attaching a [`MutationObserver`][mutation-observer] to an element in your Ember template and calling an action when the observer fires. All configuration options supported by `MutationObserver#observe` are supported through the modifier.

In the following example, `this.onChange` will be called any time that `this.someAttrValue` is changed on the `div`, by observing the changes to the `some-attr` attribute.

```handlebars
<div some-attr={{this.someAttrValue}} {{observe-mutation this.onChange attributes=true}} />
```

Note that options for the `MutationObserver` can also be provided as the second positional parameter to the modifier.

```handlebars
<div some-attr={{this.someAttrValue}} {{observe-mutation this.onChange (hash attributes=true)}} />
```

Please consult the documentation for [`MutationObserverInit`][mutation-observer-init] for a full list of supported parameters.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

[mutation-observer]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
[mutation-observer-init]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit
[ember-modifier]: https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_out-of-component-modifications
