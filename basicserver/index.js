// Import the Express framework into your project
const express = require('express')

// Import and configure dotenv to load environment variables from .env
require('dotenv').config()

// Create an instance of the Express application that will handle requests and routes
const app = express()

// Set the port for the server to run on. 
// We use the value from the .env file or default to 3000 if not provided.
const port = process.env.PORT || 3000

// Define a GET route for the root URL (/).
// When a user opens the homepage, the server responds with "Hello World!".
app.get('/', (req, res) => {
  res.send('Hello World!')  // Sends a plain-text response to the browser
})

// Define a GET route for the "/hitesh" URL.
// When the user visits /hitesh, the server responds with "hitestdotcom".
app.get('/hitesh', (req, res) => {
  res.send('hitestdotcom')  // Sends a plain-text response to the browser
})

// Define a GET route for the "/login" URL.
// When the user visits /login, the server responds with an HTML message.
app.get('/login', (req, res) => {
  res.send('<h1>Hello Boyy</h1>')  // Sends an HTML response to the browser
})

// Start the server and make it listen for incoming requests on the specified port.
// If the server starts successfully, it will log the message to the console.
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`)
})
