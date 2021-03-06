# redux-intl-react

React bindings for localization with MessageFormat and optional ECMA Intl support using redux-intl-connect.

[![Build Status][build-badge]][build-link]
[![Coverage Status][coveralls-badge]][coveralls-link]
[![npm package][npm-badge]][npm-link]
[![PRs Welcome][pr-welcome-badge]][pr-welcome-link]

## PSA
If you're looking to support [react-intl](https://github.com/yahoo/react-intl) in redux, please use [react-intl-redux](https://github.com/ratson/react-intl-redux) instead.

The main difference between this library and the aforementioned is that this does not depend on the availability of ECMA Intl or it's polyfill.

## About
`redux-intl-react` provides React specific bindings for localization using [redux-intl-connect](https://www.github.com/yeojz/redux-intl-connect) with [MessageFormat](http://userguide.icu-project.org/formatparse/messages) support.


Basic functionality **does not** require browser support or polyfill for [ECMA-Intl](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl). Should you require those, you can enable it. By setting `ecmaSupport` to `true` in the reducer.

## Installation

Install the library:

```
npm install redux-intl-react redux react --save
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, FormattedMessage} from 'redux-intl-react'
import store from '<project-path>/store'

const App = () => (
  <Provider store={store}>
    <FormattedMessage id='translation_id' />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('container'));
```

## Alias methods

Both `updateIntl` and `intlReducer` are aliased in this library. As such, you can do the following:

```js
import {updateIntl, intlReducer} from 'redux-intl-react';
```

instead of

```js
import {updateIntl, intlReducer} from 'redux-intl-connect';
```

For usage instructions, please refer to the [README](https://github.com/yeojz/redux-intl-connect/blob/master/README.md#available-methods) of `redux-intl-connect`


## Convenience methods

This library provides some components for convenince. These are essentially Higher Order Functions over `react-redux`;

### connect vs Redux connect

Instead of doing the following:

```js
import {injectIntl} from 'redux-intl-react';
import connect from 'react-redux';

const Component = (props) => (
	...code
);

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Component));
```

you can do this instead:

```js
import {connect} from 'redux-intl-react';

const Component = (props) => (
	...code
);

export default connect(mapStateToProps, mapDispatchToProps)(Component);
```


### Provider vs IntlProvider

`Provider` is just a convenient wrapper for use if you are using `react-redux` provider as your root.

In the event that you already have a custom provider in use that already wraps the redux provider, you can use IntlProvider instead.

```js
import React from 'react';
import {IntlProvider} from 'redux-intl-react';
import {Provider} from 'SOME_SPECIAL_PROVIDER';

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <App />
    </IntlProvider>
  </Provider>
);
```

## License

`redux-intl-react` is [BSD licensed](./LICENSE)

## See also

-   [redux-intl-connect](https://www.github.com/yeojz/redux-intl-connect)

## Acknowledgement

Highly influenced by the following libraries:

-   [react-intl](https://github.com/yahoo/react-intl)
-   [react-intl-redux](https://github.com/ratson/react-intl-redux)


[npm-badge]: https://img.shields.io/npm/v/redux-intl-react.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/redux-intl-react

[build-badge]: https://img.shields.io/circleci/project/github/yeojz/redux-intl-react/master.svg?style=flat-square
[build-link]: https://circleci.com/gh/yeojz/redux-intl-react.svg

[coveralls-badge]: https://img.shields.io/coveralls/yeojz/redux-intl-react.svg?style=flat-square
[coveralls-link]: https://coveralls.io/github/yeojz/redux-intl-react

[pr-welcome-badge]: https://img.shields.io/badge/PRs-Welcome-ff69b4.svg?style=flat-square
[pr-welcome-link]: https://github.com/yeojz/redux-intl-react/blob/master/CONTRIBUTING.md
