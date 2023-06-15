const QRCode = require('qrcode');

class QRCodeGenerator {
    constructor(url) {
        this.url = url;
    }
    
    async generate() {
        return new Promise((resolve, reject) => {
            QRCode.toDataURL(this.url, function (err, src) {
                err ? reject(err) : resolve(src);
            });
        });
    }
}

module.exports = QRCodeGenerator;