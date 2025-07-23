import express from "express";
import {
  getTodos,
  createTodo,
  completeTodo,
} from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter.get("/get-todos", getTodos);
todoRouter.post("/create-todo", createTodo);
todoRouter.put("/complete-todo/:id", completeTodo);

export default todoRouter;
