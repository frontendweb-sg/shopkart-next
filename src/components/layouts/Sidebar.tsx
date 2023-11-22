import classNames from "classnames";
import { memo } from "react";
import CategoryList from "../category/CategoryList";

type SidebarProps = React.HtmlHTMLAttributes<HTMLDivElement> & {};
const Sidebar = memo(function Sidebar({ className, ...rest }: SidebarProps) {
  return (
    <aside className={classNames("pr-4", className)} {...rest}>
      <CategoryList direction="vert" />
    </aside>
  );
});

export default Sidebar;
