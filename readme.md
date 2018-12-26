# deno-minimatch

[![travis-ci build status](https://api.travis-ci.org/chrisdothtml/deno-minimatch.svg?branch=master)](https://travis-ci.org/chrisdothtml/deno-minimatch)

> A [deno](https://github.com/denoland/deno) port of [minimatch](https://github.com/isaacs/minimatch)

# Use

See [minimatch docs](https://github.com/isaacs/minimatch#usage) for full usage info

```js
import minimatch from 'https://raw.githubusercontent.com/chrisdothtml/deno-minimatch/master/index.js'

minimatch('bar.foo', '*.foo')
//> true
```

# Contributing

```sh
# build dist file
make build

# run tests
make tests
```
