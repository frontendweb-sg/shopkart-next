import { Api } from "@/instance";

const getCategories = async () => {
  try {
    const response = await Api.get("/category");
    if (response.status !== 200) throw new Error("not found");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export { getCategories };
