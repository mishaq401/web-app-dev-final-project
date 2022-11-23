const router = require("express").Router();

const db = require("../../../db/db_connection");


router.post("/create-article", (req, res) => {

    res.send("article Created")
})

module.exports = router;