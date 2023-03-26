var mysql = require("mysql");

var connection = mysql.createPool({
  connectionLimit: 10,
  host: "db4free.net",
  user: "rams031",
  password: "0923596633",
  database: "medinventory",
});

module.exports = { connection };
