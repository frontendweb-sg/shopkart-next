import { getCategories } from "@/lib/category";
import { ICategoryDoc } from "@/models/category";
import { memo } from "react";
import LinkItem from "../common/LinkItem";
import classNames from "classnames";

type CategoryListProps = {
  direction?: "horz" | "vert";
};

const CategoryList = memo(async function CategoryList({ direction }: CategoryListProps) {
  const categories = await getCategories();
  if (direction === "vert") {
    return (
      <div className="w-full">
        <h6 className="text-[10px] mb-3 uppercase text-gray-500 font-semibold">Categories</h6>
        <ul className="">
          {categories.map((cat: ICategoryDoc, index: number) => {
            return (
              <li
                className={classNames("text-sm", {
                  "border-b": index !== categories.length - 1,
                })}
                key={cat.id}
              >
                <LinkItem
                  className="py-2 px-3 block text-xs hover:text-rose-500 rounded-sm"
                  href={`/search?category=${encodeURIComponent(cat.title.toLowerCase())}`}
                >
                  {cat.title}
                </LinkItem>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <div className=" mx-auto">
      <ul className="flex items-center">
        {categories.map((cat: ICategoryDoc) => {
          return (
            <li className="p-3 border bg-gray-100 rounded-2xl text-sm" key={cat.id}>
              {cat.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default CategoryList;
