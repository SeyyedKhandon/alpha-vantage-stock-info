import Table from "@/components/table";
import Chart from "@/components/chart";
import { useNavigate, useParams } from "react-router-dom";
import { ChartSkeleton, ListSkeleton } from "@/components/skeleton";
import { useFetchCompanyBasicInfo, useFetchDailyClosePrices } from "@/api";
import ThemeSwitcher from "@/components/themeSwitcher";
import { Button } from "@/components/button";

function StockInfo() {
  const navigate = useNavigate();
  const { symbol } = useParams<{ symbol: string }>();

  if (!symbol) {
    navigate("/");
    return null;
  }

  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <Button direction="rtl" onClick={() => navigate("/")}>
          &larr; Back
        </Button>
        <ThemeSwitcher />
      </div>
      <CompanyName symbol={symbol} />
      <div className="my-10 flex min-h-full w-full flex-col justify-around gap-8 lg:flex-row-reverse">
        <CompanyInfo symbol={symbol} />
        <DailyClosePricesChart symbol={symbol} />
      </div>
    </div>
  );
}

export function CompanyInfo({ symbol }: { symbol: string }) {
  const {
    data: companyInfo,
    isError,
    isLoading,
  } = useFetchCompanyBasicInfo(symbol);

  if (isError)
    return <div className="text-4xl text-red-500">You Hit the API Limit</div>;

  if (isLoading) return <ListSkeleton className="lg:w-1/2" />;

  const records = Object.entries(companyInfo);

  return <Table className="w-full lg:w-1/2" records={records} />;
}

export function CompanyName({ symbol }: { symbol: string }) {
  const {
    data: companyInfo,
    isError,
    isLoading,
  } = useFetchCompanyBasicInfo(symbol);

  return isError || isLoading ? null : (
    <h1 className="text-center text-4xl text-primary dark:text-primaryDark">
      {companyInfo.name}
    </h1>
  );
}

export function DailyClosePricesChart({ symbol }: { symbol: string }) {
  const {
    data: dailyClosePrices,
    isError,
    isLoading,
  } = useFetchDailyClosePrices(symbol);

  if (isError)
    return <div className="text-4xl text-red-500">You Hit the API Limit</div>;

  if (isLoading) return <ChartSkeleton className="lg:w-1/2" />;

  return (
    <Chart
      className="w-full lg:w-1/2"
      data={dailyClosePrices}
      title={symbol}
      ChartDataKey="closePrice"
      xAxisDataKey="time"
    />
  );
}
export default StockInfo;
