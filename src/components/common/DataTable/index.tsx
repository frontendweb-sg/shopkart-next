export type TableColumnProps<T, K extends keyof T> = {
  field: K;
  headerName?: string;
};
export type TableProps<T, K extends keyof T> = {
  rows: T[];
  columns: Array<TableColumnProps<T, K>>;
};
const DataTable = <T, K extends keyof T>({ columns, rows }: TableProps<T, K>) => {
  return (
    <div className="shadow-sm overflow-hidden my-8">
      <table className="border-collapse table-auto w-full text-sm rounded-md bg-slate-100">
        <thead>
          <tr className="bg-slate-300">
            {columns.map((column: TableColumnProps<T, K>, index: number) => (
              <th
                key={index}
                className="border-b dark:border-slate-600 font-medium p-3  text-slate-400 dark:text-slate-200 text-left"
              >
                {column["headerName" ?? "field"]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-slate-200">
          {rows.map((row: T, index: number) => {
            return (
              <tr key={index}>
                {columns.map((col: TableColumnProps<T, K>, subIndex: number) => (
                  <td
                    key={"row-" + index + "-col-" + subIndex}
                    className="border-b p-3 border-slate-300"
                  >
                    {row[col["field"]] as string}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
