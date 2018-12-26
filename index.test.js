import { test, assertEqual } from 'https://deno.land/x/testing/testing.ts'
import minimatch from './index.js'

test({
  name: 'minimatch',
  fn () {
    assertEqual(minimatch('bar.foo', '*.foo'), true)
  }
})
