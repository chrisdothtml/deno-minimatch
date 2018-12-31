import alias from 'rollup-plugin-alias'
import cjs from 'rollup-plugin-commonjs'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'esm'
  },
  external: [
    'https://deno.land/x/path/index.ts'
  ],
  plugins: [
    resolve({
      preferBuiltins: false
    }),
    cjs(),
    alias({
      path: path.resolve(__dirname, 'src/path.js')
    })
  ]
}
