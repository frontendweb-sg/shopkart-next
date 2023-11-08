import DataTable from "@/components/common/DataTable";
import PageTitle from "@/components/common/PageTitle";
import { getCategories } from "@/lib/category";
import { ICategoryDoc } from "@/models/category";
import CategoryList from "./CategoryList";

/**
 * Category apge
 * @returns
 */
export const revalidate = 60;
const Page = async () => {
  const categories = (await getCategories()) as ICategoryDoc[];
  console.log("HI fire every 60 seconds");
  const COLUMNS = [
    // { field: "id", headerName: "Id" },
    { field: "title", headerName: "Title" },
    { field: "description", headerName: "Description" },
  ];
  return (
    <div>
      hello
      <CategoryList>
        <DataTable rows={categories} columns={COLUMNS as any} />
      </CategoryList>
    </div>
  );
};

export default Page;
