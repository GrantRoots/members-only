const indexRouter = require("express").Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.getAllMessages);

module.exports = indexRouter;
