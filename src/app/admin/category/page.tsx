import DataTable from "@/components/common/DataTable";
import Panel from "@/components/common/Panel";
import QuerySearch from "@/components/common/QuerySearch";
import CategoryList from "./CategoryList";
import PageTitle from "@/components/common/PageTitle";
import { getCategories } from "@/lib/category";
import { ICategoryDoc } from "@/models/category";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ExampleClientComponent from "../abs";

/**
 * Category apge
 * @returns
 */
const Page = async () => {
  const categories = (await getCategories()) as ICategoryDoc[];

  const COLUMNS = [
    { field: "title", headerName: "Title" },
    { field: "description", headerName: "Description" },
  ];

  return (
    <>
      <PageTitle label="Category" tagline="Welcome to category"></PageTitle>
      <Panel>
        <CategoryList>
          <QuerySearch />
          <DataTable rows={categories} columns={COLUMNS as any} />
        </CategoryList>
      </Panel>
    </>
  );
};

export default Page;
