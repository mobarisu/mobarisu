const connection = require('./connection');

    class food_list{
        constructor(storeid){
            this.storeid = storeid
        }

        async list(){
            // 店舗情報
            const query1 = `SELECT store_name,store_introduction,store_path FROM stores where store_id =` + this.storeid;
            // 商品情報
            const query2 = `SELECT products.product_id, products.product_name, products_categories.category_name, products.product_price, products.product_path, products.on_sale 
                            FROM products JOIN products_categories ON products.category_id = products_categories.category_id 
                            where store_id =` + this.storeid;

            // 合わせる
            return new Promise((resolve) => {
                Promise.all([executeQuery(query1), executeQuery(query2)])
                .then(([result1, result2]) => {
                    const combinedResults = {
                        result1: result1,
                        result2: result2
                    };
                    resolve(combinedResults);
            });
            
            // クエリ実行
            function executeQuery(query) {
                return new Promise((resolve, reject) => {
                    connection.query(query, (error, results) => {
                        error ? reject(error) : resolve(results);
                    });
                });
            }

        })

    }
}
    module.exports = food_list