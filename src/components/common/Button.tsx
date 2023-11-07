import classNames from "classnames";
import { forwardRef, memo } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Color;
  size?: Size;
  variant?: Variant;
};

const buttonMaps = {
  primary: "text-white bg-slate-600 hover:bg-slate-700",
  secondary: "",
  info: "",
  warning: "",
  danger: "",
  text: "",
};
/**
 * Button components
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = "primary", size, variant, children, className, ...rest }, ref) => {
    const classes = classNames(
      "px-6 py-2 rounded-md",
      buttonMaps[color as keyof typeof buttonMaps],
      className
    );
    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default memo(Button);
