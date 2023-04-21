import Table from "@/components/table";
import { useEffect, useState } from "react";
import GetStockInfo from "@/api";
import Chart from "@/components/chart";
import { useNavigate } from "react-router-dom";
import { ChartSkeleton, ListSkeleton } from "@/components/skeleton";

function StockInfo() {
  const navigate = useNavigate();
  const symbol = window.location.pathname.split("/").at(-1);
  const [data, setData] = useState({ info: [], dailyPrices: [] });

  useEffect(() => {
    if (symbol) GetStockInfo(symbol).then((res) => setData(res as any));
    else navigate("/");
  }, []);

  if (data === null)
    return <div className="text-4xl text-red-500">You Hit the API Limit</div>;

  if (data.info.length === 0)
    return (
      <div className="flex flex-col gap-10 md:flex-row">
        <ChartSkeleton />
        <ListSkeleton />
      </div>
    );

  return (
    <>
      <button
        type="submit"
        onClick={() => navigate("/")}
        className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-slate-800 hover:bg-slate-200"
      >
        &larr; Back
      </button>
      <h1 className="text-center text-4xl">{data.info[0][1]}</h1>
      <div className="my-10 flex min-h-full w-full flex-col justify-around gap-8 lg:flex-row">
        <Table className="w-full lg:order-1 lg:w-1/2" records={data.info} />
        <Chart
          className="w-full lg:w-1/2"
          data={data.dailyPrices}
          symbol={symbol!}
        />
      </div>
    </>
  );
}

export default StockInfo;
