import json from '@rollup/plugin-json'
import ts from '@rollup/plugin-typescript'
import jsx from 'acorn-jsx'
import { resolve } from 'path'

export default {
  input: 'src/Button/index.tsx',
  output: {
    format: 'esm',
    sourcemap: true,
    dir: resolve(__dirname, '../aaa/Button'),
  },
  external: [
    'react',
    'react-dom',
  ],
  acornInjectPlugins: [
    jsx(),
  ],
  plugins: [
    json(),
    ts({
      jsx: 'preserve',
      outDir: resolve(__dirname, '../aaa/Button'),
    }),
  ],
}
