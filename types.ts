declare module NodeJS {
  interface ProcessEnv {
    MONGODB_URL: string;
    NEXTAUTH_SECRET: string;
  }
}

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "block";
type Color = "primary" | "secondary" | "info" | "warning" | "success" | "danger" | "text";
type Variant = "filled" | "outlined" | "text";

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
