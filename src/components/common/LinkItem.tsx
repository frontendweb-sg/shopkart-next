import Link from "next/link";
import type { LinkProps } from "next/link";

export type LinkItemProps = LinkProps & {
  label?: string;
  menu?: boolean;
};

/**
 * Link item
 * @param param0
 * @returns
 */
const LinkItem = ({ menu, href, label, ...rest }: LinkItemProps) => {
  if (menu) {
    return (
      <li className="ml-2">
        <Link href={href} {...rest}>
          {label}
        </Link>
      </li>
    );
  }

  return (
    <Link href={href} {...rest}>
      {label}
    </Link>
  );
};

export default LinkItem;
