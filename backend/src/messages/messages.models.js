const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  cash: {
    type: Number,
    min: [5, 'you can\'t have less than five dollars'],
    default: 1000
  }
})

module.exports = mongoose.model('user', userSchema)
