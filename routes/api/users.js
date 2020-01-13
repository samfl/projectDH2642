const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');

const jwtSecret = process.env.jwtSecret; 

// Save a new user - POST api/users
router.post('/', (req, res) => {

  const { username, password } = req.body;
  if(!username || !password) return res.status(400).json({ message: 'Enter all fields.' });

  User.findOne({ username }).then(user => {
      if(user) return res.status(400).json({ message: 'User exists already.' });
      const newUser = new User({ username, password });

      // Boiler
      bcrypt.genSalt(15, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: 3600 }, (err, token) => {
                  if(err) throw err;
                  res.json({token, user: { _id: user._id, username: user.username } });
                }
              )
            });
        })
      })
    })
});

//adds favorite team to a user with specific id
router.patch('/addTeam/:userId', (req, res) => {
    User.updateOne({
        _id: req.params.userId,
        favTeams: {
            "$not": {
                "$elemMatch": {
                    "id": req.body.id
                }
            }
        }
    }, {
        $addToSet: {
            favTeams: req.body
        }
    }).then(data => {
            res.redirect(303, `/api/users/favorites/${req.params.userId}`)
        })
        .catch(err => {
            res.json({ message: err });
        });
});

//removes favorite team from a user with specific id
router.patch('/removeTeam/:userId', (req, res) => {
    User.updateOne({
        _id: req.params.userId
    }, {
        $pull: {
            "favTeams": {
                id: req.body.id
            }
        }
    }).then(data => {
            res.redirect(303, `/api/users/favorites/${req.params.userId}`)
        })
        .catch(err => {
            res.json({ message: err });
        });
});

router.get('/favorites/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then(data => {
            res.json(data.favTeams);
        })
        .catch(err => {
            res.json({ message: err });
        })
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

// Change the user password
router.patch('/changePassword/:userId', (req, res) => {
    let password = req.body.password;

    if(!password) {
      return res.status(400).json({ message: 'Enter all fields.' });
    }
    let hash = bcrypt.hashSync(password, 15);

    User.updateOne({ _id: req.params.userId } ,{$set: {"password": hash}})
    .then(data => { 
        //res.redirect(303, `/api/users/updatePassword/${req.params.userId}`);
        res.json();
    })
    .catch(err => {
            res.json({ message: err });
    });
});

module.exports = router;

