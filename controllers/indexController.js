const db = require("../db/queries");

async function getAllMessages(req, res, next) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { user: req.user, messages: messages });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function deleteMessage(req, res, next) {
  try {
    await db.deleteMessage(req.body.message);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = {
  getAllMessages,
  deleteMessage,
};
