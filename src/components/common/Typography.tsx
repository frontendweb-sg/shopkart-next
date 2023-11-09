import React, { forwardRef } from "react";

type TextProps<T extends React.ElementType> = {
  variant?: T;
  textSize?: TextSizes;
  color?: Color;
  component?: React.ReactNode;
};

type TypographyProps<T extends React.ElementType> = React.PropsWithChildren<TextProps<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>;

const Typography = forwardRef(
  <T extends React.ElementType = "h1">(
    { children, color, textSize, variant, component }: TypographyProps<T>,
    ref: React.Ref<T>
  ) => {
    const Component = component || variant;
    return <div>{children}</div>;
  }
);

Typography.displayName = "Typography";
export default Typography;
