import { getCategories } from "@/lib/category";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div>
      <h1>HOme page</h1>
    </div>
  );
}
