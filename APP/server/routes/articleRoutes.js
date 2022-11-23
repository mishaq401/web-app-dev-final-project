const publish_article_route = require("./articles/Create/PublishArticle");
const read_article_route = require("./articles/Read/GetArticles");
const single_article_route = require("./articles/Read/SingleArticle");
const update_article_route = require("./articles/Update/UpdateArticle");
const delete_article_route = require("./articles/Delete/DeleteArticle");


module.exports = {
    publish_article_route, read_article_route, update_article_route,
    delete_article_route, single_article_route
};