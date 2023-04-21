import Table from "@/components/table";
import { useEffect, useState } from "react";
import GetStockInfo from "@/api";
import Chart from "@/components/chart";

function App() {
  const symbol = window.location.pathname.slice(1);
  const [data, setData] = useState({ info: [], dailyPrices: [] });

  useEffect(() => {
    if (symbol)
      GetStockInfo(symbol).then((res) => {
        setData(res as any);
        console.log(res);
      });
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
    <main className="my-10 min-h-full w-full justify-around gap-4 lg:flex">
      <Chart className="w-full lg:w-1/2" data={data.dailyPrices} />
      <Table className="w-full lg:w-1/2" records={data.info} />
    </main>
  );
}

export default App;
