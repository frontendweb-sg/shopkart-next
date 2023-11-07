"use client";
import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Textarea";
import { addProduct } from "@/lib/product";
import { ICategoryDoc } from "@/models/category";
import { IProduct } from "@/models/product";
import { productService } from "@/services/product.services";
import { useFormik } from "formik";

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
  } = useFormik({
    initialValues: productService.getInitialObject(),
    async onSubmit(values, formikHelpers) {
      if (!values.category) {
        values.category = categories[0].id;
      }
      const response = await addProduct(values as IProduct);
    },
  });

  const enable = isSubmitting || (dirty && !isValid);

  return (
    <Form onSubmit={handleSubmit}>
      <select name="category" value={values.category ?? categories[0].id} onChange={handleChange}>
        {categories.map((cat: ICategoryDoc) => (
          <option key={cat.id} id={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
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
      <Button disabled={enable} type="submit">
        Save
      </Button>
    </Form>
  );
};

export default ProductForm;
