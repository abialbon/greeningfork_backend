const Project = require('../models/projectModel');

const createProject = (req, res) => {
    console.log('createProject hit');
    const newProject = new Project({
        description: req.body.description,
        goal: parseInt(req.body.goal),
        current: parseInt(req.body.current)
    })
    newProject.save()
    .then(() => res.json({
        "success" : true
    }))
    .catch((e) => console.log(e))
}

module.exports = {
    createProject
}