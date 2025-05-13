const route = require('express').Router();
const efiRoute = require('./efi.route.js');


route.use('/efi', efiRoute); // Use the efi routes

module.exports = route; // Export the router for use in the main application file