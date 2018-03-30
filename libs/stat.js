const fs = require('fs')
module.exports = (...arg) => new Promise((resolve, reject) => {
  fs.stat(...arg, (err, ...arg) => {  
    err ? reject(err) : resolve(...arg)
  })
})