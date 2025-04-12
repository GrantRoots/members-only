const logInRouter = require("express").Router();
const logInController = require("../controllers/logInController");

logInRouter.get("/", logInController.showForm);

module.exports = logInRouter;
