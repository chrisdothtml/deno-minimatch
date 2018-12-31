# deno-minimatch

[![StandardJS code style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![travis-ci build status](https://api.travis-ci.org/chrisdothtml/deno-minimatch.svg?branch=master)](https://travis-ci.org/chrisdothtml/deno-minimatch)

> A [deno](https://github.com/denoland/deno) port of [minimatch](https://github.com/isaacs/minimatch)

# Use

See [minimatch docs](https://github.com/isaacs/minimatch#usage) for full usage info

```js
import minimatch from 'https://deno.land/x/minimatch/index.js'

minimatch('bar.foo', '*.foo')
//> true
```

# Contribute

```sh
# generate build file
yarn build

# test build file
yarn test
```
