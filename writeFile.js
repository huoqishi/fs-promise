const fs = require('fs')
/**
 * 异步定义文件
 */
module.exports = (...arg) => new Promise((resolve, reject) => {
  fs.writeFile(...arg,  err => err ? reject(err) : resolve())
})