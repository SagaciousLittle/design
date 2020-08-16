import { statSync } from 'fs'

/**
 * 判断文件是否存在
 *
 * @export
 * @param {string} path
 * @returns
 */
export function exists(path: string) {
  let f = false
  try {
    statSync(path)
    f = true
  } catch (e) {
    f = false
  }
  return f
}