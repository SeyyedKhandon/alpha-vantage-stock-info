import { render, screen, waitFor } from "@testing-library/react";
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
      screen.debug();
    });
  });
});
