import { AxiosResponse } from "axios";

export interface ApiService<T, K> {
  getInitialObject(): object;
  getAll(queryParam?: string | object): Promise<AxiosResponse<T[]>>;
  getById?(id: string): Promise<AxiosResponse<T>>;
  add(body: K): Promise<AxiosResponse<T>>;
  update(id: string, body: K): Promise<AxiosResponse<T>>;
  delete(id: string): Promise<AxiosResponse<{ id: string } | T>>;
}
