const express = require('express');
const router = express.Router();

// User model
const User = require("../models/user");

// @route GET /users
// @desc get all items
// @access public
router.get('/', (req, res) => {
    User.find()
        .sort({ username: -1 })
        .then(users => res.json(users));
});

// @route POST /users
// @desc Create a user
// @access Public
router.post('/', (req, res) => {
    const newUser = new User({
        username: req.body.username, 
        password: req.body.password
    });

    newUser.save().then(user => res.json(user));
});

// @route DELETE /users
// @desc Delete a user
// @access Public
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// Update too ? 

module.exports = router; 