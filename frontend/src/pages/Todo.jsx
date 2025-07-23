import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import { createTodo } from "../services/create-todo.service";
import { toast } from "react-toastify";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createTodo({ title, description });

      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setDescription("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.error || "Something went wrong");
    }
  };
  return (
    <div className="xl:flex gap-5 md:gap-10 lg:gap-16 xl:gap-32 2xl-40 py-10 px-5 xl:px-16">
      <div className="xl:w-1/3">
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
              type="submit"
              className="bg-amber-500 font-semibold text-white py-2 px-3 rounded-lg w-full cursor-pointer"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todo;
