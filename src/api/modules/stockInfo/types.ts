import { z } from "zod";

export const metaDataSchema = z.object({
  "1. Information": z.string(),
  "2. Symbol": z.string(),
  "3. Last Refreshed": z.string(),
  "4. Output Size": z.string(),
  "5. Time Zone": z.string(),
});

export const timeSeriesDailySchema = z.object({
  "1. open": z.string(),
  "2. high": z.string(),
  "3. low": z.string(),
  "4. close": z.string(),
  "5. adjusted close": z.string(),
  "6. volume": z.string(),
  "7. dividend amount": z.string(),
  "8. split coefficient": z.string(),
});

export const dailyClosePriceSchema = z.object({
  time: z.string(),
  closePrice: z.string(),
});

export const companyOverviewSchema = z.object({
  Symbol: z.string(),
  AssetType: z.string(),
  Name: z.string(),
  Description: z.string(),
  CIK: z.string(),
  Exchange: z.string(),
  Currency: z.string(),
  Country: z.string(),
  Sector: z.string(),
  Industry: z.string(),
  Address: z.string(),
  FiscalYearEnd: z.string(),
  LatestQuarter: z.string(),
  MarketCapitalization: z.string(),
  EBITDA: z.string(),
  PERatio: z.string(),
  PEGRatio: z.string(),
  BookValue: z.string(),
  DividendPerShare: z.string(),
  DividendYield: z.string(),
  EPS: z.string(),
  RevenuePerShareTTM: z.string(),
  ProfitMargin: z.string(),
  OperatingMarginTTM: z.string(),
  ReturnOnAssetsTTM: z.string(),
  ReturnOnEquityTTM: z.string(),
  RevenueTTM: z.string(),
  GrossProfitTTM: z.string(),
  DilutedEPSTTM: z.string(),
  QuarterlyEarningsGrowthYOY: z.string(),
  QuarterlyRevenueGrowthYOY: z.string(),
  AnalystTargetPrice: z.string(),
  TrailingPE: z.string(),
  ForwardPE: z.string(),
  PriceToSalesRatioTTM: z.string(),
  PriceToBookRatio: z.string(),
  EVToRevenue: z.string(),
  EVToEBITDA: z.string(),
  Beta: z.string(),
  "52WeekHigh": z.string(),
  "52WeekLow": z.string(),
  "50DayMovingAverage": z.string(),
  "200DayMovingAverage": z.string(),
  SharesOutstanding: z.string(),
  DividendDate: z.string(),
  ExDividendDate: z.string(),
});

export const companyBasicInfoSchema = z.object({
  name: z.string(),
  description: z.string(),
  country: z.string(),
  "Market Capitalization": z.string(),
});

export const timeSeriesDailyAdjustedSchema = z.object({
  "Meta Data": metaDataSchema,
  "Time Series (Daily)": z.record(timeSeriesDailySchema),
});


export type TimeSeriesDailyAdjusted = z.infer<
  typeof timeSeriesDailyAdjustedSchema
>;
export type MetaData = z.infer<typeof metaDataSchema>;
export type TimeSeriesDaily = z.infer<typeof timeSeriesDailySchema>;
export type DailyClosePrice = z.infer<typeof dailyClosePriceSchema>;
export type CompanyOverview = z.infer<typeof companyOverviewSchema>;
export type CompanyBasicInfo = z.infer<typeof companyBasicInfoSchema>;
