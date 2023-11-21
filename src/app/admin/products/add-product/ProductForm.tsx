"use client";
import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import FormGroup from "@/components/common/FormGroup";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import DynamicFields from "@/components/common/DynamicFields";
import { ICategoryDoc } from "@/models/category";
import { productService } from "@/services/product.services";
import { useFormik } from "formik";
import useDynamicForm from "@/hooks/useDynamicForm";
import Panel from "@/components/common/Panel";
import { addProduct } from "@/lib/product";
import { IProduct } from "@/models/product";
import { toast } from "react-toastify";

/**
 * Add product
 * @returns
 */
const ProductForm = ({ categories }: { categories: ICategoryDoc[] }) => {
  const {
    isSubmitting,
    dirty,
    isValid,
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: productService.getInitialObject(),
    async onSubmit(values, { setSubmitting, resetForm }) {
      try {
        if (!values.category) {
          values.category = categories[0].id;
        }
        await addProduct(values as IProduct);
        toast.success("Product added successfully!");
        setSubmitting(false);
        resetForm();
      } catch (error) {
        if (error instanceof Error) toast.error(error.message);
      }
    },
  });

  const enable = isSubmitting || (dirty && !isValid);
  const { handleAdd, handleRemove } = useDynamicForm({
    initialValue: { title: "", value: "" },
    handler: setValues,
  });

  return (
    <Form className="grid grid-cols-12 gap-4" onSubmit={handleSubmit}>
      <Panel className="col-span-9">
        <FormGroup label="Category*">
          <select
            className="w-full p-2 border rounded-md text-sm"
            name="category"
            value={values.category ?? categories[0].id}
            onChange={handleChange}
          >
            {categories.map((cat: ICategoryDoc) => (
              <option key={cat.id} id={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </FormGroup>
        <Input
          label="Product name"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Input
          label="Product price"
          name="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <Textarea
          label="Product description"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
        <DynamicFields
          onAdd={handleAdd}
          onRemove={handleRemove}
          values={values.attributes ?? []}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Panel>
      <Panel className="col-span-3">
        <Button disabled={enable} type="submit">
          Save
        </Button>
      </Panel>
    </Form>
  );
};

export default ProductForm;
