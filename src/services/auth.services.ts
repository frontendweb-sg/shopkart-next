import { Api } from "@/instance";
import { IUserDoc } from "@/models/user";
import { AxiosResponse } from "axios";

class AuthService {
  getLoginObject() {
    return {
      email: "frontendweb.sg@gmail.com",
      password: "Admin@12345",
    };
  }
  getSignupObject() {
    return {
      name: "",
      email: "",
      password: "",
      mobile: "",
    };
  }

  login(body: ILogin): Promise<AxiosResponse<IUserDoc>> {
    return Api.post("/login", body);
  }
  signup(body: IRegister): Promise<AxiosResponse<IUserDoc | IError>> {
    return Api.post("/signup", body);
  }
}

const authService = new AuthService();
export { authService };
