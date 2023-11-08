import classNames from "classnames";
import Link from "next/link";
import type { LinkProps } from "next/link";

export type LinkItemProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    label?: string;
    menu?: boolean;
    parentProps?: React.LiHTMLAttributes<HTMLLIElement>;
  };

/**
 * Link item
 * @param param0
 * @returns
 */
const LinkItem = ({ parentProps, menu, href, className, children, ...rest }: LinkItemProps) => {
  const classes = classNames("block", className);

  if (menu) {
    return (
      <li className={classNames("ml-2", parentProps?.className)} {...parentProps}>
        <Link className={classes} href={href} {...rest}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};

export default LinkItem;
