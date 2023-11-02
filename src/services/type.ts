import { AxiosResponse } from "axios";

export interface ApiService<T, K> {
  getAll(): Promise<AxiosResponse<T[]>>;
  getById?(): Promise<AxiosResponse<T>>;
  add(body: K): Promise<AxiosResponse<T>>;
  update(id: string, body: K): Promise<AxiosResponse<T>>;
  delete(id: string): Promise<AxiosResponse<{ id: string } | T>>;
}
