const options = require('../config/concteEfi');
const Efipay = require('sdk-node-apis-efi');


const efi = new Efipay(options);

const extrairNotification = async (req, resp) => {
    const { key } = req.params;
    const params = {token: key};
    // const params = {token: 'da6cc1f4-f6aa-46bc-8fad-7a0db7ad77d2'}; // Token de exemplo
    try {
        
        const response = await efi.getNotification(params);
        resp.status(200).json(response);
    } catch (error) {
        console.error('Error:', error);
        resp.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    extrairNotification
};
