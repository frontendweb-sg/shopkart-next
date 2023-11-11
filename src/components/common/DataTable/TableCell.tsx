import classNames from "classnames";
import { forwardRef } from "react";

export type SortDirection = "asc" | "desc" | false;
export type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableCellElement> &
  React.TdHTMLAttributes<HTMLTableCellElement>;

export type TableCellProps = TableCellBaseProps & {
  component?: React.ElementType<TableCellBaseProps>;
};

/**
 * Table cell component
 */
const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ component, children, className, ...rest }, ref) => {
    const Component = component || "th";
    const classes = classNames("px-3 py-3 text-left", className);
    return (
      <Component className={classes} {...rest} ref={ref}>
        {children}
      </Component>
    );
  }
);

export default TableCell;
