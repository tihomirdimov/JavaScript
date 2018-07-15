const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/softuni-wiki',
    port: 3000
  },
  staging: {
  },
  nameion: {
    port: process.env.PORT
  }
}
