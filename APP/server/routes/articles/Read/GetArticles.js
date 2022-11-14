const router = require("express").Router();
const db = require("../../../db/db_connection");


router.post("/read-articles", (req, res) => {

    const { user_query } = req.body;

    const query = "SELECT * FROM articles";

    db.query(query, (err, data) => {

        if (err) {
            console.log(err)
        }

        else {
            res.json(data);
        }

    });

});

module.exports = router;