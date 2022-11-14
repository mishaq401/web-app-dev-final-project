const router = require("express").Router();

const db = require("../../../db/db_connection");


router.post("/create-user", (req, res) => {

    const { name, email, password } = req.body;

    try {

        // Query To Insert User Into Database

        let query = ` INSERT INTO app_user (user_name, email, account_password) VALUES('${name}', '${email}', '${password}') `;
        db.query(query);


        // Query To Fetch User From Database & Update his/her username.

        query = `SELECT * FROM app_user WHERE email='${email}'`;

        db.query(query, (err, result) => {

            const data = result[0];     // Storing User Data Into a variable.
            const name = data.user_name.replace(/\s+/g, '');    // Removing Spaces From Name. 
            const username = `${name}_${data.user_id};`;    // Concatenate name with unique id to crete unique username for account

            // Query To Update / Assign The Username.

            query = `UPDATE app_user SET account_username = '${username}' WHERE user_id =${data.user_id} `;
            db.query(query, (err, result) => {

                if (err) {
                    console.log(err)
                    res.status(500).send('Server Error Please Try Again Later');
                }

                else {
                    console.log(result);
                }

            })

        });

    }

    catch (error) {

        if (error) {

            console.log(error);
            res.status(500).send('Server Error Please Try Again Later');
        }

    }

    // res.status(400).send('Email Already Exists Check Your Email Or Login To Your Previous Account');

})

module.exports = router;