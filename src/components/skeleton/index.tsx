export function ListSkeleton({ rows = 6, className = "" }) {
  return (
    <div
      role="status"
      className={`flex-grow animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow md:p-6 ${className}`}
    >
      {[...Array(rows).keys()].map((i) => (
        <div className="flex items-center justify-between pt-4" key={i}>
          <div>
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300"></div>
            <div className="h-2 w-32 rounded-full bg-gray-200"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
}

export function ChartSkeleton({ className = "" }) {
  return (
    <div
      role="status"
      className={`animate-pulse rounded border border-gray-200 p-4 shadow md:p-6 ${className}`}
    >
      <div className="mb-2.5 h-2.5 w-32 rounded-full bg-gray-200"></div>
      <div className="mb-10 h-2 w-48 rounded-full bg-gray-200"></div>
      <div className="mt-4 flex items-baseline space-x-6">
        <div className="h-72 w-full rounded-t-lg bg-gray-200"></div>
        <div className="h-56 w-full rounded-t-lg bg-gray-200"></div>
        <div className="h-72 w-full rounded-t-lg bg-gray-200"></div>
        <div className="h-64 w-full rounded-t-lg bg-gray-200"></div>
        <div className="h-80 w-full rounded-t-lg bg-gray-200"></div>
        <div className="h-72 w-full rounded-t-lg bg-gray-200"></div>
        <div className="h-80 w-full rounded-t-lg bg-gray-200"></div>
      </div>
    </div>
  );
}
