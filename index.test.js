/* global Deno */

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import minimatch from './index.js'

Deno.test({
  name: 'minimatch',
  fn() {
    const mmInstance = new minimatch.Minimatch('*.js')

    assertEquals(minimatch('bar.foo', '*.foo'), true)
    assertEquals(minimatch('bar.foo', '*.+(bar|foo)'), true)
    assertEquals(minimatch('bar.foo', '*.bar'), false)
    assertEquals(['foo.js', 'foo.txt'].filter(minimatch.filter('*.js')), [
      'foo.js',
    ])
    assertEquals(mmInstance.match('foo.js'), true)
    assertEquals(mmInstance.makeRe() instanceof RegExp, true)
  },
})

Deno.runTests()
