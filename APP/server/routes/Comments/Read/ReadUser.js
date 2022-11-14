const router = require("express").Router();
const db = require("../../../db/db_connection");


router.post("/read-user", (req, res) => {

    const { id, username, name, email } = req.body;

    res.send("read-user")
})

module.exports = router;