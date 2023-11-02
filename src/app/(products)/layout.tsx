import Header from "@/components/layouts/Header";
import { getCategories } from "@/lib/category";
import { ICategoryDoc } from "@/models/category";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Products layout
 * @param param0
 * @returns
 */
const Layout = async ({ children }: { children: ReactNode }) => {
  const categories = await getCategories();
  return (
    <>
      <Header />
      <div className="flex w-5/6 p-4  m-auto mt-3">
        <aside className="w-64 p-4 bg-slate-50">
          {categories.map((cat: ICategoryDoc) => {
            return (
              <div key={cat.id} className="mb-2 block">
                <Link href={"/products?category=" + encodeURIComponent(cat.title.toLowerCase())}>
                  {cat.title}
                </Link>
              </div>
            );
          })}
        </aside>
        {children}
      </div>
    </>
  );
};

export default Layout;
