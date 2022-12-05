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

    const thumbnail = req.files.thumbnail[0]
    const CoverImage = req.files.coverimage[0]

    console.log(publisher);

    const query = `INSERT INTO ${ArticleTable} (title, description, content, publisher, publish_date) values ("${title}", "${description}", "${content}", "${publisher}", curdate()); `;
    const images_query = `INSERT INTO`
    // console.log(query);

    db.query(query);

    db.query("SELECT last_insert_id() as CurrentArticleInsert;", (err, res) => {

        const { CurrentArticleInsert } = res[0];

        console.log(thumbnail);
        console.log(CoverImage);

        const images_query = `INSERT INTO ${ArticleImagesTable}(thumbnail, cover_image, article) values("${thumbnail.filename}", "${CoverImage.filename}", ${CurrentArticleInsert})`;

        db.query(images_query);
    })

    res.json({ message: "Article Published Successfully" });


})

module.exports = router;


