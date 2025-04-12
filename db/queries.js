const pool = require("./pool");

async function signUp(values) {
  await pool.query(
    "INSERT INTO users(first_name, last_name, username, password, membership, admin) VALUES($1, $2, $3, $4, $5, $6);",
    values
  );
}

async function becomeMember(user) {
  await pool.query(
    "UPDATE users SET membership = 'true' WHERE username = $1;",
    [user]
  );
}

async function addMessage(values) {
  await pool.query(
    "INSERT INTO messages(message, date, first_name, last_name) VALUES($1, $2, $3, $4)",
    values
  );
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function becomeAdmin(username) {
  await pool.query("UPDATE users SET admin = 'true' WHERE username = $1;", [
    username,
  ]);
}

async function deleteMessage(message) {
  await pool.query("DELETE FROM messages WHERE message = $1", [message]);
}

module.exports = {
  signUp,
  becomeMember,
  addMessage,
  getAllMessages,
  becomeAdmin,
  deleteMessage,
};
