import axios from "axios";
import { getTodos } from "../../services/get-todos.service";

// Mock both axios and the config
jest.mock("axios");
jest.mock("../../config", () => ({
  backendUrl: "http://localhost:4000", // mock backend URL
}));

describe("getTodos", () => {
  it("should return todo list from API", async () => {
    const mockData = [
      { id: 1, title: "Test 1", description: "Desc 1" },
      { id: 2, title: "Test 2", description: "Desc 2" },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await getTodos();

    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:4000/api/task/get-todos"
    );
    expect(result).toEqual(mockData);
  });

  it("should throw error response data on failure", async () => {
    const errorData = { message: "Failed to fetch todos" };

    axios.get.mockRejectedValueOnce({
      response: { data: errorData },
    });

    await expect(getTodos()).rejects.toEqual(errorData);
  });

  it("should throw raw error if no response data exists", async () => {
    const rawError = new Error("Network Error");

    axios.get.mockRejectedValueOnce(rawError);

    await expect(getTodos()).rejects.toEqual(rawError);
  });
});
