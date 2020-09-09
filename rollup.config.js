import json from '@rollup/plugin-json'

export default {
  input: 'src/index.js',
  output: {
    format: 'esm',
    file: 'dist/bundle.js',
  },
  plugins: [
    json(),
  ],
}
