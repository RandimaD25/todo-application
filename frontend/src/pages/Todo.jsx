import React from "react";
import TodoItem from "../components/TodoItem";

const Todo = () => {
  return (
    <div className="xl:flex gap-5 md:gap-10 lg:gap-16 xl:gap-32 2xl-40 py-10 px-5 xl:px-16">
      <div className="xl:w-1/3">
        <h1 className="text-4xl font-bold">Add a Task</h1>

        <div className="mt-6 ">
          <form action="">
            <div className="my-4">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <br />
              <input
                type="text"
                placeholder="Title"
                id="title"
                className="outline-none border-2 border-solid rounded-lg py-1 mt-1 px-3 w-full "
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
                id="description"
                className="outline-none border-2 border-solid rounded-lg py-1 mt-1 px-3 w-full"
              />
            </div>

            <button className="bg-amber-500 font-semibold text-white py-2 px-3 rounded-lg w-full">
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
