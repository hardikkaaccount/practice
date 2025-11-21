import pool from "../config/db.js";

const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      age INT NOT NULL
    )
  `;
  await pool.query(query);
  console.log("User table created successfully");
};
createUserTable();
export default createUserTable;