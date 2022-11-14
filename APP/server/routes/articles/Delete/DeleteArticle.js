const router = require("express").Router();
const db = require("../../../db/db_connection");


router.post("/delete-article", (req, res) => {

    res.send("article Deleted")
})

module.exports = router;