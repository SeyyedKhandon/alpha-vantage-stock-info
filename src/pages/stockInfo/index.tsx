import Table from "@/components/table";
import { useEffect, useState } from "react";
import GetStockInfo from "@/api";
import Chart from "@/components/chart";
import { useNavigate } from "react-router-dom";

function StockInfo() {
  const navigate = useNavigate();
  const symbol = window.location.pathname.split("/").at(-1);
  const [data, setData] = useState({ info: [], dailyPrices: [] });

  useEffect(() => {
    if (symbol)
      GetStockInfo(symbol).then((res) => {
        setData(res as any);
        console.log(res);
      });
    else navigate("/");
  }, []);

  if (data === null)
    return <div className="text-4xl text-red-500">You Hit the API Limit</div>;

  if (data.info.length === 0)
    return (
      <div
        role="status"
        className="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
      >
        <div className="mb-2.5 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-10 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mt-4 flex items-baseline space-x-6">
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-56 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-64 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
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
