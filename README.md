# easywebpack-js

javascript file pack for easywebpack.

## Install

```bash
$ npm i easywebpack-js --save-dev
```

## Usage

### Node Build Mode

- write webpack build config for easywebpack-js

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

- node build mode

```js
{
 "scripts": {
   "build:test": "cross-env BUILD_ENV=test NODE_ENV=development node build/index.js",
   "build:prod": "cross-env BUILD_ENV=prod NODE_ENV=production node build/index.js",
 }
}
```


### easywebpack-cli

- write easywebpack-cli for easywebpack-js solution

```js
// ${app_root}/webpack.config.js
const easywebpack = require('easywebpack-js');
module.exports = {
  framework: 'js',
  entry: {
    'index': 'lib/index.js'
  }
};
```

- easywebpack-cli command build

```js
{
 "scripts": {
   "build:test": "easy build test",
   "build:prod": "easy build prod",
 }
}
```

## License

[MIT](LICENSE)