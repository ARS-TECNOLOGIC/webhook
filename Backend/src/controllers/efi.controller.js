const fs = require('fs');
const path = require('path');
const EfiPay = require('sdk-node-apis-efi');
require('dotenv').config();

const estanciarEfi = (req, res) => {
  // Verifica se o certificado está definido
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
    return efi;

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error });
  }
};

const extrairNotification = async (req, res) => {
  const efi = estanciarEfi(req, res);
  const params = 'efe1c073-44c4-427a-b953-542ac31a72f3'


 

  await efi.getNotification(params).then((resposta) => {
    res.status(200).json(resposta);
  })
  .catch((error) => {
    console.log(error)
    res.status(500).json({ error: error.message });
  })

};


module.exports = {
  estanciarEfi,
  extrairNotification
};