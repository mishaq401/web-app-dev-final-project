const router = require("express").Router();

const db = require("../../../db/db_connection").mysql_connection;
const ArticleTable = require("../../../db/db_connection").ArticleTable;


router.post("/single-article", (req, res) => {

    const { ArticleId } = req.body;

    const query = `call single_article(${ArticleId})`;

    try {

        db.query(query, (err, result) => {

            const article = result[0];
            res.status(200).send({ article });

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