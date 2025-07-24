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

  it("renders title and description correctly", () => {
    render(<TodoItem {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("calls onComplete callback when Done button is clicked", () => {
    render(<TodoItem {...defaultProps} />);
    const doneButton = screen.getByRole("button", { name: /done/i });
    fireEvent.click(doneButton);
    expect(defaultProps.onComplete).toHaveBeenCalledTimes(1);
  });

  it("button has correct text and className", () => {
    render(<TodoItem {...defaultProps} />);
    const doneButton = screen.getByRole("button", { name: /done/i });
    expect(doneButton).toBeInTheDocument();
    expect(doneButton).toHaveClass("bg-amber-500");
  });
});
