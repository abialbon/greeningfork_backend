const express = require('express');
const router = express.Router();

const projectController = require('../controller/projectController');

router.get('/', projectController.showProjects);
router.get('/create', (req, res) => res.render('project/create'));
router.post('/create', projectController.createProject);

module.exports = router