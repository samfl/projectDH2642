const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express(); 

const User = require('./models/user');
const users = require('./routes/users');

app.use(bodyParser.json());

// Create-react-app default: 3000 ...
const port = process.env.PORT || 5000; 

// DB config
const db = require('./config/keys').mongoConnectionString;

// Connect to Mongo
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB connected.."))
    .catch(err => console.log(err));

// Use routes
app.use('/users', users);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Just a test
app.get('/', (req, res) => {
    const testData = [
        {id: 1, name: 'Mané', team: 'Liverpool'},
        {id: 2, name: 'Salah', team: 'Liverpool'},
        {id: 3, name: 'Firminho', team: 'Liverpool'}
    ];

    res.json(testData); 
})

app.post('/signUp', (req, res) => {
    var username = req.body.username; 
    var password = req.body.password; 

    var newUser = new User(); 
    newUser.username = username;
    newUser.password = password; 
    newUser.save((err, savedUser) => {
        if(err) {
            console.log(err);
            return res.status(500).send();
        } else {
            return res.status(200).send(); 
        }
    })
})

app.listen(port, () => console.log("Server started on port "+ port + ".."));

