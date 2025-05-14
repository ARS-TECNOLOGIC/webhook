const route = require('express').Router();
const efiController = require('../controllers/efi.controller.js');

route.get('/',efiController.estanciarEfi); // Route to get all EFI data)
route.get('/notification',efiController.extrairNotification); // Route to get all EFI data)
// route.get('/notification', efiController.extrairNotification); // Route to get all EFI data)
module.exports = route; // Export the router for use in the main application file