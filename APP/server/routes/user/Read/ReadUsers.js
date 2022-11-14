const router = require("express").Router();

const db = require("../../../db/db_connection").mysql_connection;
const UserTable = require("../../../db/db_connection").UserTable


router.post("/read-users", (req, res) => {

    try {

        // Writing Our Query To Select All Users From Table
        let query = `SELECT * FROM ${UserTable}`;

        // Executing Our Query
        db.query(query, (err, result) => {

            if (err) {
                // If Error Send Error Message To Client
                console.log(err)
                res.status(500).send('Server Error Please Try Again Later');
            }

            else {
                // Send All Results To Client
                res.status(200).send(result)
            }

        })
    }

    catch (error) {
        if (error) {

            console.log(error);
            res.status(500).send('Server Error Please Try Again Later');
        }

    }

})

module.exports = router;