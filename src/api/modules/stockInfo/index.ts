import { useQuery } from "@tanstack/react-query";
import { FetchData } from "@/api";
import { CompanyOverview, TimeSeriesDailyAdjusted } from "./types";
import { dailyClosePricesAdaptor, companyOverviewAdaptor } from "./adaptor";

/**
 * @description Fetch Daily Close Prices
// TODO: ZOD
 */
const fetchDailyClosePrices = async (symbol: string) =>
  dailyClosePricesAdaptor(
    await FetchData<TimeSeriesDailyAdjusted>("dailyPrices", symbol)
  );

export const useFetchDailyClosePrices = (symbol: string) => {
  return useQuery(
    ["fetchDailyClosePrices", symbol],
    () => fetchDailyClosePrices(symbol),
    {
      enabled: !!symbol,
    }
  );
};

/**
 * @description Fetch Company Basic Info
 */
const fetchCompanyBasicInfo = async (symbol: string) =>
  companyOverviewAdaptor(await FetchData<CompanyOverview>("overView", symbol));

export const useFetchCompanyBasicInfo = (symbol: string) =>
  useQuery(
    ["fetchCompanyBasicInfo", symbol],
    () => fetchCompanyBasicInfo(symbol),
    {
      enabled: !!symbol,
    }
  );
