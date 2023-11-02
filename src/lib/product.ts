import { productService } from "@/services/product.services";

const getProductByCategory = async (category: string) => {
  const response = await productService.getByCategory(category);
  return response.data;
};

export { getProductByCategory };
