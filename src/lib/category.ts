"use server";
import { Api } from "@/instance";
import { ICategory, ICategoryDoc } from "@/models/category";
import { categoryService } from "@/services/category.services";
import { AppRoute } from "@/utils/AppRoute";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 * Get all category
 * @returns
 */
const getCategories = async () => {
  const response = await categoryService.getAll();
  if (response.status !== 200) throw new Error("not found");
  return response.data;
};

const getCategoryById = async (id: string) => {
  const categories = await getCategories();
  return categories.find((cat: ICategoryDoc) => cat.id === id);
};
/**
 * Add category
 * @param values
 * @returns
 */
const addCategory = async (values: ICategory) => {
  await categoryService.add(values);
  revalidatePath("/admin/category");
};

/**
 * update category
 * @param values
 */
const updateCategory = async (id: string, values: ICategory) => {
  await categoryService.update(id, values);
  revalidatePath("/admin/category");
  redirect(AppRoute.adminCategory);
};

const deleteCategory = async (id: string) => {
  await categoryService.delete(id);
  revalidatePath("/admin/category");
};
export { getCategoryById, deleteCategory, updateCategory, getCategories, addCategory };
