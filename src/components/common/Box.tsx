import classNames from "classnames";

type TextProps<T extends React.ElementType> = {
  as?: T;
  color?: Color | "black";
};

export type BoxProps<T extends React.ElementType> = React.PropsWithChildren<TextProps<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>;
/**
 * Box
 * Polymorphic component (strong type)
 * @param param0
 * @returns
 */
const Box = <T extends React.ElementType = "span">({
  as,
  children,
  className,
  color,
  ...rest
}: BoxProps<T>) => {
  const Component = as || "span";

  const classes = classNames(className);
  const style = color ? { style: { color } } : {};

  return (
    <Component className={classes} {...rest} {...style}>
      {children}
    </Component>
  );
};

export default Box;
