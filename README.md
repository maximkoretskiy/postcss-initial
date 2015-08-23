# PostCSS Size [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin to fallback `all: unset`.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/maximkoretskiy/postcss-all-unset.svg
[ci]:      https://travis-ci.org/maximkoretskiy/postcss-all-unset

```css
a{
  all: unset;
}
```

```css
a {
  /* reset all properties to default values*/
  all: unset;
  }
}
```

## Usage

```js
postcss([ require('postcss-all-unset') ])
```

See [PostCSS] docs for examples for your environment.
