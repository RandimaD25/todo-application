import express from "express";
import { getTodos, createTodo } from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter.get("/get-todos", getTodos);
todoRouter.post("/create-todo", createTodo);

export default todoRouter;
