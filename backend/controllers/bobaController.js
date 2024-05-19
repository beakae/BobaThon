const Drink = require('../models/drinkModel')
const mongoose = require('mongoose')

// Read all drinks
const readAllDrinks = async (req, res) => {
  const drinks = await(Drink.find({})).sort({price: 1})

  res.status(200).json(drinks)
}

// Create a drink
const createDrink = async (req, res) => {
  const {name, store, price, size, calories, ingredients, description, isDeal, discountPercentage} = req.body

  // Add to DB
  try {
    const drink = await Drink.create ({
      name, 
      store,
      price, 
      size, 
      calories, 
      ingredients, 
      description, 
      isDeal, 
      discountPercentage
    })
    res.status(200).json(drink)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Read drink by ID
const readDrink = async (req, res) => {
  const { id } = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const drink = await Drink.findById(id)

  if (!drink) {
    return res.status(404).json({error: 'Drink not found'})
  }

  res.status(200).json(drink)
}

// Update a drink
const updateDrink = async(req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const drink = await Drink.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!drink) {
    return res.status(404).json({error: 'Drink not found'})
  }

  res.status(200).json(drink)
}

// Delete a drink
const deleteDrink = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const drink = await Drink.findOneAndDelete({_id: id})

  if (!drink) {
    return res.status(400).json({error: 'Drink not found'})
  }

  res.status(200).json(drink)
}

module.exports = {
  readAllDrinks,
  createDrink,
  readDrink,
  updateDrink,
  deleteDrink,
}