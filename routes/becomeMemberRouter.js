const becomeMemberRouter = require("express").Router();
const becomeMemberController = require("../controllers/becomeMemberController");

becomeMemberRouter.get("/", becomeMemberController.showForm);
becomeMemberRouter.post("/", becomeMemberController.becomeMember);

module.exports = becomeMemberRouter;
