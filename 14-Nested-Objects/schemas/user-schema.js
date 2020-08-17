const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const messageSchema = mongoose.Schema(
  {
    userId: reqString,
    text: reqString,
  },
  {
    timestamps: true,
  }
)

const userSchema = mongoose.Schema(
  {
    email: reqString,
    username: reqString,
    password: reqString,
    messages: [messageSchema],
    nameHistory: [String],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('users', userSchema)
