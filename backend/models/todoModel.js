import db from "../config/database.js";

export async function getAllTodos() {
  const [rows] = await db.query("SELECT * FROM todos");
  return rows;
}

export async function addTodo(title, description) {
  const [result] = await db.query(
    "INSERT INTO todos (title, description) VALUES (?, ?)",
    [title, description]
  );
  return { id: result.insertId, title, description };
}
