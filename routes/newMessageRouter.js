const newMessageRouter = require("express").Router();
const newMessageController = require("../controllers/newMessageController");

newMessageRouter.get("/", newMessageController.showForm);
newMessageRouter.post("/", newMessageController.postMessage);

module.exports = newMessageRouter;
