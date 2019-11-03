const User = require('../models/userModel.js');
const passport = require('passport');

const createUser = (req, res) => {
    let newUser = {
        email: req.body.email.trim()
    };
    User.register(newUser, req.body.password.trim(), (err, user) => {
        if (err) { res.send({ error: err.message }) }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/login');
        });
    });
}

const loginUser = passport.authenticate('local', {
    successRedirect: '/api/project',
    failureRedirect: '/login'
});

module.exports = {
    createUser,
    loginUser
}