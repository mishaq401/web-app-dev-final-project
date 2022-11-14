const create_article_route = require("./articles/Create/CreateArticle");
const read_article_route = require("./articles/Read/GetArticles");
const update_article_route = require("./articles/Update/UpdateArticle");
const delete_article_route = require("./articles/Delete/DeleteArticle");

module.exports = {
    create_article_route, read_article_route, update_article_route,
    delete_article_route
};