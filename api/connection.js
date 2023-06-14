const mysql = require('mysql');

// MySQLサーバーへの接続の設定
const connection = mysql.createConnection({
  host: process.env.AWS_DATABASE_HOST,     // ホスト名
  user: process.env.AWS_DATABASE_USER,    // ユーザー名
  password: process.env.AWS_DATABASE_PASSWORD, // パスワード
  database: process.env.AWS_DATABASE_NAME // データベース名
});
module.exports = connection;