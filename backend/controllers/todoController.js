import { getAllTodos, addTodo, updateTodo } from "../models/todoModel.js";

export async function getTodos(req, res) {
  try {
    const todos = await getAllTodos();
    return res.json({ success: true, todos });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}

export async function createTodo(req, res) {
  const { title, description } = req.body;
  try {
    const newTodo = await addTodo(title, description);
    return res.json({ success: true, message: "New todo is added", newTodo });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message || "Something went wrong",
    });
  }
}

export async function completeTodo(req, res) {
  const { id } = req.params;
  try {
    const completedTodo = await updateTodo(id);
    return res.json({
      success: true,
      message: "Todo is completed",
      completedTodo,
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error.message || "Something went wrong",
    });
  }
}
