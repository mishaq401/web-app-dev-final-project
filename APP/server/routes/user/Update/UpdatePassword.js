const router = require("express").Router();
const bcrypt = require("bcrypt")

const db = require("../../../db/db_connection").mysql_connection;
const UserTable = require("../../../db/db_connection").UserTable


router.post("/update-password", (req, res) => {

    const { id, NewPassword } = req.body;
    let query = "";


    try {

        // Creating Password Hash using bcrypt

        const salt = bcrypt.genSaltSync(12);
        SecurePassword = bcrypt.hashSync(NewPassword, salt)

        //  QUERY To Update User Password In DB
        query = `UPDATE ${UserTable} SET account_password = "${SecurePassword}" where user_id = ${id} `;

        db.query(query, (err, result) => {

            if (err) {

                console.log(err)
                res.status(500).send({ message: 'Server Error Please Try Again Later' });
            }

            else {

                // console.log(result);
                res.status(200).send({ message: "Password Updated Successfully" });
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