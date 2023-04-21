import axios from "axios";
import { AlphaVantageQueryFunctions } from "./types";

axios.defaults.baseURL = "https://www.alphavantage.co/";

const apiKey = `apikey=${import.meta.env.VITE_API_KEY}`;

const queryBuilder = (
  queryType: AlphaVantageQueryFunctions,
  symbol?: string,
  customQuery?: string
) =>
  !!customQuery
    ? `${customQuery}&${apiKey}`
    : `query?function=${queryType}${
        symbol ? "&symbol=" + symbol : ""
      }&${apiKey}`;

export const endPoints = (symbol?: string) => ({
  dailyPrices: queryBuilder("TIME_SERIES_DAILY_ADJUSTED", symbol),
  overView: queryBuilder("OVERVIEW", symbol),
  symbols: queryBuilder("LISTING_STATUS"),
});

export async function FetchData<T>(
  type: keyof ReturnType<typeof endPoints>,
  symbol?: string
) {
  const { data } = await axios.get(endPoints(symbol)[type]);
  return data as T;
}
