"use client";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";

/**
 * Breadcrumbs
 * @returns
 */
const Breadcrumbs = () => {
  const segment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();
  const pathname = usePathname();

  return (
    <div>
      <ul>
        {segments.map((item) => (
          <li key={item}>
            <Link href={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
