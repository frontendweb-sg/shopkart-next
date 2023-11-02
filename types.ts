declare module NodeJS {
  interface ProcessEnv {
    MONGODB_URL: string;
    NEXTAUTH_SECRET: string;
  }
}

interface IError {
  message: string;
  field?: string;
  status?: number;
  info?: object | null;
}

interface ILogin {
  email: string;
  password: string;
}
interface IRegister {
  name: string;
  email: string;
  password: string;
  mobile: string;
  role?: string;
}

type DocVisibility = "active" | "inactive";
