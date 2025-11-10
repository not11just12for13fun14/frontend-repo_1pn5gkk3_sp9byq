export default function ResultTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-6 text-center text-gray-600">
        No data yet. Submit the form to view output.
      </div>
    );
  }

  const columns = Object.keys(data[0] ?? {});

  return (
    <div className="overflow-auto rounded-lg border bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 text-left font-medium border-b">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50">
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 border-b whitespace-nowrap">{String(row[col] ?? '')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
