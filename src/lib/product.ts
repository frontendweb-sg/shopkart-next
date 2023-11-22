"use server";
import { IProduct } from "@/models/product";
import { productService } from "@/services/product.services";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 * Get products by category
 */
const getProductByCategory = async (category: string) => {
  const response = await productService.getByCategory(category);
  return response.data;
};

const getProducts = async (query?: string) => {
  const response = await productService.getAll(query);
  return response.data;
};

const getProduct = async (id: string) => {
  const response = await productService.getById(id);
  return response.data;
};

const addProduct = async (product: IProduct) => {
  const response = await productService.add(product);
  revalidatePath("/admin/products");
  redirect("/admin/products");
  return response.data;
};
export { getProductByCategory, getProducts, addProduct, getProduct };
