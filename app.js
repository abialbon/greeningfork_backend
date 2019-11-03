require('dotenv').config();

const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const passport  = require('passport');
const User      = require('./models/userModel');
const session   = require('express-session');
const localStrategy = require('passport-local').Strategy;
// App configuration
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
// User auth
app.use(session({
    secret: "meow",
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy({
    usernameField: 'email',
}, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Loading the user
app.use((req, res, next) => {
    res.locals.authenticated = !!req.user;
    res.locals.user = req.user;
    next();
});

// Routes
const indexRoutes = require('./routes/indexRoutes.js');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(indexRoutes);
app.use(userRoutes);
app.use('/api/project', projectRoutes);

// DB connection
mongoose.connect(process.env.DB_URL);
mongoose.connection.once('open', () => {
    console.log('Connection to the database established!');
    app.listen(process.env.PORT, () => `The server is running on ${process.env.PORT}`)
});