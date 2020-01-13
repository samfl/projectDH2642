const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/user');

const jwtSecret = process.env.jwtSecret; 

// Authenticate the user - POST api/auth
// Public
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Input guard
  if(!username || !password) {
    return res.status(400).json({ message: 'Enter all fields.' });
  }

  // Username guard
  User.findOne({ username })
    .then(user => {
      if(!user) return res.status(400).json({ message: 'No such user.' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ message: 'Wrong password.' });

          jwt.sign(
            { _id: user._id },
            jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  _id: user._id,
                  username: user.username,
                  favTeams: user.favTeams
                }
              });
            }
          )
        })
    })
});

// Delete a user?? 
router.get('/delete', function(req, res){
  var id = req.query.id;
  User.find({_id: id}).remove().exec(function(err, expense) {
   if(err)
    res.send(err)
   res.send('User successfully deleted!');
  })
 });

// Get user data - GET api/auth/user
// Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user._id)
    .select('-password')
    .then(user => res.json(user));
});

// Delete a user
router.get('/user', auth, (req, res) => {
  User.deleteOne({ "_id": req.user.id})
    .then(user => res.json(user));
});

module.exports = router;