// Importing the Express library
const express = require('express');

// Creating an instance of the Express application
const app = express();

// Defining a route to handle GET requests to the root URL '/'
app.get('/', (req, res) => {
  // Sending a response with "Hello, world!"
  res.send('Hello, world!');
});

// Starting the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
