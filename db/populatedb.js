#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

SQL = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    membership TEXT,
);

INSERT INTO users(first_name, last_name, username, password, membership) VALUES(
    Firstname, Lastname, Testuser, 123, member
);
`;

const ROLE_NAME = process.env.ROLE_NAME;
const ROLE_PASSWORD = process.env.ROLE_PASSWORD;
async function main() {
  const client = new Client({
    connectionString: `postgresql://${ROLE_NAME}:${ROLE_PASSWORD}@localhost:5432/users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}
main();
