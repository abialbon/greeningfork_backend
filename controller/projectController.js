const Project = require('../models/projectModel');

const createProject = (req, res) => {
    const newProject = new Project({
        title: req.body.title,
        description: req.body.description,
        goal: parseInt(req.body.goal),
        current: parseInt(req.body.current),
        user: req.user.id
    })
    newProject.save()
    .then(() => res.redirect('/api/project'))
    .catch((e) => console.log(e))
}

const showProjects = (req, res) => {
    Project.find()
    .then((projects) => {
        res.render('project/projects', { projects: projects })
    })
    .catch((err) => {
        res.send("Error")
    })
}

module.exports = {
    createProject,
    showProjects
}