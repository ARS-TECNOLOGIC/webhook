const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js'); // Import the routes

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes); // Use the imported routes

// app.use('/api', routes); // Use the imported routes


module.exports = app;
// app.js