const mongoose = require('mongoose')
const { mongoPass } = require('./config.json')
const mongoPath = `mongodb+srv://tutorial:${mongoPass}@mongodb-tutorial.hbbee.mongodb.net/test-db?retryWrites=true&w=majority`

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  return mongoose
}
