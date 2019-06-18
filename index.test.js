import { runTests, test } from 'https://deno.land/x/testing/mod.ts'
import { assertEquals } from 'https://deno.land/x/testing/asserts.ts'
import minimatch from './index.js'

test({
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

runTests()
