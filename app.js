require('dotenv').config();

const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');

// App configuration
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => res.render('index', { data: 42 }));

// DB connection
mongoose.connect(process.env.DB_URL);
mongoose.connection.once('open', () => {
    console.log('Connection to the database established!');
    app.listen(process.env.PORT, () => `The server is running on ${process.env.PORT}`)
});