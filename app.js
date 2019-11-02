require('dotenv').config();

const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');
const bodyParser = require('body-parser')

// App configuration
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
// Routes
const indexRoutes = require('./routes/indexRoutes.js');
const projectRoutes = require('./routes/projectRoutes');
app.use(indexRoutes);
app.use('/api/project', projectRoutes);

// DB connection
mongoose.connect(process.env.DB_URL);
mongoose.connection.once('open', () => {
    console.log('Connection to the database established!');
    app.listen(process.env.PORT, () => `The server is running on ${process.env.PORT}`)
});