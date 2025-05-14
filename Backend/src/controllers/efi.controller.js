const fs = require('fs');
const path = require('path');
const EfiPay = require('sdk-node-apis-efi');
require('dotenv').config();

const estanciarEfi = (req, res) => {

  try {
    // Recuperar e salvar o certificado no /tmp (único diretório gravável na Vercel)
    const certBase64 = process.env.EFI_CERT_BASE64;
    const certBuffer = Buffer.from(certBase64, 'base64');
    const certPath = path.join('/tmp', 'certificado.p12');
    fs.writeFileSync(certPath, certBuffer);

    // Inicializar a SDK
    const efi = new EfiPay({
      client_id: process.env.EFI_CLIENT_ID,
      client_secret: process.env.EFI_CLIENT_SECRET,
      certificate: certPath,
      sandbox: true, // true se for ambiente de teste
    });


    let params = {
      begin_date: '2025-01-01',
      end_date: '2025-05-13',
      charge_type: 'billet',
    }
    return efi; 

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error });
  }
};

const extrairNotification = (req, res) => {
  const efi = estanciarEfi(req, res);
  const params = {
    token: 'da6cc1f4-f6aa-46bc-8fad-7a0db7ad77d2',
  };

  efi.getNotification(params).then((resposta) => {
    // console.log(resposta) 
    res.status(200).json({ resposta });
    
  })
    .catch((error) => {
      console.log(error)
    })

};


module.exports = {
  estanciarEfi,
  extrairNotification
};