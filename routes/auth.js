const express = require('express');
const router = express.Router();

// User model
const User = require("../models/user");

// @route GET /auth
// @desc Auth the user
// @access public
router.post('/', (req, res) => {
    const { username, password } = req.body;
    if( !username || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ username })
        .then(user => {
            if(!user) {
                return res.status(400).json( { msg: 'User does not exist' });
            }

            if(password !== user.password) {
                return res.status(400).json({ msg: 'Invalid login' });
            }

            return res.status(400).json( { msg: 'User logged in!' });
        })
});     
// @route GET /auth/user
// @desc Get user data
// @access private
router.get('/user', (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});
module.exports = router; 