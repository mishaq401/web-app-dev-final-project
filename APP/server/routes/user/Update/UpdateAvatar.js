const mime = require("mime-types");
const router = require("express").Router();

const db = require("../../../db/db_connection").mysql_connection;
const UserTable = require("../../../db/db_connection").UserTable;

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, '../client/public/uploads/avatars');
        // cb(null, 'http://localhost:3000/uploads/avatars/');
        cb(null, '../uploads/avatars');
    },
    filename: function (req, file, cb) {


        let { filename } = req.body;

        let ext = mime.extension(file.mimetype);
        cb(null, filename);
    }
})

const upload = multer({ storage: storage })


router.post("/update-avatar", upload.single('avatar'), (req, res) => {


    try {
        res.status(200).send({ message: "Success" });
    }

    catch (err) {

        if (err) {

            console.log(err);
            res.status(500).send('Server Error Please Try Again Later');
        }
    }

})

module.exports = router;