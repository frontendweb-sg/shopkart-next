import classNames from "classnames";
import { ReactNode } from "react";

export type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div className={classNames(className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
