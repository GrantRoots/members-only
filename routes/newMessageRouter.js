const epxress = require("express");
const newMessageRouter = epxress.Router();
const newMessageController = require("../controllers/newMessageController");

newMessageRouter.get("/", newMessageController);

module.exports = {
  newMessageRouter,
};
