import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function Chart<T>({
  className = "",
  data,
  title = "",
  ChartDataKey = "closePrice",
  xAxisDataKey = "time",
}: {
  className: string;
  data: T[];
  title: string;
  ChartDataKey: string;
  xAxisDataKey: string;
}) {
  const renderLineChart = (
    <ResponsiveContainer height="100%" aspect={1}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey={ChartDataKey} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <div className={`text-slate-500 ${className}`} data-testid="chart">
      {renderLineChart}
      <h3 className="text-center text-xl text-primary dark:text-primaryDark">
        {title}
      </h3>
    </div>
  );
}
