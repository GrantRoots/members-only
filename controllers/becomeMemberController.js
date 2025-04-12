const db = require("../db/queries");

function showForm(req, res) {
  res.render("becomeMember");
}

async function becomeMember(req, res, next) {
  if (req.body.memberPassword === "password") {
    try {
      await db.becomeMember(req.user.username);
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  } else {
    res.render("becomeMember");
  }
}

module.exports = {
  showForm,
  becomeMember,
};
