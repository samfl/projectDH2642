const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../../models/user');

// Save a new user - POST api/users
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Input guard
  if(!username || !password) {
    return res.status(400).json({ message: 'Enter all fields.' });
  }

  // Username guard
  User.findOne({ username }).then(user => {
      if(user) return res.status(400).json({ message: 'User exists already.' });
      
      const newUser = new User({ username, password });

      // Boiler plate: Create salt & hash
      bcrypt.genSalt(15, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      username: user.username
                    }
                  });
                }
              )
            });
        })
      })
    })
});

//removes favorite team to a user with specific id
//TODO needs to check if team already exists in favorites(by checking id)
//TODO addToSet wont add if an object already exists, but team objects can change (lastUpdated field of teams).
router.patch('/addTeam/:userId', (req, res) => {
    User.updateOne({ _id: req.params.userId }, { $addToSet: {favTeams: req.body} })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});

//removes favorite team from a user with specific id
router.patch('/removeTeam/:userId', (req, res) => {
    User.updateOne({ _id: req.params.userId }, { $pull: {"favTeams": {id: req.body.id}} })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});

//gets all users
router.get('/', (req, res) =>{
    User.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        })
});
module.exports = router;