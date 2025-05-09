const db = require("../db/queries");

function showForm(req, res) {
  res.render("becomeAdmin");
}

async function becomeAdmin(req, res, next) {
  if (req.body.adminPassword === "admin") {
    try {
      await db.becomeAdmin(req.user.username);
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  } else {
    res.render("/becomeAdmin");
  }
}

module.exports = {
  showForm,
  becomeAdmin,
};
