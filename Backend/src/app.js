const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js');
// const { connectDB } = require('./config/db.js');

const app= express();

app.use(express.json());
app.use(cors());
app.use(router);


module.exports= app;