import classNames from "classnames";
import { forwardRef, memo } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Color;
  size?: Size;
  variant?: ButtonVariant;
};

/**
 * Button components
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = "button", color = "primary", size = "xs", variant, children, className, ...rest },
    ref
  ) => {
    const classes = classNames("btn", className, `btn-${color} btn-${size}`);
    return (
      <button type={type} ref={ref} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default memo(Button);
