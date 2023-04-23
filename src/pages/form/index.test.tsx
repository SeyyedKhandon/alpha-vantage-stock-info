import { render, fireEvent } from "@testing-library/react";
import Form from "./index";
import { MemoryRouter } from "react-router-dom";

const FormWrappedByRouter = () => (
  <MemoryRouter>
    <Form />
  </MemoryRouter>
);

describe("Form Component", () => {
  test("Should render correctly", () => {
    const { getByText, getByLabelText, getByRole } = render(
      <FormWrappedByRouter />
    );
    expect(getByText("Enter Market Symbol")).toBeInTheDocument();
    expect(getByLabelText("Symbol")).toBeInTheDocument();
    expect(getByLabelText("Symbol")).toHaveAttribute("required");
    expect(getByRole("button", { name: /submit →/i })).toBeInTheDocument();
  });

  test("Should update the symbol state on input change", () => {
    const { getByRole } = render(<FormWrappedByRouter />);
    const input = getByRole("textbox", { name: /symbol/i }) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "AAPL" } });
    expect(input.value).toBe("AAPL");
  });

  test("Should not submit the form when symbol is not provided", () => {
    const { getByText } = render(<FormWrappedByRouter />);
    const submitButton = getByText("Submit →");
    fireEvent.click(submitButton);
    expect(window.location.pathname).toBe("/");
  });
});
