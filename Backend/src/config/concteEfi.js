const fs = require('fs');
const path = require('path');
require('dotenv').config();


// Recuperar e salvar o certificado no /tmp (único diretório gravável na Vercel)

const certBase64 = process.env.EFI_CERT_BASE64;
if (certBase64 != 'teste') {
    const certBuffer = Buffer.from(certBase64, 'base64');
    const certPath = path.join('/tmp', 'certificado.p12');
    fs.writeFileSync(certPath, certBuffer);
}

module.exports = {
    client_id: process.env.EFI_CLIENT_ID,
    client_secret: process.env.EFI_CLIENT_SECRET,
    certificate: process.env.EFI_CERT_BASE64 == 'teste' ? path.join('./config/homolog.p12') : certPath, // Caminho do certificado
    // certificate: './config/homolog.p12', // Caminho do certificado     
    sandbox: true, // true se for ambiente de teste    
    cert_base64: false
}