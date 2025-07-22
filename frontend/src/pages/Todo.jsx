import React from "react";

const Todo = () => {
  return (
    <div className="md:flex gap-3">
      <div className="p-10">
        <h1 className="text-4xl font-bold">Add a Task</h1>

        <div className="mt-6 ">
          <form action="">
            <div className="my-4">
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                placeholder="Title"
                id="title"
                className="outline-none border-2 border-solid rounded-lg py-1 mt-1 px-3 w-full"
              />
            </div>

            <div className="my-4">
              <label htmlFor="description">Description</label>
              <br />
              <textarea
                type="text"
                placeholder="Description"
                id="description"
                className="outline-none border-2 border-solid rounded-lg py-1 mt-1 px-3 w-full"
              />
            </div>

            <button className="bg-amber-500 text-white py-2 px-3 rounded-lg w-full">
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="bg-amber-200">Hell</div>
    </div>
  );
};

export default Todo;
