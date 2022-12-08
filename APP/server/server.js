/*  Importing Packages  */

const express = require("express");
const app = express();

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser");

const mysql = require("mysql2");

/*  Configuring Middlewares  */

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan("common"));
app.use(cookieparser());
// app.use(helmet());

dotenv.config();


app.use("/public", express.static("../uploads/"));
// app.use("/public", express.static("../uploads/avatars"));

/* DB Settings */

const db = require("./db/db_connection");


/*  Configuring Routes  */

const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
const commentRoutes = require("./routes/commentsRoute")

// Configuring User Routes

app.use("/user", userRoutes.create_user_route)// Route To Insert User To DB 
app.use("/user", userRoutes.login_user_route); // Route To Login User & Get Data From DB 
app.use("/user", userRoutes.get_users_route); // Route To Read Users From DB 
app.use("/user", userRoutes.update_user_route); // Route To Update User In DB 
app.use("/user", userRoutes.update_password_route) // Route To Delete User Password in DB 
app.use("/user", userRoutes.delete_user_route)// Route To Delete User From DB 
app.use("/user", userRoutes.update_avatar_route)// Route To Update User Avatar DB 

// Configuring Article Routes

app.use("/article", articleRoutes.publish_article_route);  // Route To Insert Article To DB 
app.use("/article", articleRoutes.read_article_route);  // Route To Read Article/s From DB 
app.use("/article", articleRoutes.single_article_route);  // Route To Read Article/s From DB 
app.use("/article", articleRoutes.update_article_route);  // Route To Update Article In DB 
app.use("/article", articleRoutes.delete_article_route);  // Route To Delete Article From DB 

// Configuring Comment Routes

app.use("/comment", commentRoutes.create_comment_route);  // Route to Insert Comment Into DB


/*  Configuring Port Listener  */

const port = process.env.PORT || 5500;

app.listen(port, () => {

    console.log(`Server Started At Port : ${port}`);
})