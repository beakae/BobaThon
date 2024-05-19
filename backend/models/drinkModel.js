const mongoose = require('mongoose')

const Schema = mongoose.Schema

const drinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  store: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: false
  },
  calories: {
    type: Number,
    required: false
  },
  ingredients: {
    type: [String],
    required: false
  },
  description: {
    type: String,
    required: false
  },
  isDeal: {
    type: Boolean,
    default: false
  },
  discountPercentage: {
    type: Number,
    default: 0
  }
}, {timestamps: true})

module.exports = mongoose.model('Drink', drinkSchema)