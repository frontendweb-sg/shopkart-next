import classNames from "classnames";
import TableCell from "./TableCell";

type TableBodyProps<T, K extends keyof T> = TableProps<T, K> & {};

/**
 * Table body component
 * @param param0
 * @returns
 */
const TableBody = <T, K extends keyof T>({ rows, columns, ...rest }: TableBodyProps<T, K>) => {
  return (
    <tbody>
      {rows.map((row: T, rowIndex: number) => (
        <tr
          key={`row-${rowIndex}`}
          className={classNames("hover:bg-gray-100", {
            "border-b border-gray-100": rowIndex !== rows.length - 1,
          })}
        >
          {columns.map((col: ColumnDefination<T, K>, colIndex: number) => {
            if ("renderCell" in col)
              return (
                <TableCell
                  component="td"
                  key={`${col["field"] as string}-${rowIndex}-col-${colIndex}`}
                >
                  {col.renderCell?.(row, col, rowIndex)}
                </TableCell>
              );
            return (
              <TableCell
                component="td"
                key={`${col["field"] as string}-${rowIndex}-col-${colIndex}`}
              >
                {row[col["field"]] as string}
              </TableCell>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
