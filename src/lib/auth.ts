import { Api } from "@/instance";
import { authService } from "@/services/auth.services";

/**
 * Login user
 * @param body
 * @returns
 */
export const login = async (body: ILogin) => {
  const response = await authService.login(body);
  if (response.statusText !== "OK") throw new Error("something went wrong");
  return response.data;
};

/**
 * Register user
 * @param body
 * @returns
 */
export const signup = async (body: IRegister) => {
  const response = await Api.post("/register", body);
  return response.data;
};
