# easywebpack-js

javascript file pack for easywebpack.

## Install

```bash
$ npm i easywebpack-js --save-dev
```

## Usage

```js
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
   "build:test": "cross-env BUILD_ENV=test NODE_ENV=development node build/index.j",
   "build:prod": "cross-env BUILD_ENV=prod NODE_ENV=production node build/index.js",
 }
}
```

## License

[MIT](LICENSE)