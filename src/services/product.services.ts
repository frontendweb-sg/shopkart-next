import { IProduct, IProductDoc } from "@/models/product";
import { ApiService } from "./type";
import { AxiosResponse } from "axios";
import { Api } from "@/instance";

const SERVICE_API_URL = "/product";
class ProductService implements ApiService<IProductDoc, IProduct> {
  getInitialObject() {
    return {
      category: null,
      title: "",
      slug: "",
      description: "",
      summary: "",
      price: 0,
      images: null,
      attributes: null,
      active: true,
    };
  }
  getAll(query?: string): Promise<AxiosResponse<IProductDoc[], any>> {
    return Api.get(`${SERVICE_API_URL}?${query}`);
  }
  getById(slug: string): Promise<AxiosResponse<IProductDoc, any>> {
    return Api.get(`${SERVICE_API_URL}/${slug}`);
  }
  getByCategoryId(categoryId: string) {
    return Api.get(SERVICE_API_URL);
  }
  getByCategory(category: string) {
    return Api.get(`${SERVICE_API_URL}?category=${category}`);
  }
  add(body: IProduct): Promise<AxiosResponse<IProductDoc, any>> {
    return Api.post(SERVICE_API_URL, body);
  }
  update(id: string, body: IProduct): Promise<AxiosResponse<IProductDoc, any>> {
    return Api.put(`${SERVICE_API_URL}/${id}`, body);
  }
  delete(id: string): Promise<AxiosResponse<IProductDoc | { id: string }, any>> {
    return Api.delete(`${SERVICE_API_URL}/${id}`);
  }
}

const productService = new ProductService();
export { productService };
