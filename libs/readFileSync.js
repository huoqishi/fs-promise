const fs = require('fs')
/**
 * 同步读取文件
 */
module.exports = (...arg) => new Promise((resolve, reject) => {
  let data
  try {
    data = fs.readFileSync(...arg)
    resolve(data)
  } catch (e) {
    reject(e)
  }
})