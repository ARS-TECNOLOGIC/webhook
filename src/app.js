const express = require('express');
const cors = require('cors');
// const routes = require('./routes/index.js'); // Import the routes

const app = express();
const route = express.Router();

app.use(cors());
app.use(express.json());

route.get('/api', async (req, resp) => {
    resp.status(200).json({ OK: 'API is running!' });
}); // Route to check if the API is running

module.exports = app;
// app.js