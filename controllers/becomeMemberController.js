const db = require("../db/queries");

function showForm(req, res) {
  res.render("becomeMember");
}

async function becomeMember(req, res, next) {
  try {
    if (req.body.memberPassword === "password") {
      await db.becomeMember(req.user.username);
      res.redirect("/");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = {
  showForm,
  becomeMember,
};
