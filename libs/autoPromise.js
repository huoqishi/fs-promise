const fs = require('fs')
const obj = module.exports = Object.assign({}, fs)
const fsKeys = [
  // 'constants',
  // 'Stats',
  // 'F_OK',
  // 'R_OK',
  // 'W_OK',
  // 'X_OK',
  'access',
  'accessSync',
  'exists',
  'existsSync',
  'readFile',
  'readFileSync',
  'close',
  'closeSync',
  'open',
  'openSync',
  'read',
  'readSync',
  'write',
  'writeSync',
  'rename',
  'renameSync',
  'truncate',
  'truncateSync',
  'ftruncate',
  'ftruncateSync',
  'rmdir',
  'rmdirSync',
  'fdatasync',
  'fdatasyncSync',
  'fsync',
  'fsyncSync',
  'mkdir',
  'mkdirSync',
  'readdir',
  'readdirSync',
  'fstat',
  'lstat',
  'stat',
  'fstatSync',
  'lstatSync',
  'statSync',
  'readlink',
  'readlinkSync',
  'symlink',
  'symlinkSync',
  'link',
  'linkSync',
  'unlink',
  'unlinkSync',
  'fchmod',
  'fchmodSync',
  'chmod',
  'chmodSync',
  'fchown',
  'fchownSync',
  'chown',
  'chownSync',
  // '_toUnixTimestamp',
  'utimes',
  'utimesSync',
  'futimes',
  'futimesSync',
  'writeFile',
  'writeFileSync',
  'appendFile',
  'appendFileSync',
  'watch',
  'watchFile',
  'unwatchFile',
  'realpathSync',
  'realpath',
  'mkdtemp',
  'mkdtempSync',
  'copyFile',
  'copyFileSync',
  // 'createReadStream',
  // 'ReadStream',
  // 'FileReadStream',
  // 'createWriteStream',
  // 'WriteStream',
  // 'FileWriteStream'
  ]

fsKeys.forEach(key => {
  if (~key.indexOf('Sync')) {
    obj[key] = (...arg) => {
      let result
      try {
        result = fs[key](...arg)
      } catch (e) {
        result = e
      }
      return result
    }
    obj[key + 'Null'] = (...arg) => {
      let result
      try {
        result = fs[key](...arg)
      } catch (e) {
        result = null
      }
      return result
    }
    obj[key + 'P'] = (...arg) => new Promise((resolve, reject) => {
      try {
        const result = fs[key](...arg)
        resolve(result)
      } catch (e) {
        reject(e)
      }
    })
    return
  }
  obj[key] = (...arg) => {
    if (typeof arg[arg.length - 1] === 'function') {
      return fs[key](...arg)
    }
    return new Promise((resolve, reject) => {
    fs[key](...arg, (err, ...arg2) => {
      err ? reject(err) : resolve(...arg2)
    })
  })
  }
})