const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/api/users/create', userController.createUser);

module.exports = router;