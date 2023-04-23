import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/App";

describe("App", () => {
  
  it("should render the Form Page with a heading and input and button", async () => {
    const { getByRole, getByText, getByLabelText } = render(<App />);

    await waitFor(() => {
      const formHeading = getByText("Enter Market Symbol");
      expect(formHeading).toBeInTheDocument();

      const formInput = getByLabelText("Symbol");
      expect(formInput).toBeInTheDocument();

      const formButton = getByRole("button", { name: /submit →/i });
      expect(formButton).toBeInTheDocument();
    });
  });

  it("should render the AAPL StockInfo After submitting AAPL Symbol on Form Page", async () => {
    const { getByRole, getByLabelText } = render(<App />);
    const user = userEvent.setup();

    await user.type(getByLabelText("Symbol"), "AAPL");
    await user.click(getByRole("button", { name: /submit →/i }));

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId("list-skeleton")).toBeInTheDocument();
      expect(screen.getByTestId("chart-skeleton")).toBeInTheDocument();
    });
  });
});
