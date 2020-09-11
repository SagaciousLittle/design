import json from '@rollup/plugin-json';
import ts from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';
import ignoreImports from './ignore-imports';

export default {
  input: {
    index: 'components/index.ts',
  },
  output: {
    format: 'esm',
    sourcemap: true,
    dir: 'dist',
    chunkFileNames: '[name].js',
    manualChunks (id) {
      const matchRes = id.match(/components\/(.*)\/index\.(t|j)sx?$/)
      if (matchRes && matchRes[1]) {
        return `${matchRes[1]}/index`
      }
    },
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
    ignoreImports(),
    ts({
      jsx: 'preserve',
    }),
  ],
}
