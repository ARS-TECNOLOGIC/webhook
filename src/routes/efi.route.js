const route = require('express').Router();
const efiController = require('../controllers/efi.controller.js');

route.get('/estanciar', efiController.estanciarEfi); // Route to estanciar Efi


module.exports = route; // Export the router for use in the main application file