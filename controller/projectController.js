const Project = require('../models/projectModel');

const createProject = (req, res) => {
    const newProject = new Project({
        title: req.body.title,
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