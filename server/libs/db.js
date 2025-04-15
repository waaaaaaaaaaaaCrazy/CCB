const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'fornode'
});

connection.connect(function(err) {
    if (err){
        console.log('Error connecting to database');
        console.log(err);
        return;
    }
    console.log('Connected to database');
});

module.exports = connection;