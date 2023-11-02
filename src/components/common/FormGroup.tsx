import { forwardRef, memo } from "react";
import classNames from "classnames";

export type FormGroupProps = React.HtmlHTMLAttributes<HTMLDivElement> & { label?: string };
const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ children, className, label, ...rest }, ref) => {
    const classes = classNames("mb-3", className);
    return (
      <div className={classes} ref={ref} {...rest}>
        {label && <label className="mb-2 block">{label}</label>}
        {children}
      </div>
    );
  }
);
FormGroup.displayName = "FormGroup";
export default memo(FormGroup);
