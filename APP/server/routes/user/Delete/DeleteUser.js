const router = require("express").Router();
const db = require("../../../db/db_connection");
const bcrypt = require("bcrypt");

router.post("/delete-user", (req, res) => {

    const { id } = req.body;

    try {

        // Query To Delete User 

        let query = `DELETE FROM app_user WHERE user_id = ${id}`;

        db.query(query, (err, result) => {

            if (err) {

                console.log(error);
                res.status(500).send({ error: 'Server Error Please Try Again Later' });
            }

            res.status(200).send({ message: "success" });
            console.log(result);

        })

    }

    catch (err) {

        if (err) {

            console.log(error);
            res.status(500).send({ error: 'Server Error Please Try Again Later' });
        }
    }

})

module.exports = router;



