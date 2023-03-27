const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Bornethiopian92',
        database: 'employee_db'
    },

    console.log('Connected to employee_db')
);

module.exports = db