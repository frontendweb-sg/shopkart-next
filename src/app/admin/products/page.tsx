import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { getProducts } from "@/lib/product";
import { AppContent } from "@/utils/AppContent";
import DataTable from "@/components/common/DataTable";
import Panel from "@/components/common/Panel";
import QuerySearch from "@/components/common/QuerySearch";

const Page = async () => {
  const products = await getProducts();

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (row: any, column: any, index: number) => <div></div>,
    },
    {
      field: "category",
      headerName: "Category",
      renderCell: (row: any) => row.category?.title,
    },
    {
      field: "title",
      headerName: "Title",
    },
    {
      field: "description",
      headerName: "Description",
    },
    {
      field: "images",
      headerName: "Images",
    },
    {
      field: "active",
      headerName: "Active",
    },
  ];
  return (
    <div>
      <PageTitle label="Products" tagline="Welcome to products page">
        <Link className="btn btn-primary btn-xs" href="/admin/products/add-product">
          {AppContent.addProduct}
        </Link>
      </PageTitle>
      <Panel>
        <QuerySearch />
        <DataTable rows={products} columns={columns as any} />
      </Panel>
    </div>
  );
};

export default Page;
