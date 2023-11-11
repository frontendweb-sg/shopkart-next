import classNames from "classnames";
import { date } from "yup";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import Table from "./Table";

/**
 * Data table component
 * @param param0
 * @returns
 */
const DataTable = <T, K extends keyof T>({ columns, rows }: TableProps<T, K>) => {
  return (
    <div className=" mt-3">
      <Table className="border-collapse table-auto w-full text-sm">
        <TableHeading rows={rows} columns={columns} />
        <TableBody rows={rows} columns={columns} />
      </Table>
    </div>
  );
};

export default DataTable;
