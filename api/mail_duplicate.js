const connection = require('./connection');

    class mail_duplicate{
        constructor(mail){
            this.mail = mail
        }

        async duplicate(){
            // 店舗情報
            const query1 = `SELECT * FROM stores WHERE mail_address = '${this.mail}'`;
            try {
                let isSuccess = false;
                const result = await executeQuery(query1);
                result.length > 0 ? isSuccess = true : isSuccess = false;
                return isSuccess;
            } catch (error) {
                throw error;
            }

            // クエリ実行
            function executeQuery(query) {
                return new Promise((resolve, reject) => {
                    connection.query(query, (error, results) => {
                        error ? reject(error) : resolve(results);
                    });
                });
            }
        }
    }
    module.exports = mail_duplicate