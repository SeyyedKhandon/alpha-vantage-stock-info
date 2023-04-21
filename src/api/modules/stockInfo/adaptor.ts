import {
  CompanyBasicInfo,
  CompanyOverview,
  DailyClosedPrice,
  TimeSeriesDailyAdjusted,
} from "./types";

export const companyOverviewAdaptor = (
  info: CompanyOverview
): CompanyBasicInfo => ({
  name: info.Name,
  description: info.Description,
  country: info.Country,
  ["Market Capitalization"]: info.MarketCapitalization,
});

export const dailyClosePricesAdaptor = (
  dailyPrices: TimeSeriesDailyAdjusted
): DailyClosedPrice[] =>
  Object.entries(dailyPrices["Time Series (Daily)"])
    .map((entry) => ({
      time: entry[0],
      closePrice: entry[1]["4. close"],
    }))
    .reverse();
