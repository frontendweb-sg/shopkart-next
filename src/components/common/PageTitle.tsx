import classNames from "classnames";
import { forwardRef, memo } from "react";

export type PageTitleProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  label?: string;
  tagline?: string;
};
const PageTitle = forwardRef<HTMLDivElement, PageTitleProps>(
  ({ children, label, tagline, ...rest }, ref) => {
    return (
      <div className={classNames("flex items-center justify-between")} ref={ref} {...rest}>
        <h6>
          {label}
          <span className="block text-sm text-slate-500">{tagline}</span>
        </h6>
        <div>{children}</div>
      </div>
    );
  }
);

PageTitle.displayName = "PageTitle";
export default memo(PageTitle);
