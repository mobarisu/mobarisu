const connection = require('./connection');

class Authentication {
    constructor(mail, password) {
        this.mail = mail;
        this.password = password;
    }

    async storeLogin() {
        const QUERY = `SELECT * FROM stores WHERE mail_address = '${this.mail}' AND password = '${this.password}'`;
        try {
            let isSuccess = false;
            const result = await this.executeQuery(QUERY);
            result.length > 0 ? isSuccess = true : isSuccess = false;
            return isSuccess;
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