const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser)
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;