module.exports = require('mysql2')
.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'groot',
        database: 'pizza_db'
    })