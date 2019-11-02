const express = require('express');
const router = express.Router();

const projectController = require('../controller/projectController');

router.post('/create', projectController.createProject);

module.exports = router