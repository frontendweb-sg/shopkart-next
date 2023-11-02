import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { addCategory } from "@/lib/category";
import { ICategory } from "@/models/category";
import { categoryService } from "@/services/category.services";
import { useFormik } from "formik";

/**
 * Form component
 * @returns
 */
const CategoryForm = ({ onClose }: { onClose: () => void }) => {
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: categoryService.getInitialObject(),
    async onSubmit(values, formikHelpers) {
      try {
        const data = await addCategory(values as ICategory);
        console.log("data", data);
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="title"
        label="Category name"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors}
        touched={touched}
        placeholder="Category name"
      />

      <div className="border-t border-slate-100 mt-3 pt-3 flex justify-end">
        <button type="submit" className="bg-slate-600 px-6 py-1 text-white rounded-md">
          Add
        </button>
      </div>
    </Form>
  );
};
export default CategoryForm;
