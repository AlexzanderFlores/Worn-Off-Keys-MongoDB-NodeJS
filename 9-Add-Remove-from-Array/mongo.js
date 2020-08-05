const mongoose = require('mongoose')
const { mongoPass } = require('./config.json')
const mongoPath = `mongodb+srv://wornoffkeys:${mongoPass}@nest-networking-hbbee.mongodb.net/WornOffKeys?retryWrites=true&w=majority`

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  return mongoose
}
