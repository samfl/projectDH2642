const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
require('dotenv').config();
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
// Database Configuration
const mongoDB = process.env.MONGODB_URI || "mongodb://sam:kanye123@ds263368.mlab.com:63368/heroku_hf438kbj";

// MongoDB Connection with arguments to remove deprecation warnings
mongoose
  .connect(mongoDB, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true, })
  .then(() => console.log('MongoDB Connected ..'))
  .catch(err => console.log("Could not Connect to DB due to: " + err));

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.get('/configvars', (req, res) =>{
  res.json(process.env.API_CONFIG)
});

// Starts the server and listens on 'port' for connections
app.listen(port, () => console.log("Server started on port " + port + " .."));