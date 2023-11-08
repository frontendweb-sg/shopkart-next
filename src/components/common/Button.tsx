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
  ({ color = "primary", size, variant, children, className, ...rest }, ref) => {
    const classes = classNames("btn", className, `btn-${color}`);
    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default memo(Button);
