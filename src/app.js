const express = require('express');
const app = express();


app.use(express.json());
app.get('/efi/:loc', (req, res) => {
    res.send(`Location: ${req.params.loc}`);
});

app.get('/', (req, res) => {
    res.send(`ok!`);
});



module.exports = app;
// app.js