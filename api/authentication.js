const connection = require('./connection');

class Authentication {
    constructor(mail, password) {
        this.mail = mail;
        this.password = password;
    }

    async storeLogin() {
        const QUERY = `SELECT * FROM stores WHERE mail-address = '${this.mail}' AND password = '${this.password}'`;
        try {
            const result = await this.executeQuery(QUERY);
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async executeQuery(query) {
        return new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                error ? reject(error) : resolve(results);
            });
        });
    }
}

module.exports = Authentication;