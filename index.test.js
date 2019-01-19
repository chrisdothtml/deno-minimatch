import { test, assertEqual } from 'https://deno.land/x/testing/mod.ts'
import minimatch from './index.js'

test({
  name: 'minimatch',
  fn () {
    const mmInstance = new minimatch.Minimatch('*.js')

    assertEqual(minimatch('bar.foo', '*.foo'), true)
    assertEqual(minimatch('bar.foo', '*.+(bar|foo)'), true)
    assertEqual(minimatch('bar.foo', '*.bar'), false)
    assertEqual(
      ['foo.js', 'foo.txt'].filter(minimatch.filter('*.js')),
      ['foo.js']
    )
    assertEqual(mmInstance.match('foo.js'), true)
    assertEqual(mmInstance.makeRe() instanceof RegExp, true)
  }
})
