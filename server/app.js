// Loads our database connection
require('./db/config');
const express = require('express'),
  path = require('path'),
  cors = require('cors');

const app = express();

/* enables the Express server to respond to requests, makes your server 
accessible to any domain that requests a resource from your server via a browser */
app.use(cors());

// Middleware
app.use(express.json());

// routes
// we'll fill these in later

// These lines will serve any static files once we push this to Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
