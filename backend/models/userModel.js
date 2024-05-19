const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: {
    type: [String],
    required: false
  },
  bubbles: {
    type: Number,
    required: true,
    default: 0
  },
  cartName: {
    type: String,
    required: true,
    default: ' '
  },
  cartPrice: {
    type: Number,
    required: true,
    default: 0
  },
  cartStore: {
    type: String,
    required: true,
    default: ' '
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)