var express = require('express');
const UserController = require("../../controllers/admin/UserController");
var UserRouter = express.Router();

/* GET home page. */
UserRouter.post("/login",UserController.login);

module.exports = UserRouter;
