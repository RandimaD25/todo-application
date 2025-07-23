import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItem from "../../components/TodoItem";

describe("TodoItem Component", () => {
  const defaultProps = {
    title: "Test Title",
    description: "Test Description",
    onComplete: jest.fn(),
  };

  test("renders title and description correctly", () => {
    render(<TodoItem {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  test("calls onComplete callback when Done button is clicked", () => {
    render(<TodoItem {...defaultProps} />);
    const doneButton = screen.getByRole("button", { name: /done/i });
    fireEvent.click(doneButton);
    expect(defaultProps.onComplete).toHaveBeenCalledTimes(1);
  });

  test("button has correct text and className", () => {
    render(<TodoItem {...defaultProps} />);
    const doneButton = screen.getByRole("button", { name: /done/i });
    expect(doneButton).toBeInTheDocument();
    expect(doneButton).toHaveClass("bg-amber-500");
  });
});
