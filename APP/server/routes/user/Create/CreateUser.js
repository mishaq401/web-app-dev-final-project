const router = require("express").Router();
const bcrypt = require("bcrypt");

const db = require("../../../db/db_connection").mysql_connection;
const UserTable = require("../../../db/db_connection").UserTable


router.post("/create-user", (req, res) => {


    const { name, email, password } = req.body;
    let EmailExist = "no";
    let SecurePassword = "";
    let query = "";


    try {


        // Query To Check User If User Already Exists In DB.
        query = `SELECT * FROM ${UserTable} WHERE email = "${email}"`;


        db.query(query, (err, result) => {

            if (result.length === 0) {

                // Inserting User Into DB


                // Creating Password Hash using bcrypt

                const salt = bcrypt.genSaltSync(12);
                SecurePassword = bcrypt.hashSync(password, salt)


                // Query To Insert User Into Database
                query = ` INSERT INTO ${UserTable} (name, email, password) VALUES('${name}', '${email}', '${SecurePassword}') `;
                db.query(query);


                // Query To Fetch User From Database & Update his/her username.
                query = `SELECT * FROM ${UserTable} WHERE email='${email}'`;

                db.query(query, (err, result) => {


                    const data = result[0];     // Storing User Data Into a variable.
                    const name = data.name.replace(/\s+/g, '');    // Removing Spaces From Name. 
                    const username = `${name.toLowerCase()}_${data.id}`;    // Concatenate name with unique id to crete unique username for account


                    // Query To Update / Assign The Username.
                    query = `UPDATE ${UserTable} SET unique_name = '${username}' WHERE id =${data.id} `;

                    db.query(query, (err, result) => {

                        if (err) {

                            console.log(err)
                            res.status(500).send({ message: 'Server Error Please Try Again Later' });
                        }

                        else {

                            // console.log(result);
                            res.status(200).send(result);
                        }

                    })

                });
            }

            else {

                // If A User Already Exists In the DB
                res.status(401).send({ message: "User Already Exists Please Login To Your Previous Account" });
            }

        })

    }

    catch (error) {

        if (error) {

            console.log(error);
            res.status(500).send({ message: 'Server Error Please Try Again Later' });
        }

    }

    // res.status(400).send('Email Already Exists Check Your Email Or Login To Your Previous Account');

})

module.exports = router;