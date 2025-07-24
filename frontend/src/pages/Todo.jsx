import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { createTodo } from "../services/create-todo.service";
import { getTodos } from "../services/get-todos.service";
import { toast } from "react-toastify";
import { completeTodo } from "../services/complete-todo.service";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data.todos);
    } catch (error) {
      toast.error(error.message || "Failed to load todos");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createTodo({ title, description });

      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setDescription("");
        fetchTodos();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.error || "Something went wrong");
    }
  };

  const handleComplete = async (id) => {
    try {
      const data = await completeTodo({ id });
      if (data.success) {
        toast.success(data.message);

        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="lg:flex gap-5 md:gap-10 lg:gap-8 xl:gap-10 2xl-40 py-10 px-5 xl:px-16 justify-center">
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold">Add a Task</h1>

        <div className="mt-6 ">
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <br />
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className="outline-none border-2 border-solid rounded-lg py-1 mt-1 px-3 w-full "
                required
              />
            </div>

            <div className="my-4">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <br />
              <textarea
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="outline-none border-2 border-solid rounded-lg py-1 mt-1 px-3 w-full"
                required
              />
            </div>

            <button
              className="bg-amber-500 font-semibold text-white py-2 px-3 rounded-lg w-full cursor-pointer"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="">
        {[...(todos || [])]
          .filter((todo) => !todo.isCompleted)
          .sort((a, b) => b.id - a.id)
          .slice(0, 5)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              description={todo.description}
              onComplete={() => handleComplete(todo.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Todo;
