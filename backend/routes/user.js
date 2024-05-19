const express = require('express')
const {
  login,
  readAllUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController')

const router = express.Router()

// Get API
router.get('/', (req, res) => {
  res.json({message: 'Welcome to the Boba API!'})
})

// Handle Login
router.post('/login', login)

// Read Users
router.get('/users', readAllUsers)

// Create User
router.post('/users', createUser)

// Read User by ID
router.get('/users/:id', readUser)

// Update User by ID
router.patch('/users/:id', updateUser)

// Delete User by ID
router.delete('/users/:id', deleteUser)

module.exports = router;