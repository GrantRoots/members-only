const pool = require("./pool");

async function signUp(values) {
  await pool.query(
    "INSERT INTO users(first_name, last_name, username, password, membership) VALUES($1, $2, $3, $4, $5);",
    values
  );
}

async function becomeMember(user) {
  await pool.query("UPDATE users SET membership = 'true' WHERE username = $1;"),
    [user];
}

module.exports = {
  signUp,
  becomeMember,
};
