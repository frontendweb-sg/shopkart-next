import { Api } from "@/instance";

const getCategories = async () => {
  try {
    const response = await Api.get("/category");
  } catch (error) {
    console.log("error", error);
  }
};

export { getCategories };
