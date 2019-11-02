const User = require('../models/userModel.js');

const createUser = (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    })
    newUser.save()
        .then(() => {
            res.json({
                "success" : true
            })
        })
        .catch((e) => {
            console.log(e);
        })
    
}

module.exports = {
    createUser
}