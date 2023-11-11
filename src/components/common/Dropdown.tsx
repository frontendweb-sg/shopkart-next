"use client";
import classNames from "classnames";
import useOutsideClick from "@/hooks/useOutsideClick";
import Box, { BoxProps } from "./Box";
import { useToggle } from "@/hooks/useToggle";
import { ReactElement, forwardRef } from "react";
import { FaCaretDown, FaCaretUp, FaEllipsisV } from "react-icons/fa";

export type DropdownBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type DropdownProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  icon?: ReactElement;
  label?: string;
};
const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ label, icon = FaEllipsisV, children, ...rest }, ref) => {
    const { open, toggleHandler, closeHandler } = useToggle();
    const classes = classNames("relative");

    const dropRef = useOutsideClick(closeHandler);

    const Icon = icon;
    return (
      <div className={classes} ref={dropRef}>
        <button
          role="button"
          className="text-gray-700 text-xs flex items-center hover:text-rose-600"
          onClick={toggleHandler}
        >
          {label ?? <Icon />} {label && (open ? <FaCaretUp /> : <FaCaretDown />)}
        </button>
        {open && (
          <div
            role="dropdown"
            className="z-10 absolute min-w-[200px] rounded-sm top-full bg-white p-3 shadow"
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

export const DropdownItem = <T extends React.ElementType = "button">(props: BoxProps<T>) => {
  return (
    <Box
      className="flex w-full border-b border-gray-100 last:border-none rounded-sm text-xs text-gray-600 hover:text-red-600  items-center px-3 py-2 hover:bg-rose-200"
      {...props}
    />
  );
};

Dropdown.displayName = "Dropdown";
export default Dropdown;
