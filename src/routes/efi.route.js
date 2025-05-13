const route = require('express').Router();
const efiController = require('../controllers/efi.controller.js');

route.get('/estanciar', async(req,resp)=>{
    resp.status(200).json({OK:'Certificado carregado!'});
}); // Route to estanciar Efi


module.exports = route; // Export the router for use in the main application file