# easywebpack-js


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/easywebpack-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/easywebpack-js
[travis-image]: https://img.shields.io/travis/hubcarl/easywebpack-js.svg?style=flat-square
[travis-url]: https://travis-ci.org/hubcarl/easywebpack-js
[codecov-image]: https://codecov.io/gh/hubcarl/easywebpack-js/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/hubcarl/easywebpack-js
[david-image]: https://img.shields.io/david/hubcarl/easywebpack-js-js.svg?style=flat-square
[david-url]: https://david-dm.org/hubcarl/easywebpack-js
[snyk-image]: https://snyk.io/test/npm/easywebpack-js/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/easywebpack-js
[download-image]: https://img.shields.io/npm/dm/easywebpack-js.svg?style=flat-square
[download-url]: https://npmjs.org/package/easywebpack-js

webpack javascript file compress for easywebpack.

## Install

```bash
$ npm i easywebpack-js --save-dev
```

## Usage

```js
// build/index.js
const easywebpack = require('easywebpack-js');
const config = {
  env: process.env.BUILD_ENV,
  entry: {
    'index': 'lib/index.js'
  }
};
easywebpack.build(config);
```

## Run

```js
{
 "scripts": {
   "build:test": "cross-env BUILD_ENV=test NODE_ENV=development node build/index.js",
   "build:prod": "cross-env BUILD_ENV=prod NODE_ENV=production node build/index.js",
 }
}
```

## License

[MIT](LICENSE)