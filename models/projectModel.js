const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    description : String,
    status: Number,
    log: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'card'
    },
    goal: {
        type: Number,
        required: true
    },
    current: {
        type: Number,
        default: 0
    },
    noForks: {
        type: Number,
        default: 0
    }
})

projectSchema.pre('save', function(next) {
    console.log(this);
    if (this.goal == 0) {
        this.status = 0;
    } else {
        this.status = this.current / this.goal
    }
    next();
})

module.exports = mongoose.model('project', projectSchema);