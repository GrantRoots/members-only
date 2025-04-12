const db = require("../db/queries");

async function getAllMessages(req, res, next) {
  try {
    const messages = await db.getAllMessages();
    console.log(req.user);
    res.render("index", { user: req.user, messages: messages });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = {
  getAllMessages,
};
