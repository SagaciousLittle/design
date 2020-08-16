import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { resolve } from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
  output: {
    filename: `[name]/index.js`,
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      ['@']: resolve(__dirname, '..'),
    },
    extensions: [
      '.js', 'jsx', '.ts', '.tsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}

export default config
