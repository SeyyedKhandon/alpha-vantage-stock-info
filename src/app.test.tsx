import { render } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it('should render the button with text "Click Me"', () => {
    const { getByRole } = render(<App />);
    const button = getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
