import axios from "axios";
import { completeTodo } from "../../services/complete-todo.service";

// Mock config.js to inject backendUrl for tests
jest.mock("../../config", () => ({
  backendUrl: "http://localhost:4000",
}));

jest.mock("axios");

describe("completeTodo service", () => {
  it("should send PUT request and return data", async () => {
    const mockData = { message: "Todo completed" };
    axios.put.mockResolvedValue({ data: mockData });

    const result = await completeTodo({ id: 1 });

    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:4000/api/task/complete-todo/1"
    );
    expect(result).toEqual(mockData);
  });

  it("should throw error if request fails", async () => {
    axios.put.mockRejectedValue({ response: { data: "Error" } });

    await expect(completeTodo({ id: 1 })).rejects.toEqual("Error");
  });
});
