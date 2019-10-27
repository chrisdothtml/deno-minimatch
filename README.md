# deno-minimatch

[![chrisdothtml code style](https://img.shields.io/badge/code_style-chrisdothtml-brightgreen.svg)](https://github.com/chrisdothtml/eslint-config)
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

No need to rebuild the dist file in pull requests as this is already handled by [a Github action](https://github.com/chrisdothtml/deno-minimatch/blob/master/.github/workflows/rebuild.yml).
