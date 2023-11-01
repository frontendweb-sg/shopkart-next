import { getCategories } from "@/lib/category";
import Image from "next/image";
import Count from "./Count";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div>
      <h1>HOme page</h1>
      <Count />
    </div>
  );
}
