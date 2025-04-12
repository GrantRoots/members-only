const db = require("../db/queries");

function showForm(req, res) {
  res.render("becomeMember");
}

async function becomeMember(req, res) {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = {
  showForm,
  becomeMember,
};
