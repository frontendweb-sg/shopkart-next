import Form from "@/components/common/Form";
import { productService } from "@/services/product.services";
import { useFormik } from "formik";
import ProductForm from "./ProductForm";
import { getCategories } from "@/lib/category";
import Panel from "@/components/common/Panel";
import PageTitle from "@/components/common/PageTitle";
import Button from "@/components/common/Button";

const Page = async () => {
  const categories = await getCategories();
  return (
    <>
      <PageTitle label="Add new product" tagline="Welcome to add product page.">
        <Button>Back</Button>
      </PageTitle>

      <ProductForm categories={categories} />
    </>
  );
};

export default Page;
