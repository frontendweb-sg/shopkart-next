import TableCell from "./TableCell";

/**
 * Table heading component
 * @param param0
 * @returns
 */
const TableHeading = <T, K extends keyof T>({ columns }: TableProps<T, K>) => {
  return (
    <thead className="bg-rose-100 rounded-md">
      <tr>
        {columns.map((column: ColumnDefination<T, K>, index: number) => (
          <TableCell key={`${column["field"] as string}-head-${index}`}>
            {column["headerName" ?? "field"]}
          </TableCell>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeading;
