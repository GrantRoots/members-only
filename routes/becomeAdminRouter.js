const becomeAdminRouter = require("express").Router();
const becomeAdminController = require("../controllers/becomeAdminController");

becomeAdminRouter.get("/", becomeAdminController.showForm);
becomeAdminRouter.post("/", becomeAdminController.becomeAdmin);

module.exports = becomeAdminRouter;
