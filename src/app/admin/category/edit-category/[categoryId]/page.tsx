import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { AppRoute } from "@/utils/AppRoute";
import Panel from "@/components/common/Panel";
import CategoryForm from "@/components/admin/category/CategoryForm";
import { ICategoryDoc } from "@/models/category";
import { getCategoryById } from "@/lib/category";

const Page = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;
  const category = (await getCategoryById(categoryId)) as ICategoryDoc;
  return (
    <>
      <PageTitle label="Edit category" tagline="Welcome to edit category">
        <Link className="btn btn-primary btn-xs" href={AppRoute.adminCategory}>
          Back
        </Link>
      </PageTitle>
      <Panel>
        <CategoryForm category={category} />
      </Panel>
    </>
  );
};
export default Page;
