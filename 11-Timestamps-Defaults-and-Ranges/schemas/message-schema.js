const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  text: String,
})

module.exports = mongoose.model('message', messageSchema, 'message')
