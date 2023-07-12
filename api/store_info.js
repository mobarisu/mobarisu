const connection = require('./connection');

class store_info {
    constructor(store_id) {
        this.store_id = store_id;
    }

    async storeLogin() {
        const QUERY = `SELECT store_name, store_introduction, representative_name FROM stores WHERE store_id = ${this.store_id}`;
        try {
            const result = await this.executeQuery(QUERY);
            return result.length > 0 ? result : false;
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

module.exports = store_info;