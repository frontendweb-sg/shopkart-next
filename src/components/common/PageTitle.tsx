"use client";
import classNames from "classnames";
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";
import { forwardRef, memo } from "react";

export type PageTitleProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  label?: string;
  tagline?: string;
};

const PageTitle = forwardRef<HTMLDivElement, PageTitleProps>(
  ({ children, label, tagline, ...rest }, ref) => {
    const segments = useSelectedLayoutSegments();
    const segment = useSelectedLayoutSegment();
    const pathname = usePathname();
    console.log(segments, segment, pathname);
    return (
      <div className={classNames("flex items-center justify-between mb-3")} ref={ref} {...rest}>
        <h6>
          {label}
          <span className="block text-xs text-slate-400">{tagline}</span>
        </h6>
        <div>{children}</div>
      </div>
    );
  }
);

PageTitle.displayName = "PageTitle";
export default memo(PageTitle);
