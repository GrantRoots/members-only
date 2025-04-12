const db = require("../db/queries");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

function showForm(req, res) {
  res.render("signUp");
}

const validateUser = [
  body("firstName")
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage("First name must only contain letters.")
    .escape(),
  body("lastName")
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage("Last name must only contain letters.")
    .escape(),
  body("username").trim().notEmpty().escape(),
  body("password").trim().notEmpty(),
  body("confirmPassword")
    .trim()
    .notEmpty()
    .custom((value, { req }) => {
      if (value === req.body.password) {
        return true;
      }
      throw new Error("Passwords do not match");
    }),
  ,
];

const signUpPost = [
  validateUser,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("signUp", {
        errors: errors.array(),
      });
    }
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.userName,
        hashedPassword,
        "false",
      ];
      await db.signUp(values);
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
];

module.exports = {
  showForm,
  signUpPost,
};
