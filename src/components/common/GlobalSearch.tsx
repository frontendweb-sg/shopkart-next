"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { memo, useState } from "react";
import { FaSearch } from "react-icons/fa";

const GlobalSearch = memo(function GlobalSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const target = ev.target as HTMLFormElement;
    const search = target.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(`/search?${newParams}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border pl-2 pr-4 rounded-full flex items-center relative"
    >
      <input
        key={searchParams?.get("q")}
        className="p-2 outline-none rounded-full text-sm"
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
      />
      <FaSearch />
    </form>
  );
});

export default GlobalSearch;
