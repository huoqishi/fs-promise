# fs API promise

> fs API promise file
```js
  const fs = require('fs-promise-polyfill')
  fs.readFile(path).then(data => {
    console.log(data)
  })
```

> Even a synchronous API, it does not need to use try-catch
```js
  // return the data or instanceof Error
  const data = fs.readFileSync(path, 'utf-8')
  console.log(data instanceof Error)
  console.log(data)
  // or
  // return the data or null
  const data = fs.readFileSyncNull(path, 'utf-8')
  console.log(data)
  // or
  fs.readFileSyncP(path, 'utf-8').then(data => {
    console.log(data)
  })
```


## API List

- for native
  + [ ] constants
  + [ ] Stats
  + [ ] F_OK
  + [ ] R_OK
  + [ ] W_OK
  + [ ] X_OK
  + [x] access
  + [x] accessSync
  + [x] exists
  + [x] existsSync
  + [x] readFile
  + [x] readFileSync
  + [x] close
  + [x] closeSync
  + [x] open
  + [x] openSync
  + [x] read
  + [x] readSync
  + [x] write
  + [x] writeSync
  + [x] rename
  + [x] renameSync
  + [x] truncate
  + [x] truncateSync
  + [x] ftruncate
  + [x] ftruncateSync
  + [x] rmdir
  + [x] rmdirSync
  + [x] fdatasync
  + [x] fdatasyncSync
  + [x] fsync
  + [x] fsyncSync
  + [x] mkdir
  + [x] mkdirSync
  + [x] readdir
  + [x] readdirSync
  + [x] fstat
  + [x] lstat
  + [x] stat
  + [x] fstatSync
  + [x] lstatSync
  + [x] statSync
  + [x] readlink
  + [x] readlinkSync
  + [x] symlink
  + [x] symlinkSync
  + [x] link
  + [x] linkSync
  + [x] unlink
  + [x] unlinkSync
  + [x] fchmod
  + [x] fchmodSync
  + [x] chmod
  + [x] chmodSync
  + [x] fchown
  + [x] fchownSync
  + [x] chown
  + [x] chownSync
  + [ ] _toUnixTimestamp
  + [x] utimes
  + [x] utimesSync
  + [x] futimes
  + [x] futimesSync
  + [x] writeFile
  + [x] writeFileSync
  + [x] appendFile
  + [x] appendFileSync
  + [x] watch
  + [x] watchFile
  + [x] unwatchFile
  + [x] realpathSync
  + [x] realpath
  + [x] mkdtemp
  + [x] mkdtempSync
  + [x] copyFile
  + [x] copyFileSync
  + [ ] createReadStream
  + [ ] ReadStream
  + [ ] FileReadStream
  + [ ] createWriteStream
  + [ ] WriteStream
  + [ ] FileWriteStream
- extensions
  + [x] exsits
  + [x] exsitsSync
  + [x] mkdirSync