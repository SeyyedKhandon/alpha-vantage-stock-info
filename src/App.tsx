import Table from "@/components/table";
import { useEffect, useState } from "react";
import GetStockInfo from "@/api";
import Chart from "./components/chart";

function App() {
  const symbol = window.location.pathname.slice(1);
  const [data, setData] = useState({ info: [], dailyPrices: [] });

  console.log(data);

  useEffect(() => {
    GetStockInfo(symbol).then((res) => setData(res as any));
  }, []);
  return (
    <main className="my-10 min-h-full w-full justify-around gap-4 lg:flex">
      <Chart className="w-full lg:w-1/2" data={data.dailyPrices} />
      <Table className="w-full lg:w-1/2" records={data.info} />
    </main>
  );
}

export default App;
