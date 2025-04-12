const newMessageRouter = require("express").Router();
const newMessageController = require("../controllers/newMessageController");

newMessageRouter.get("/", newMessageController);

module.exports = {
  newMessageRouter,
};
