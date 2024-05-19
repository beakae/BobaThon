require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bobaRouter = require('./routes/boba')
const userRouter = require('./routes/user')

var bodyParser = require('body-parser')

// Create express app
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/boba', bobaRouter)
app.use('/api/user', userRouter)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}!!`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
