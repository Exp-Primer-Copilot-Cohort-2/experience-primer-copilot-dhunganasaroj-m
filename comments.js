// Create web server

// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Import the comments module
const comments = require('./comments');

// Define a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Define a route to get a single comment
app.get('/comments/:id', (req, res) => {
  res.json(comments.getComment(req.params.id));
});

// Start the server on port 4001
app.listen(4001, () => {
  console.log('Server is listening on http://localhost:4001');
});