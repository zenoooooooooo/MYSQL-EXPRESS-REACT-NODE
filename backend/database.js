// database.js
require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});



const promisePool = pool.promise();

module.exports = {
  query: (sql, params) => promisePool.query(sql, params),
};
