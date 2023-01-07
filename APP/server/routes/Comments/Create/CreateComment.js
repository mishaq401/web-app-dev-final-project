const router = require("express").Router();

const db = require("../../../db/db_connection").mysql_connection;
const CommentsTable = require("../../../db/db_connection").CommentsTable;


router.post("/create-comment", (req, res) => {


    const { publisher, article, comment_text } = req.body;

    try {

        // Query To Insert Comment Into Database
        const query = ` insert into ${CommentsTable} (text, publisher, article, publish_date) values ( "${comment_text}", "${publisher}", "${article}", curdate() ) `;

        db.query(query);

    }

    catch (error) {

        console.log(error);
        res.status(500).send({ message: 'Server Error Please Try Again Later' });
    }

})

module.exports = router;