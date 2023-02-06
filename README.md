# stylelint-required-prefix

A [stylelint](https://stylelint.io/) custom rule to check if the given prefix in css class naming exists.

## Motivation

This plugin will be useful if we want CSS classes to have a required prefix.

For example, if you want to avoid conflicts with classes name that already exist in a theme you are using.

### Example:

CSS before

```css
.selector {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

CSS after

```css
.required-prefix-selector {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Installation

```
npm install @giovannicavallari/stylelint-required-prefix
```

## Usage

Add it to your stylelint config `plugins` array, then add `"giovannicavallari/stylelint-required-prefix"` to your rules.

### Options

- **prefix:** required prefix that every css class must start with
- **ignore:** css classes and selectors that should be ignored
(no dot in class name)

### Example

```js
// .stylelintrc
{
  // ...
  "plugins": [
    // ...
    "@giovannicavallari/stylelint-required-prefix"
  ],
  rules: {
    // ...
    "giovannicavallari/stylelint-required-prefix": [
      true,
      {
        "prefix": "gc-",
        "ignore": ["primary", "primary:hover"]
      }
    ]
  },
}
```
