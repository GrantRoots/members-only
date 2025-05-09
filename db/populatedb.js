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
    membership BOOLEAN,
    admin BOOLEAN
);

CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message TEXT,
    date TEXT,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

INSERT INTO users (first_name, last_name, username, password, membership, admin) 
VALUES ('Firstname', 'Lastname', 'Testuser', '123', 'false', 'false');

INSERT INTO messages (message, date, first_name, last_name) 
VALUES ('Hello this is a test message', '4/11/2025', 'FirstName', 'LastName');
`;

const ENV = process.env.ENV || null;
if (ENV === "dev") {
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
} else {
  const DATABASE_HOST = process.env.DATABASE_HOST;
  const DATABASE_USER = process.env.DATABASE_USER;
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  const DATABASE_NAME = process.env.DATABASE_NAME;
  async function main() {
    const client = new Client({
      connectionString: `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}?sslmode=require`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
  }
  main();
}
