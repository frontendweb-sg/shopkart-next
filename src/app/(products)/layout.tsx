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
      <main className="relative flex-grow">
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <div className="flex pt-8 pb-16 lg:pb-20">
            <aside className="flex-shrink-0 ltr:pr-24 rtl:pl-24 hidden lg:block w-96">
              <div className="position: relative; top: 0px;">
                {categories.map((cat: ICategoryDoc) => {
                  return (
                    <div key={cat.id} className="mb-2 block">
                      <Link
                        href={"/products?category=" + encodeURIComponent(cat.title.toLowerCase())}
                      >
                        {cat.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </aside>
            <div className="w-full ltr:lg:-ml-9 rtl:lg:-mr-9">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
