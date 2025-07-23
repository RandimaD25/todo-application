import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
