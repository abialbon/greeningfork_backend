const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/api/users/create', (req, res) => {
    var newUser = new User({
        email: 'demo@gmail.com',
        password: 'test'
    })
    newUser.save();
    res.send('The user has been saved!');
});

module.exports = router;