import db from "../config/database.js";

export async function getAllTodos() {
  const [rows] = await db.query("SELECT * FROM task");
  return rows;
}

export async function addTodo(title, description) {
  const [result] = await db.query(
    "INSERT INTO task (title, description) VALUES (?, ?)",
    [title, description]
  );
  return { id: result.insertId, title, description };
}
