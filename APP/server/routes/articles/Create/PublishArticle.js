const router = require("express").Router();

const db = require("../../../db/db_connection");
const ArticleTable = require("../../../db/db_connection").ArticleTable;


router.post("/create-article", (req, res) => {

    const { publisher, text, thumbnail, cover } = req.body;

    res.send("Article Created");

})

module.exports = router;
