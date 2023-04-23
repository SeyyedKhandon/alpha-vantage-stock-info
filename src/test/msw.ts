import { rest } from "msw";
import { setupServer } from "msw/node";
import { AAPL_OVERVIEW, AAPL_TIME_SERIES_DAILY_ADJUSTED } from "./db";
import { baseURL } from "@/api/config";

const server = setupServer(
  rest.get(baseURL + "query", (req, res, ctx) => {
    const type = req.url.searchParams.get("function");
    if (type === "OVERVIEW") return res(ctx.json({ ...AAPL_OVERVIEW }));
    return res(ctx.json({ ...AAPL_TIME_SERIES_DAILY_ADJUSTED }));
  })
);

export default server;
