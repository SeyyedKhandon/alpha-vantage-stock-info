import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({
  className = "",
  data,
  symbol = "",
}: {
  className: string;
  data: any;
  symbol: string;
}) {
  const renderLineChart = (
    <ResponsiveContainer height="100%" aspect={1}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <div className={className}>
      {renderLineChart}
      <h3 className="text-center text-xl">{symbol}</h3>
    </div>
  );
}
