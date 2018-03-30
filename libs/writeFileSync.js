const fs = require('fs')
/**
 * 同步定入文件
 */
module.exports = (...arg) => new Promise((resolve, reject) => {
  let data
  try {
    data = fs.writeFileSync(...arg)
    resolve(data)
  } catch (e) {
    reject(e)
  }
})