export { endPoints, fetchData } from "./config";
export { Api } from "./provider";

// modules
export type {
  CompanyBasicInfo,
  DailyClosePrice,
  CompanyOverview,
  MetaData,
  TimeSeriesDaily,
  TimeSeriesDailyAdjusted,
  companyBasicInfoSchema,
  companyOverviewSchema,
  dailyClosePriceSchema,
  metaDataSchema,
  timeSeriesDailyAdjustedSchema,
  timeSeriesDailySchema,
} from "./modules/stockInfo/types";

export {
  useFetchCompanyBasicInfo,
  useFetchDailyClosePrices,
} from "./modules/stockInfo";
