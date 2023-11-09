import classNames from "classnames";
import { date } from "yup";

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
    <div className="overflow-hidden mt-3">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
          <tr className="bg-rose-100">
            {columns.map((column: TableColumnProps<T, K>, index: number) => (
              <th
                key={index}
                className="border-b dark:border-slate-600 font-medium p-3  text-gray-900 dark:text-slate-200 text-left"
              >
                {column["headerName" ?? "field"]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {rows.map((row: T, index: number) => {
            return (
              <tr
                key={index}
                className={classNames(
                  index !== rows.length - 1 && "border-b border-gray-100",
                  "hover:bg-gray-100"
                )}
              >
                {columns.map((col: TableColumnProps<T, K>, subIndex: number) => (
                  <td key={"row-" + index + "-col-" + subIndex} className="p-3">
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
