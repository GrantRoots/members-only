const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

function showForm(req, res) {
  res.render("newMessage");
}

const validateMessage = [
  body("message").trim().notEmpty().isLength({ min: 1, max: 255 }),
];

const postMessage = [
  validateMessage,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("newMessage", {
        errors: errors.array(),
      });
    }
    try {
      await db.addMessage([
        req.body.message,
        new Date(),
        req.user.first_name,
        req.user.last_name,
      ]);
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
];

module.exports = {
  showForm,
  postMessage,
};
