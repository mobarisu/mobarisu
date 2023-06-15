const connection = require('./connection');

class authentication {
    constructor(mail, password) {
        this.mail = mail;
        this.password = password;
    }

    async storeLogin() {
        const QUERY = `SELECT * FROM stores WHERE mail = '${this.mail}' AND password = '${this.password}'`;
        console.log(await this.executeQuery(QUERY));
    }

    executeQuery(query) {
        return new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                error ? reject(error) : resolve(results);
            });
        });
    }

}

module.exports = authentication;