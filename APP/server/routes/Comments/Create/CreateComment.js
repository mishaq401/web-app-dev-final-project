const router = require("express").Router();

const db = require("../../../db/db_connection");


router.post("/create-comment", (req, res) => {


    console.log(req.body);

    try {

        // Query To Insert Comment Into Database
        const query = ` insert into comments(text, publisher, article, publish_date) `

    }

    catch (error) {

        console.log(error);
        res.status(500).send({ message: 'Server Error Please Try Again Later' });
    }

})

module.exports = router;