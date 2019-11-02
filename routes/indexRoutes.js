const express = require('express'),
  router      = express.Router();

router.get('/', (req, res) => { res.render('landing') })
router.get('/signup', (req, res) => res.render('non_auth/signup'))
router.get('/login', (req, res) => res.render('non_auth/login'))

module.exports = router;