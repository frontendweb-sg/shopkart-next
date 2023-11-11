import DataTable from "@/components/common/DataTable";
import Panel from "@/components/common/Panel";
import QuerySearch from "@/components/common/QuerySearch";
import PageTitle from "@/components/common/PageTitle";
import AddCategory from "@/components/admin/category/AddCategory";
import { getCategories } from "@/lib/category";
import { ICategoryDoc } from "@/models/category";
import Dropdown, { DropdownItem } from "@/components/common/Dropdown";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteCategory from "./DeleteCategory";
import { AppRoute } from "@/utils/AppRoute";

/**
 * Category apge
 * @returns
 */
export const revalidate = 0;
const Page = async () => {
  const categories = (await getCategories()) as ICategoryDoc[];

  const COLUMNS = [
    {
      field: "action",
      headerName: "Action",
      renderCell: (row: any) => (
        <Dropdown>
          <DropdownItem href={`${AppRoute.adminCategoryEdit}/${row.id}`} as={Link}>
            <FaEdit className="mr-2" /> Edit
          </DropdownItem>
          <DropdownItem>
            <DeleteCategory category={row} />
          </DropdownItem>
        </Dropdown>
      ),
    },
    { field: "title", headerName: "Title" },
    { field: "description", headerName: "Description" },
    { field: "insertAt", headerName: "Inserted" },
    {
      field: "active",
      headerName: "Active",
      renderCell: (row: any, column: any, index: number) => (
        <span>{row.active ? "active" : "inactive"}</span>
      ),
    },
  ];

  return (
    <>
      <PageTitle label="Category" tagline="Welcome to category">
        <AddCategory />
      </PageTitle>
      <Panel>
        <QuerySearch />
        <DataTable rows={categories} columns={COLUMNS as any} />
      </Panel>
    </>
  );
};

export default Page;
