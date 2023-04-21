import axios from "axios";

const apikey = `apikey=${import.meta.env.VITE_API_KEY}`;

const URLS = (symbol = "AAPL") => ({
  dailyPrices: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&${apikey}`,
  overView: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&${apikey}`,
});

const cache = {} as any;

export async function FetchData(
  type: "dailyPrices" | "overView",
  symbol = "AAPL"
) {
  const { data } = await axios.get(URLS(symbol)[type]);
  if (data.Note) throw Error;
  return data;
}

export default async function GetStockInfo(symbol: string) {
  if (cache[symbol]) return cache[symbol];

  try {
    const info = await FetchData("overView", symbol);
    const dailyPrices = await FetchData("dailyPrices", symbol);

    cache[symbol] = dataAdaptor(info, dailyPrices);
    localStorage.setItem(symbol, JSON.stringify(cache[symbol]));
  } catch (error) {
    return JSON.parse(localStorage.getItem(symbol)!);
  }
  return cache[symbol];
}

function dataAdaptor(info: any, dailyPrices: any) {
  return {
    info: Object.entries({
      name: info.Name,
      description: info.Description,
      country: info.Country,
      ["Market Capitalization"]: info.MarketCapitalization,
    }),
    dailyPrices: Object.entries(dailyPrices["Time Series (Daily)"]).map(
      (entry: any) => ({
        name: entry[0],
        price: entry[1]["4. close"],
      })
    ),
  };
}
