const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const mongoose = require('mongoose')
const config = require('../configs')

const db = {}

mongoose.connect(
  `mongodb://${config.hostName}:27017/${config.dbName}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log(err)
      process.exit(1)
    }
  }
)

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file.slice(-3) === '.js' && file !== basename
  )
  .forEach(file => {
    const model = require(path.resolve(__dirname, file))
    db[model.modelName] = model
  })

module.exports = db
