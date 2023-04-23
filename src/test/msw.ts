import { rest } from "msw";
import { setupServer } from "msw/node";
import { AAPL_OVERVIEW, AAPL_TIME_SERIES_DAILY_ADJUSTED } from "./db";
import { baseURL } from "@/api/config";

const server = setupServer(
  rest.get(baseURL + "query", (req, res, ctx) => {
    const type = req.url.searchParams.get("function");

    const response =
      type === "OVERVIEW"
        ? { ...AAPL_OVERVIEW }
        : { ...AAPL_TIME_SERIES_DAILY_ADJUSTED };

    return res(ctx.json(response));
  })
);

export default server;
