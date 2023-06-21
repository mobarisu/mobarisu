const connection = require('./connection');

    class food_details{
        constructor(productid){
            this.productid = productid
        }

        async details(){
            // オプション
            const query1 = `SELECT
                                options.option_name,
                                options.option_price
                            FROM
                                options
                            JOIN
                                products_options ON options.option_id = products_options.option_id
                            WHERE
                                products_options.product_id = ` + this.productid;
            // 商品
            const query2 = `SELECT
                                product_name,
                                product_introduction,
                                product_price
                            FROM
                                products
                            WHERE
                                product_id =` + this.productid;

            // アレルギー
            const query3 = `SELECT
                                allergies.allergy_id,
                                allergies.ingredient
                            FROM
                                products_allergies
                            JOIN
                                allergies ON products_allergies.allergy_id = allergies.allergy_id
                            WHERE
                                products_allergies.product_id =` + this.productid;

            // 合わせる
            return new Promise((resolve) => {
                Promise.all([executeQuery(query1), executeQuery(query2), executeQuery(query3)])
                .then(([result1, result2,result3]) => {
                    const combinedResults = {
                        result1: result1,
                        result2: result2,
                        result3: result3
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
    module.exports = food_details