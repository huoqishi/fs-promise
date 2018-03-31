// const fs = require('fs')
const path = require('path')
const fs = require('../libs/autoPromise')

/**
 * 检测文件或者文件夹是否存在
 * @param  {string} path 需要检测的文件或者文件夹路径
 * @return {boolean}     为 true 表示存在
 */
const obj = module.exports = {}
obj.existsSync = path => {
  let exists = fs.accessSync(path, fs.F_OK)
  if (exists instanceof Error) {
    return false
  }
  return true
}
obj.exists = path => new Promise((resolve, reject) => {
  fs.access(path, fs.F_OK).then(resolve, reject)
})

/**
 * 检测路径是否是一个文件
 * @param {string} optPath 需要检测的路径
 */
// obj.isFileSync = optPath => {
//   return obj.existsSync(optPath) ? fs.statSync(optPath).isFile() : false
// }

// obj.isFile = optPath => new Promise((resolve, reject) => {
//   obj.exists(optPath).then(() => {
//     fs.stat(optPath).then((stat) => {
//       stat.isFile() ? resolve() : reject(new Error('false'))
//     }, reject)
//   }, reject)
// })

/**
 * 检测路径是不是一个目录
 * @param {string} optPath 需要检测的路径
 */
// obj.isDirectorySync = optPath => {
//   return obj.existsSync(optPath) ? fs.statSync(optPath).isDirectory() : false
// }
// obj.isDirectory = optPath => new Promise((resolve, reject) => {
//   obj.exists(optPath).then(() => {
//     fs.stat(optPath).then((stat) => {
//       stat.isDirectory() ? resolve() : reject(new Error('false'))
//     }, reject)
//   }, reject)
// })

/**
 * 新建文件夹
 * @param  {[type]} dirpath [description]
 * @return {[type]}         [description]
 */
obj.mkdirSync = dirname => {
  if (fs.existsSyncNull(dirname)) {
    return true
  }
  if (obj.mkdirSync(path.dirname(dirname))) {
    const result = fs.mkdirSyncNull(dirname)
    return result !== null
  }
}
