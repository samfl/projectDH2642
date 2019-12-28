const mongoose = require('mongoose');
const config = require('config');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Database Configuration
const mongoDB = config.get('mongoDbConStr');

// MongoDB Connection with arguments to remove deprecation warnings
mongoose
  .connect(mongoDB, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true, })
  .then(() => console.log('MongoDB Connected ..'))
  .catch(err => console.log("Could not Connect to DB due to: " + err));

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Starts the server and listens on 'port' for connections
app.listen(port, () => console.log("Server started on port " + port + " .."));