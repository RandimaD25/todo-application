import { createTodo } from "../../controllers/todoController.js";
import * as todoModel from "../../models/todoModel.js";

describe("Unit Test: createTodo", () => {
  const mockReq = {
    body: {
      title: "Sample Todo",
      description: "Sample Description",
    },
  };

  const mockRes = {
    json: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return success response when todo is created", async () => {
    const mockTodo = {
      id: "1",
      title: "Sample Todo",
      description: "Sample Description",
    };

    jest.spyOn(todoModel, "addTodo").mockResolvedValue(mockTodo);

    await createTodo(mockReq, mockRes);

    expect(todoModel.addTodo).toHaveBeenCalledWith(
      "Sample Todo",
      "Sample Description"
    );

    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: "New todo is added",
      newTodo: mockTodo,
    });
  });

  it("should return error response when addTodo throws error", async () => {
    jest
      .spyOn(todoModel, "addTodo")
      .mockRejectedValue(new Error("Failed to add todo"));

    await createTodo(mockReq, mockRes);

    expect(todoModel.addTodo).toHaveBeenCalled();

    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      error: "Failed to add todo",
    });
  });
});
