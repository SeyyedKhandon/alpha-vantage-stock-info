import { AAPL_OVERVIEW, AAPL_TIME_SERIES_DAILY_ADJUSTED } from "@/test/db";
import { companyOverviewAdaptor, dailyClosePricesAdaptor } from "./adaptor";
import {
  CompanyOverview,
  CompanyBasicInfo,
  TimeSeriesDailyAdjusted,
  DailyClosePrice,
} from "./types";

describe("companyOverviewAdaptor", () => {
  it("should return a CompanyBasicInfo object with relevant properties from the input CompanyOverview object", () => {
    const data: CompanyOverview = AAPL_OVERVIEW;

    const expectedOutput: CompanyBasicInfo = {
      name: AAPL_OVERVIEW.Name,
      description: AAPL_OVERVIEW.Description,
      country: AAPL_OVERVIEW.Country,
      "Market Capitalization": AAPL_OVERVIEW.MarketCapitalization,
    };

    expect(companyOverviewAdaptor(data)).toEqual(expectedOutput);
  });
});

describe("dailyClosePricesAdaptor", () => {
  it("should return an array of DailyClosePrice objects with time and closePrice properties from the input TimeSeriesDailyAdjusted object", () => {
    const data: TimeSeriesDailyAdjusted = AAPL_TIME_SERIES_DAILY_ADJUSTED;

    const expectedOutput: DailyClosePrice[] = [
      { time: "2023-04-19", closePrice: "167.63" },
      { time: "2023-04-20", closePrice: "166.65" },
      { time: "2023-04-21", closePrice: "165.02" },
    ];

    expect(dailyClosePricesAdaptor(data)).toEqual(expectedOutput);
  });
});
