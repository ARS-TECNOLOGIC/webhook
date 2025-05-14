const {instanceEfi} = require('../config/concteEfi');

const efi = instanceEfi();

const extrairNotification = async (req, res) => {

    
    const params ='da6cc1f4-f6aa-46bc-8fad-7a0db7ad77d2';

    efi.getNotification(params)
        .then((resposta) => {
            res.status(200).json(resposta.data);
        })
        .catch((error) => {
            console.error(error.response?.data || error.message);
            res.status(500).json({ error });
        });
    
}

module.exports = {
  extrairNotification
};