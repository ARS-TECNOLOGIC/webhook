const route = require('express').Router();
const efiRoute = require('./efi.route.js');


// route.use('/efi', efiRoute); // Use the efi routes
route.get('/', async (req, resp) => {
    resp.status(200).json({ OK: 'API is running!' });
}); // Route to check if the API is running

module.exports = route; // Export the router for use in the main application file