import classNames from "classnames";
import { ReactNode } from "react";

export type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div className={classNames("container mx-auto px-4", className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
