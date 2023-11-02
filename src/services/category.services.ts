import { Api } from "@/instance";
import { ICategory, ICategoryDoc } from "@/models/category";
import { AxiosResponse } from "axios";
import { ApiService } from "./type";
const SERVICE_API_URL = "/category";

/**
 * Category service
 */
class CategoryService implements ApiService<ICategoryDoc, ICategory> {
  getInitialObject() {
    return {
      title: "",
      description: "",
      active: true,
    };
  }

  getAll(): Promise<AxiosResponse<ICategoryDoc[]>> {
    return Api.get(SERVICE_API_URL);
  }
  add(body: ICategory): Promise<AxiosResponse<ICategoryDoc>> {
    return Api.post(SERVICE_API_URL, body);
  }
  update(id: string, body: ICategory): Promise<AxiosResponse<ICategoryDoc>> {
    return Api.put(`${SERVICE_API_URL}/${id}`, body);
  }
  delete(id: string): Promise<AxiosResponse<{ id: string }>> {
    return Api.delete(`${SERVICE_API_URL}/${id}`);
  }
}
const categoryService = new CategoryService();
export { categoryService };
