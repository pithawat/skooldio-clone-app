const mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    database:'learnboost',
    user:'root',
    password: '123456',
    port:3306
})

module.exports =connection