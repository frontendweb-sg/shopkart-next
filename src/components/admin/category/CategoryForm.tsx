"use client";
import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { addCategory, updateCategory } from "@/lib/category";
import { ICategory, ICategoryDoc } from "@/models/category";
import { categoryService } from "@/services/category.services";
import { AppContent } from "@/utils/AppContent";
import { useFormik } from "formik";
import { startTransition } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
/**
 * Form component
 * @returns
 */

const validation = yup.object().shape({
  title: yup.string().required("Category name is required!"),
  description: yup.string().default(""),
});
const CategoryForm = ({ onClose, category }: { onClose?: () => void; category?: ICategoryDoc }) => {
  const {
    isSubmitting,
    isValid,
    dirty,
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues:
      {
        ...categoryService.getInitialObject(),
        title: category?.title,
        description: category?.description,
      } ?? categoryService.getInitialObject(),
    enableReinitialize: !!category,
    validationSchema: validation,
    async onSubmit(values, { setSubmitting }) {
      try {
        if (category?.id) {
          await updateCategory(category.id, values as ICategory);
          toast.success("Category update successfully!");
          return;
        }

        await addCategory(values as ICategory);
        toast.success("Category added successfully!");
        onClose?.();
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const enabled = isSubmitting || !(dirty && isValid);
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

      <Textarea
        name="description"
        label="Description"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors}
        touched={touched}
      />
      <div className=" mt-3 pt-3 flex justify-end">
        <Button color="secondary" onClick={onClose} className="mr-2">
          {AppContent.cancel}
        </Button>
        <Button disabled={enabled} type="submit" size="sm">
          {category ? AppContent.update : AppContent.add}
        </Button>
      </div>
    </Form>
  );
};
export default CategoryForm;
