import { getTodos } from "../../controllers/todoController.js";
import * as todoModel from "../../models/todoModel.js";

describe("getTodos controller", () => {
  it("should return todos with success true", async () => {
    // Mock data returned by model
    const mockTodos = [
      { id: 1, title: "Test todo", description: "Test description" },
    ];

    // Mock the getAllTodos function
    jest.spyOn(todoModel, "getAllTodos").mockResolvedValue(mockTodos);

    // Mock req, res objects
    const req = {};
    const res = {
      json: jest.fn(),
    };

    await getTodos(req, res);

    // Check if res.json called with expected data
    expect(res.json).toHaveBeenCalledWith({ success: true, todos: mockTodos });

    // Restore mock
    todoModel.getAllTodos.mockRestore();
  });

  it("should return error response on failure", async () => {
    const errorMessage = "DB error";

    jest
      .spyOn(todoModel, "getAllTodos")
      .mockRejectedValue(new Error(errorMessage));

    const req = {};
    const res = {
      json: jest.fn(),
    };

    await getTodos(req, res);

    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: errorMessage,
    });

    todoModel.getAllTodos.mockRestore();
  });
});
