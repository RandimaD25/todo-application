import React from "react";

const TodoItem = ({ title, description, onComplete }) => {
  const handleComplete = async () => {
    onComplete();
  };

  return (
    <div className="bg-amber-100 p-3 rounded-lg my-4 xl:ml-20">
      <p className="text-lg font-bold px-6 py-2">{title}</p>
      <p className="px-6">{description}</p>
      <div className="flex  justify-end mx-6">
        <button
          onClick={handleComplete}
          className="bg-amber-500 text-white py-2 px-10 rounded-lg font-semibold cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
