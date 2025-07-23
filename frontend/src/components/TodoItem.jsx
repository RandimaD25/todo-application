import React, { useState } from "react";
import { completeTodo } from "../services/complete-todo.service";
import { toast } from "react-toastify";

const TodoItem = ({ id, title, description }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = async () => {
    try {
      const data = await completeTodo({ id });
      setIsCompleted(true);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message || "Failed to complete the Todo");
    }
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
          {isCompleted ? "Completed" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
