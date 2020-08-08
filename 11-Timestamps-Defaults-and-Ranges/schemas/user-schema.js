const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const userSchema = mongoose.Schema(
  {
    email: reqString,
    username: reqString,
    password: reqString,
    messages: {
      type: Number,
      default: 5,
      min: 0,
      max: 10,
    },
    nameHistory: [String],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('users', userSchema)
