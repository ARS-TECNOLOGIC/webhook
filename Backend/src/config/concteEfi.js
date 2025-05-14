const fs = require('fs');
const path = require('path');
const EfiPay = require('sdk-node-apis-efi');
require('dotenv').config();

 const efi = null
const estanciarEfi = (req, res) => {
  // Verifica se o certificado está definido
  try {
    // Recuperar e salvar o certificado no /tmp (único diretório gravável na Vercel)
    const certBase64 = process.env.EFI_CERT_BASE64;
    const certBuffer = Buffer.from(certBase64, 'base64');
    const certPath = path.join('/tmp', 'certificado.p12');
    fs.writeFileSync(certPath, certBuffer);

    // Inicializar a SDK
    efi = new EfiPay({
      client_id: process.env.EFI_CLIENT_ID,
      client_secret: process.env.EFI_CLIENT_SECRET,
      certificate: certPath,
      sandbox: true, // true se for ambiente de teste
    });
    res.status(200).json({ message: 'SDK initialized successfully!' });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error });
  }
};

module.exports = {
    estanciarEfi,
    instanceEfi: () => efi,
};