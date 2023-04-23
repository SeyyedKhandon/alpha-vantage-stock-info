export default function Table({
  records,
  className = "",
}: {
  records: [string, string | number][];
  className: string;
}) {
  return (
    <table className={`table-auto border-collapse text-sm ${className}`}>
      <tbody>
        {records.map((record) => (
          <tr key={record[0]} className="flex flex-col md:flex-row">
            <th className="flex-1 border-b bg-slate-200 p-4 pl-8  text-left font-medium capitalize text-slate-400">
              {record[0]}
            </th>
            <td className="line-clamp-3 flex-1 border-b border-slate-100 p-4 pl-8 text-slate-500">
              {record[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
