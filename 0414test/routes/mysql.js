var express = require('express');
var mysql = require('mysql');

const dbConf = {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '1',
    database : 'express_db'
}

const con = mysql.createPool(dbConf);
console.log("db host 확인: ", dbConf.host);
console.log(dbConf.database);
console.log(dbConf.host);

const getConn = function(callback) {
    con.getConnection((err, connection) => {
        if(err) {console.error(err)}
        if(!err){
        console.log("\n\nConnection Success..\n\n");
        callback(connection);
        }
    });
};

module.exports = getConn;