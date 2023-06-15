const QRCode = require('qrcode');

class QRCodeGenerator {
    constructor(url) {
        this.url = url;
    }
    
    /**
     * Generates a QR code image from the provided src.
     * @returns {Promise<string>} A promise that resolves to the base64 encoded QR code image.
     */
    async generate() {
        return new Promise((resolve, reject) => {
            // Convert the URL to a QR code image
            QRCode.toDataURL(this.url, function (err, src) {
                // Handle any errors
                err ? reject(err) : resolve(src);
            });
        });
    }
}

module.exports = QRCodeGenerator;