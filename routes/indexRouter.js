const indexRouter = require("express").Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.getAllMessages);
indexRouter.post("/", indexController.deleteMessage);

module.exports = indexRouter;
