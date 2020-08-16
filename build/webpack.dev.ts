import { readdirSync } from 'fs'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import merge from 'webpack-merge'
import BaseConfig from './webpack.config'

const DEMO_DIR = resolve(__dirname, '../demo')

const files = readdirSync(DEMO_DIR, {withFileTypes: true}).filter(file => file.isDirectory()).map(file => file.name)

const entry = files.reduce<{ [k: string]: any }>((res, item) => {
  res[item] = `${DEMO_DIR}/${item}/index.js`
  return res
}, {})

export default merge(BaseConfig, {
  entry,
  mode: 'development',
  devServer: {
    open: true,
    contentBase: DEMO_DIR,
  },
  plugins: [
    ...files.map(file => {
      return new HtmlWebpackPlugin({
        title: file,
        template: resolve(DEMO_DIR, file, 'index.html'),
        filename: `${file}/index.html`,
        chunks: [file],
      })
    }),
  ],
})
