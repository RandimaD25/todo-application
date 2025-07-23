import { updateTodo } from "../../models/todoModel.js";
import db from "../../config/database.js";

jest.mock("../../config/database.js", () => ({
  query: jest.fn(),
}));

describe("updateTodo", () => {
  it("should mark a todo as completed and return affected rows", async () => {
    db.query.mockResolvedValueOnce([{ affectedRows: 1 }]);

    const result = await updateTodo(3);
    expect(db.query).toHaveBeenCalledWith(
      "UPDATE task SET isCompleted = true WHERE id = ?",
      [3]
    );
    expect(result).toEqual({ affectedRows: 1 });
  });
});
