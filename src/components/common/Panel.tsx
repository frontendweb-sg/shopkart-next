import classNames from "classnames";

export type PanelProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
const Panel = ({ children, className, ...rest }: PanelProps) => {
  return (
    <div
      className={classNames("p-4 border bg-white shadow-sm rounded-sm border-gray-50", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Panel;
