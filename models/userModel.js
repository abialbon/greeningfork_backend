const mongoose = require('mongoose');
const mongooseLocal = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project'
        }
    ]
})

userSchema.plugin(mongooseLocal, { usernameField: 'email' });

module.exports = mongoose.model('user', userSchema);