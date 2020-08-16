import { readdirSync } from 'fs'
import { resolve } from 'path'
import merge from 'webpack-merge'
import { exists } from './utils'
import BaseConfig from './webpack.config'

const COMPONENT_DIR = resolve(__dirname, '../components')

const files = readdirSync(COMPONENT_DIR, {withFileTypes: true}).map((file) => {
  const dirPath = `${COMPONENT_DIR}/${file.name}`
  let path = ''
  if (file.isDirectory()) {
    const tsx = `${dirPath}/index.tsx`
    const jsx = `${dirPath}/index.jsx`
    const js = `${dirPath}/index.js`
    if (exists(tsx)) path = tsx
    else if (exists(jsx)) path = jsx
    else if (exists(js)) path = js
  }
  return {
    name: file.name,
    path,
  }
}).filter(file => file.path !== '')

const entry = files.reduce<{ [k: string]: any }>((res, item) => {
  res[item.name] = item.path
  return res
}, {})

export default merge(BaseConfig, {
  entry,
  mode: 'production',
})
