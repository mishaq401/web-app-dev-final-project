const create_user_route = require("./user/Create/CreateUser")
const login_user_route = require("./user/Read/LoginUser");
const get_users_route = require("./user/Read/ReadUsers");
const update_user_route = require("./user/Update/UpdateUser");
const delete_user_route = require("./user/Delete/DeleteUser");
const update_password_route = require("./user/Update/UpdatePassword");
const update_avatar_route = require("./user/Update/UpdateAvatar");


module.exports = {

    create_user_route, login_user_route, get_users_route, update_user_route,
    delete_user_route, update_password_route, update_avatar_route
};