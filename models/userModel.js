const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project'
        }
    ]
})

module.exports = mongoose.model('user', userSchema);