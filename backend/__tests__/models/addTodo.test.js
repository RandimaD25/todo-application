import { addTodo } from "../../models/todoModel.js";
import db from "../../config/database.js";

jest.mock("../../config/database.js", () => ({
  query: jest.fn(),
}));

describe("addTodo", () => {
  it("should insert todo and return inserted data", async () => {
    const mockInsertId = 5;
    db.query.mockResolvedValueOnce([{ insertId: mockInsertId }]);

    const result = await addTodo("Sample Title", "Sample Description");
    expect(db.query).toHaveBeenCalledWith(
      "INSERT INTO task (title, description) VALUES (?, ?)",
      ["Sample Title", "Sample Description"]
    );
    expect(result).toEqual({
      id: mockInsertId,
      title: "Sample Title",
      description: "Sample Description",
    });
  });
});
