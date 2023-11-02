import { getCategories } from "@/lib/category";
import { Category, ICategoryDoc } from "@/models/category";
import Link from "next/link";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const lists: ICategoryDoc[] = await getCategories();
  return (
    <div className="flex w-3/4 m-auto">
      <div className="md:w-1/5 bg-slate-400">
        {lists.map((cat: ICategoryDoc) => {
          return (
            <div>
              <Link href={"/category/" + cat.title.toLowerCase()}>{cat.title}</Link>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default Layout;
