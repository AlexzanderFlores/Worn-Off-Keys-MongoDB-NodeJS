const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const userSchema = mongoose.Schema({
  email: reqString,
  username: reqString,
  password: reqString,
  messages: Number,
})

module.exports = mongoose.model('users', userSchema)
