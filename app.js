const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('This is the initial commit'));

app.listen(port, () => console.log(`The port is running on http://localhost:${port}`));