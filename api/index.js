// expressモジュールを読み込む
const express = require('express');
const connection = require('./connection');

// 受け取ったjson形式のデータをParseするモジュールを読み込む
const bodyParser = require('body-parser')

// expressアプリを生成する
const app = express();
app.use(bodyParser.json());

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
app.post('/', (req, res) => {

    res.send(req.body)


});

// curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' "localhost:3030"

// 店、客の商品一覧画面に表示する商品一覧を返す
app.post('/api/food_list',(req,res) =>{
    const storeData = req.body;
    const storeid = storeData.storeid;
    // 店舗情報
    const query1 = `SELECT store_name,store_introduction FROM stores where store_id =` + storeid;
    // 商品情報
    const query2 = `SELECT products.product_id, products.product_name, products_categories.category_name, products.product_price, products.on_sale 
                    FROM products JOIN products_categories ON products.category_id = products_categories.category_id 
                    where store_id =` + storeid;

    // 合わせる
    Promise.all([executeQuery(query1), executeQuery(query2)])
      .then(([result1, result2]) => {
        const combinedResults = {
          result1: result1,
          result2: result2
        };
        
        res.json(combinedResults);
        });
        // クエリ実行
        function executeQuery(query) {
            return new Promise((resolve, reject) => {
              connection.query(query, (error, results, fields) => {
                if (error) {
                  reject(error);
                  return;
                }
                resolve(results);
              });
            });
          }
});
// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));