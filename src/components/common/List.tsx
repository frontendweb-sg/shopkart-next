import classNames from "classnames";
import { memo } from "react";

// type listOwnProps<T extends React.ElementType> = {
//   as?: T;
// };

// type ListProps<T extends React.ElementType> = React.PropsWithChildren<T> &
//   Omit<React.ComponentPropsWithoutRef<T>, keyof listOwnProps<T>>;

type ListProps<T> = React.PropsWithChildren<T> & {
  as?: T;
  className?: string;
};

const List = memo(function List<T extends React.ElementType = "ul">({
  as,
  children,
  className,
}: ListProps<T>) {
  const Component = as ?? "ul";
  return <Component className={classNames(className)}>{children}</Component>;
});

export default List;
