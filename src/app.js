const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.get('/efi/:loc', (req, res) => {
    res.send(`Location: ${req.params.loc}`);
});

app.post('/:id', (req, res) => {
    res.send(`ok! - teste efi ${req.params.id} - ${req.body}`);
});



module.exports = app;
// app.js