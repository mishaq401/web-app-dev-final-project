const router = require("express").Router();
const db = require("../../../db/db_connection");


router.post("/update-article", (req, res) => {

    res.send("article updated")
})

module.exports = router;