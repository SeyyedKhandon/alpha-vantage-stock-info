import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


export default function Chart({
  className = "",
  data,
}: {
  className: string;
  data: any;
}) {
  const renderLineChart = (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  const symbol = window.location.pathname.slice(1);
  return (
    <div className={className}>
      {renderLineChart}
      <h3 className="text-center text-xl">{symbol}</h3>
    </div>
  );
}
