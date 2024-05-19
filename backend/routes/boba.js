const express = require('express')
const {
  readAllDrinks,
  createDrink,
  readDrink,
  updateDrink,
  deleteDrink,
} = require('../controllers/bobaController')

const router = express.Router()

// Get API
router.get('/', (req, res) => {
  res.json({message: 'Welcome to the Boba API!'})
})

// Read Drinks
router.get('/drinks', readAllDrinks)

// Create a drink
router.post('/drinks', createDrink)

// Read drink by ID
router.get('/drinks/:id', readDrink)

// Update Drink by ID
router.patch('/drinks/:id', updateDrink)

// Delete Drink by ID
router.delete('/drinks/:id', deleteDrink)

module.exports = router;