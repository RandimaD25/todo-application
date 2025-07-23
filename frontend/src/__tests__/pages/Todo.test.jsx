import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "../../pages/Todo";

// Mock react-toastify
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock environment variable access in your services
jest.mock("../../services/create-todo.service", () => ({
  createTodo: jest.fn(),
}));
jest.mock("../../services/get-todos.service", () => ({
  getTodos: jest.fn(),
}));
jest.mock("../../services/complete-todo.service", () => ({
  completeTodo: jest.fn(),
}));

// Mock TodoItem so tests isolate Todo logic
jest.mock(
  "../../components/TodoItem",
  () =>
    ({ title, description, onComplete }) =>
      (
        <div data-testid="todo-item">
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={onComplete}>Done</button>
        </div>
      )
);

import { createTodo } from "../../services/create-todo.service";
import { getTodos } from "../../services/get-todos.service";
import { completeTodo } from "../../services/complete-todo.service";
import { toast } from "react-toastify";

describe("Todo Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders form elements correctly", () => {
    render(<Todo />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  test("fetches and displays todos", async () => {
    getTodos.mockResolvedValue({
      todos: [
        {
          id: 1,
          title: "Sample",
          description: "Sample Description",
          isCompleted: false,
        },
      ],
    });

    render(<Todo />);

    expect(await screen.findByText("Sample")).toBeInTheDocument();
    expect(screen.getByText("Sample Description")).toBeInTheDocument();
  });

  test("submits form and calls createTodo", async () => {
    getTodos.mockResolvedValue({ todos: [] });
    createTodo.mockResolvedValue({
      success: true,
      message: "Todo created",
    });

    render(<Todo />);

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "New Task" },
    });

    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: "New Description" },
    });

    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    await waitFor(() => {
      expect(createTodo).toHaveBeenCalledWith({
        title: "New Task",
        description: "New Description",
      });
      expect(toast.success).toHaveBeenCalledWith("Todo created");
    });
  });

  test("calls completeTodo when Done is clicked", async () => {
    getTodos.mockResolvedValue({
      todos: [
        {
          id: 99,
          title: "Complete Me",
          description: "Do this",
          isCompleted: false,
        },
      ],
    });

    completeTodo.mockResolvedValue({
      success: true,
      message: "Marked as completed",
    });

    render(<Todo />);

    const doneButton = await screen.findByText("Done");
    fireEvent.click(doneButton);

    await waitFor(() => {
      expect(completeTodo).toHaveBeenCalledWith({ id: 99 });
      expect(toast.success).toHaveBeenCalledWith("Marked as completed");
    });
  });

  test("shows error toast if getTodos fails", async () => {
    getTodos.mockRejectedValue(new Error("Failed to load"));

    render(<Todo />);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Failed to load");
    });
  });

  test("shows error toast if createTodo fails", async () => {
    getTodos.mockResolvedValue({ todos: [] });
    createTodo.mockRejectedValue({ error: "Create failed" });

    render(<Todo />);

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "Fail Task" },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: "Fail Description" },
    });

    fireEvent.click(screen.getByRole("button", { name: /add/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Create failed");
    });
  });

  test("shows error toast if completeTodo fails", async () => {
    getTodos.mockResolvedValue({
      todos: [
        {
          id: 101,
          title: "Incomplete",
          description: "Try to complete",
          isCompleted: false,
        },
      ],
    });

    completeTodo.mockRejectedValue(new Error("Complete failed"));

    render(<Todo />);

    const doneButton = await screen.findByText("Done");
    fireEvent.click(doneButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Complete failed");
    });
  });
});
