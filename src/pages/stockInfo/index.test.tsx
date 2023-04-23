import { render, screen, waitFor } from "@testing-library/react";
import server from "@/test/msw";
import { Params } from "react-router-dom";
import { vi } from "vitest";
import { Api } from "@/api";
import StockInfo from "./index";
import { AAPL_OVERVIEW } from "@/test/db";

const symbol = "AAPL";
const prepareEnvironment = () => {
  vi.mock("react-router-dom", () => ({
    useParams: (): Readonly<Params<string>> => ({
      symbol,
    }),
    useNavigate: vi.fn(),
  }));
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
};

describe("StockInfo", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("displays skeleton when fetching data", () => {
    prepareEnvironment();
    render(
      <Api>
        <StockInfo />
      </Api>
    );
    expect(screen.getByTestId("chart-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("list-skeleton")).toBeInTheDocument();
  });

  it("renders the company info table and daily close prices chart", async () => {
    prepareEnvironment();
    render(
      <Api>
        <StockInfo />
      </Api>
    );
    await waitFor(() => {
      screen.getByRole("table");
      screen.getAllByText(AAPL_OVERVIEW.Name);
      screen.getByTestId("chart");
    });
  });
});
