import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./index";
import { vi } from "vitest";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
