import classNames from "classnames";
import { forwardRef } from "react";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {};
/**
 * Table component
 */
const Table = forwardRef<HTMLTableElement, TableProps>(({ children, className, ...rest }, ref) => {
  const classes = classNames("border-collapse table-auto w-full text-sm");
  return (
    <table ref={ref} className={classes} {...rest}>
      {children}
    </table>
  );
});

Table.displayName = "Table";
export default Table;
