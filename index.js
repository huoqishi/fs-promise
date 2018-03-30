const fs = require('./libs/autoPromise')
const extensions = require('./extensions')
module.exports = Object.assign(fs, extensions)