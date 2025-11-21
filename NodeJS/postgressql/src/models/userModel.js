import pool from "../config/db.js";

export const getAllUserService = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    throw error;
  }
};

export const getUserByIdService = async (id) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return rows;
  } catch (error) {
    throw error;
  }
};

export const createUserService = async (data) => {
  try {
    const { name, email, age } = data;
    const { rows } = await pool.query(
      "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
      [name, email, age]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

export const updateUserService = async (id, data) => {
  try {
    const { name, email, age } = data;
    const { rows } = await pool.query(
      "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
      [name, email, age, id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
};

export const deleteUserService = async (id) => {
  try {
    const { rows } = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return rows;
  } catch (error) {
    throw error;
  }
};

