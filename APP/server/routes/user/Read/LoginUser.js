const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../../../db/db_connection").mysql_connection;
const UserTable = require("../../../db/db_connection").UserTable

router.post("/login-user", (req, res) => {

    const { username_email, password } = req.body;

    let query = "";
    let PasswordCheck = false;

    try {

        // Query For Finding User Against Email In DB
        query = `SELECT * FROM ${UserTable} where email = "${username_email}"`;

        db.query(query, (err, result) => {

            if (result.length === 1) {

                // If User Exists In DB

                // Comparing Hash From DB Against Entered Password
                PasswordCheck = bcrypt.compareSync(password, result[0].password);

                if (PasswordCheck) {

                    const response = result[0];
                    const { password, ...other } = response;
                    // If Password Matches Send Data To Client
                    res.status(200).json(other);
                }

                else {

                    // If Wrong Password Throw Invalid Message
                    res.status(401).send({ message: "Invalid Username / Password" })
                }

            }

            else {

                // If The user Does Not Exist In DB
                res.status(401).send({ message: "Invalid Username / Password" })
            }
        })

    }

    catch (error) {

        if (error) {

            console.log(error);
            res.status(500).send({ message: 'Server Error Please Try Again Later' });
        }

    }
})

module.exports = router;