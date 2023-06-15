// expressモジュールを読み込む
const express = require('express');
const bodyParser = require('body-parser');

const QRCodeGenerator = require('./QRCodeGenerator');

// expressアプリを生成する
const app = express();
app.use(bodyParser.json());

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
app.get('/', (req, res) => res.send('Hello'));

app.post('/qrcode', (req, res) => {
    const qr = new QRCodeGenerator(req.body.url);
    qr.generate().then((src) => res.send(JSON.stringify({'src':src})) );
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));