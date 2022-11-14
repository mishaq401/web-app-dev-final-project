/*  Configuring Database  */

// const mysql = require("mysql");
// const mysql = require("mysql2/promise");
const mysql = require("mysql2");

const mysql_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ubuntu",
    database: "blog"
});


// Table Names So We Dont have To Update Them Everywhere If Update Required
const UserTable = "users";
const ArticleTable = "articles";



module.exports = { mysql_connection, UserTable, ArticleTable };

