const User = require('../models/userModel')
const mongoose = require('mongoose')

// Handle Login
const login = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username: username });

  if (!user) {
    return res.status(404).json({error: 'User not found'})
  }

  if (user.password !== password) {
    return res.status(401).json({error: 'Invalid password'})
  }

  res.status(200).json(user)
}

// Read Users
const readAllUsers = async (req, res) => {
  const users = await User.find({}).sort({createdAt: -1})

  res.status(200).json(users)
}

// Create User
const createUser = async (req, res) => {
  const { username, password, allergies } = req.body

  // Add to DB
  try {
    const user = await User.create ({
      username,
      password,
      allergies
    })

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Read User by ID
const readUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({error: 'User not found'})
  }

  res.status(200).json(user)
}

// Update a User
const updateUser = async(req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!user) {
    return res.status(404).json({error: 'User not found'})
  }

  res.status(200).json(user)
}

// Delete a User
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const user = await User.findOneAndDelete({_id: id})

  if (!user) {
    return res.status(400).json({error: 'User not found'})
  }

  res.status(200).json(user)
}

// Add to Cart
const addToCartName = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!user) {
    return res.status(404).json({error: 'User not found'})
  }

  res.status(200).json(user)
}

const addToCartStore = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!user) {
    return res.status(404).json({error: 'User not found'})
  }

  res.status(200).json(user)
}

const addToCartPrice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID'})
  }

  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!user) {
    return res.status(404).json({error: 'User not found'})
  }

  res.status(200).json(user)
}

module.exports = {
  login,
  readAllUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser,
}