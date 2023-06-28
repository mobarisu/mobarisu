const connection = require('./connection');

class mail_cash {
    constructor(mail, password) {
        this.mail = mail;
        this.password = password;
    }

    async cash() {
        const QUERY = `INSERT INTO cash (time_cash, mail_address, password) VALUES (DATE_FORMAT(NOW(), '%Y-%m-%d %H:%i:%s'), '${this.mail}', '${this.password}')`;
        try {
            const result = await this.executeQuery(QUERY);
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
module.exports = mail_cash