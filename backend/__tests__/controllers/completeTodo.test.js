import { completeTodo } from "../../controllers/todoController.js";
import * as todoModel from "../../models/todoModel.js";

describe("completeTodo Controller", () => {
  const mockRes = {
    json: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return success response when todo is completed", async () => {
    const mockReq = {
      params: { id: "123" },
    };

    const mockCompletedTodo = {
      id: "123",
      title: "Finish testing",
      description: "Write Jest tests",
      completed: true,
    };

    jest.spyOn(todoModel, "updateTodo").mockResolvedValue(mockCompletedTodo);

    await completeTodo(mockReq, mockRes);

    expect(todoModel.updateTodo).toHaveBeenCalledWith("123");

    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: "Todo is completed",
      completedTodo: mockCompletedTodo,
    });
  });

  it("should return error response when updateTodo throws error", async () => {
    const mockReq = {
      params: { id: "123" },
    };

    jest
      .spyOn(todoModel, "updateTodo")
      .mockRejectedValue(new Error("DB error"));

    await completeTodo(mockReq, mockRes);

    expect(todoModel.updateTodo).toHaveBeenCalledWith("123");

    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      error: "DB error",
    });
  });
});
