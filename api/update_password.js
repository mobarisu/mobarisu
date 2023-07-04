const connection = require('./connection');

class update_password {
    constructor(store_id, password) {
        this.store_id = store_id;
        this.password = password;
    }

    async updatePassword() {
        const QUERY = `UPDATE stores SET password = '${this.password}' WHERE store_id = '${this.store_id}'`;
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

module.exports = update_password;