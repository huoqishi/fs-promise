const fs = require('fs')
/**
 * 异步读取文件
 */
module.exports = (...arg) => new Promise((resolve, reject) => {
  fs.readFile(...arg, (err, data) => err ? reject(err) : resolve(data))
})