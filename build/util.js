import fs from 'fs'
import { resolve } from 'path'

export const COMPONENTS_DIR = resolve(__dirname, '../components')

export function getComponents() {
  const files = fs.readdirSync(COMPONENTS_DIR, {
    withFileTypes: true,
  })
  return files.map(o => {
    const isDir = o.isDirectory()
    const realPath = `${COMPONENTS_DIR}/${o.name}${isDir ? '/index.tsx' : ''}`
    return {
      ...o,
      realPath,
      isDir,
    }
  })
}