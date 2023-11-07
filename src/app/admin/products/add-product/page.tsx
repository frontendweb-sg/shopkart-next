import Form from "@/components/common/Form";
import { productService } from "@/services/product.services";
import { useFormik } from "formik";
import ProductForm from "./ProductForm";
import { getCategories } from "@/lib/category";

const Page = async () => {
  const categories = await getCategories();
  return (
    <div>
      <ProductForm categories={categories} />
    </div>
  );
};

export default Page;
