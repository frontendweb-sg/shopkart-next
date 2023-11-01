"use client";

import { getCategories } from "@/lib/category";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Count = () => {
  const { data: session } = useSession();
  const [data, setData] = useState([]);

  console.log("sss", session);
  useEffect(() => {
    let fetch = true;
    const loadData = async () => {
      const cats = await getCategories();
      if (fetch) {
        setData(cats);
      }
    };
    loadData();
    return () => {
      fetch = false;
    };
  }, []);
  return <div>Category {JSON.stringify(data)}</div>;
};

export default Count;
