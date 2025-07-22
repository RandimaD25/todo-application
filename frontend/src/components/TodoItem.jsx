import React from "react";

const TodoItem = () => {
  return (
    <div className="bg-amber-100 p-3 rounded-lg my-4 xl:ml-20">
      <p className="text-lg font-bold px-6 py-2">Buy Book</p>
      <p className="px-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
        voluptate. Natus enim laudantium dolores nam dolorum fuga quibusdam
        tempora numquam.
      </p>
      <div className="flex  justify-end mx-6">
        <button className="bg-amber-500 text-white py-2 px-10 rounded-lg font-semibold">
          Done
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
