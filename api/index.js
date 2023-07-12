// expressモジュールを読み込む
const express = require('express');
const bodyParser = require('body-parser');

const food_list = require('./food_list');
const QRCodeGenerator = require('./QRCodeGenerator');
const Authentication = require('./authentication');
const food_details = require('./food_details');
const mail_duplicate = require('./mail_duplicate');
const mail_cash = require('./mail_cash');
const store_info = require('./store_info');


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

// curl -X POST -H "Content-Type: application/json" -d '{"url":"http://example.com"}' "localhost:3030/qrcode"
app.post('/qrcode', (req, res) => {
    const qr = new QRCodeGenerator(req.body.url);
    qr.generate().then((src) => res.send(JSON.stringify({'src':src})) );
});

// curl -X POST -H "Content-Type: application/json" -d '{"mail":"mac@gmail.com","password":"Pass_1234_qwaszx"}' "localhost:3030/authentication"
// curl -X POST -H "Content-Type: application/json" -d '{"mail":"a@gmail.com","password":"password"}' "localhost:3030/authentication"
app.post('/authentication', (req, res) => {
    const auth = new Authentication(req.body.mail, req.body.password);
    auth.storeLogin().then((results) => {
      res.send(JSON.stringify({'result':results}));
    });
});
  
app.post('/food_details', (req, res) => {
  const details = new food_details(req.body.productid);
  details.details().then((results) => res.json(results));
});

app.post('/mail_duplicate', (req, res) => {
  const duplicate = new mail_duplicate(req.body.mail);
  duplicate.duplicate().then((results) => res.json(results));
});

app.post('/mail_cash', (req, res) => {
  const cash = new mail_cash(req.body.mail, req.body.password);
  cash.cash().then((results) => {
    res.send(JSON.stringify({'result':results}));
  });
});

app.post('/store_info', (req, res) => {
  const auth = new store_info(req.body.store_id);
  auth.storeLogin().then((results) => {
    res.send(JSON.stringify(results));
  });
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));