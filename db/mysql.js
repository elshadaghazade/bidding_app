const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config({
    path: `./.env.${process.env.NODE_ENV || 'development'}`
});

const conn = mysql.createPool({
    host: process.env.MYSQL_HOSTNAME,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000
});

module.exports = conn;