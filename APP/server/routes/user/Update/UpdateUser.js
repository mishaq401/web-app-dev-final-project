const router = require("express").Router();

const db = require("../../../db/db_connection");

router.post("/update-user", (req, res) => {

    const { user_email, user_id } = req.body;

    res.send("update-user")
})

module.exports = router;