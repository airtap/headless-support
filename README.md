# headless-support

**Returns whether a given browser supports headless mode.**

[![npm status](http://img.shields.io/npm/v/headless-support.svg)](https://www.npmjs.org/package/headless-support)
[![node](https://img.shields.io/node/v/headless-support.svg)](https://www.npmjs.org/package/headless-support)
[![Travis build status](https://img.shields.io/travis/com/airtap/headless-support.svg?label=travis)](http://travis-ci.com/airtap/headless-support)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```js
const headless = require('headless-support')

console.log(headless('chromium', 59, 'linux')) // true
console.log(headless('edge', 59, 'win32'))     // false
console.log(headless('edge', 60, 'win32'))     // true
consoke.log(headless('ff', 56, 'darwin'))      // true
```

## API

### `headless(name[, version][, platform])`

Arguments:

- `name` (string): browser name, loosely matched with [`browser-names`](https://github.com/airtap/browser-names)
- `version` (number or string): browser version, either a major version number (e.g. `85`) or a full version string (`'85.0.564.68'`). If `version` is falsy then latest is assumed.
- `platform` (string): defaults to `process.platform`

Returns a boolean that indicates support of headless mode. For Chromium-based browsers it means they accept a `--headless` flag on the command line, for Firefox it means the browser accepts a `-headless` flag.

## Install

With [npm](https://npmjs.org) do:

```
npm install headless-support
```

## License

[MIT](LICENSE) © 2020-present Airtap contributors
