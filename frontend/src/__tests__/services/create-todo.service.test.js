import axios from "axios";
import { createTodo } from "../../services/create-todo.service";
import { backendUrl } from "../../config";

// Automatically mock axios
jest.mock("axios");
jest.mock("../../config", () => ({
  backendUrl: "http://localhost:4000", // mock URL
}));

describe("createTodo", () => {
  const mockTodo = {
    title: "Test Title",
    description: "Test Description",
  };

  it("should post data and return the response", async () => {
    const mockResponse = { success: true, message: "Todo created" };

    axios.post.mockResolvedValueOnce({ data: mockResponse });

    const result = await createTodo(mockTodo);

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:4000/api/task/create-todo",
      mockTodo
    );
    expect(result).toEqual(mockResponse);
  });

  it("should throw error response data on failure", async () => {
    const errorData = { message: "Creation failed" };

    axios.post.mockRejectedValueOnce({
      response: { data: errorData },
    });

    await expect(createTodo(mockTodo)).rejects.toEqual(errorData);
  });

  it("should throw raw error if no response data exists", async () => {
    const error = new Error("Network error");

    axios.post.mockRejectedValueOnce(error);

    await expect(createTodo(mockTodo)).rejects.toEqual(error);
  });
});
