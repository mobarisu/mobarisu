// expressモジュールを読み込む
const express = require('express');
const bodyParser = require('body-parser');

const food_list = require('./food_list');
const QRCodeGenerator = require('./QRCodeGenerator');

// expressアプリを生成する
const app = express();
app.use(bodyParser.json());

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
app.post('/', (req, res) => res.send(req.body));

// curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' "localhost:3030"

// 店、客の商品一覧画面に表示する商品一覧を返す
app.post('/food_list',(req,res) =>{
  const list =new food_list(req.body.storeid);
  list.list().then((results) => res.json(results));
});

app.post('/qrcode', (req, res) => {
    const qr = new QRCodeGenerator(req.body.url);
    qr.generate().then((src) => res.send(JSON.stringify({'src':src})) );
});

app.post('/authentication', (req, res) => {
    const auth = new authentication(req.body.mail, req.body.password);
    auth.storeLogin().then((results) => res.json(results));
})

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));