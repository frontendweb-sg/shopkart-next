"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import lodash from "lodash/debounce";
import debounce from "lodash/debounce";
/**
 * Search components
 * @returns
 */
const QuerySearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState<string>(searchParams.get("q") ?? "");

  const searchLodash = useMemo(
    () =>
      debounce((value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value.length > 0) {
          params.set("q", value);
        } else {
          params.delete("q");
        }
        router.replace(`${pathname}?${params}`);
      }, 300),
    [searchParams, router, pathname]
  );
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    searchLodash(ev.target.value);
  };

  return (
    <div className="flex px-3 mb-3 hover:bg-gray-50 rounded-md items-center relative border border-gray-100">
      <FaSearch className="text-rose-600" />
      <input
        placeholder="Search keyword..."
        className="py-2 px-2 text-sm bg-inherit w-full outline-none "
        type="search"
        name="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default QuerySearch;
