const fs = require('fs')
module.exports = (...arg) => new Promise((resolve, reject) => {
  let data
  try {
    data = fs.accessSync(...arg)
    resolve(data)
  } catch (e) {
    reject(e)
  }
})