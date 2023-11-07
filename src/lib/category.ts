"use server";
import { Api } from "@/instance";
import { ICategory } from "@/models/category";
import { categoryService } from "@/services/category.services";
import { revalidatePath } from "next/cache";

/**
 * Get all category
 * @returns
 */
const getCategories = async () => {
  try {
    const response = await Api.get("/category");
    if (response.status !== 200) throw new Error("not found");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

/**
 * Add category
 * @param values
 * @returns
 */
const addCategory = async (values: ICategory) => {
  const response = await categoryService.add(values);
  revalidatePath("/admin/category");
  return response.data;
};

export { getCategories, addCategory };
