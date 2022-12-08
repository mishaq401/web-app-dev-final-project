const router = require("express").Router();

const db = require("../../../db/db_connection").mysql_connection;
const ArticleTable = require("../../../db/db_connection").ArticleTable;
const ArticleImagesTable = require("../../../db/db_connection").ArticleImagesTable;


const multer = require("multer");

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, '../uploads/article');
    },

    filename: function (req, file, cb) {

        const type = file.mimetype.split("/");
        cb(null, new Date().getTime() + "." + type[type.length - 1]);
    }
})

const upload = multer({ storage: storage })


router.post("/publish-article", upload.fields([{ name: "thumbnail", maxCount: 1 }, { name: "coverimage", maxCount: 1 }]), (req, res) => {

    const { title, content, description, publisher } = req.body;
    const date = new Date();

    const thumbnail = req.files.thumbnail[0]
    const CoverImage = req.files.coverimage[0]

    try {

        const query = `INSERT INTO ${ArticleTable} (title, description, content, publisher, publish_date) values ("${title}", "${description}", "${content}", "${publisher}", curdate()); `;

        db.query(query);

        db.query("SELECT last_insert_id() as CurrentArticleInsert;", (err, res) => {

            // Getting The Primary Key Value Of Currently Inserted Article
            // console.log(res[0]);
            const { CurrentArticleInsert } = res[0];

            // Uploading Images For Article And Giving Article ID as Reference
            const images_query = `INSERT INTO ${ArticleImagesTable}(thumbnail, cover_image, article) values("${thumbnail.filename}", "${CoverImage.filename}", ${CurrentArticleInsert})`;

            db.query(images_query);
        })

        res.status(200).send({ message: "Article Published Successfully" });

    }

    catch (err) {

        if (err) {

            console.log(error);
            res.status(500).send({ message: 'Server Error Please Try Again Later' });
        }
    }

})

module.exports = router;


