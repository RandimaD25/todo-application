import { getAllTodos } from "../../models/todoModel.js";
import db from "../../config/database.js";

// Mock the db.query method
jest.mock("../../config/database.js", () => ({
  query: jest.fn(),
}));

describe("getAllTodos", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Reset mocks after each test
  });

  it("should return list of todos from database", async () => {
    const fakeTodos = [{ id: 1, title: "Test", description: "Testing" }];
    db.query.mockResolvedValueOnce([fakeTodos]);

    const result = await getAllTodos();
    expect(db.query).toHaveBeenCalledWith("SELECT * FROM task");
    expect(result).toEqual(fakeTodos);
  });
});
