const router = require("express").Router();

const db = require("../../../db/db_connection");
const ArticleTable = require("../../../db/db_connection").ArticleTable;


router.post("/single-article", (req, res) => {

    const { id } = req.body;

    const query = `SELECT * FROM ${ArticleTable}`;

    res.send("hello");
})

module.exports = router;