const mysql = require('mysql');

const connection = {
    host: 'localhost',
    port: 3307,
    database: 'backend',
    user: 'root',
    password: ''
};

const conn = mysql.createConnection(connection);

conn.connect((err) => {
    if(err) {
        console.log("Error occurred while connecting to MySQL database.")
    } else {
        console.log("Connection with MySQL database created successfully.")
    }
});

module.exports = conn;