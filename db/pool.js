require("dotenv").config();
const { Pool } = require("pg");

const ROLE_NAME = process.env.ROLE_NAME;
const ROLE_PASSWORD = process.env.ROLE_PASSWORD;
module.exports = new Pool({
  connectionString: `postgresql://${ROLE_NAME}:${ROLE_PASSWORD}@localhost:5432/users`,
});
