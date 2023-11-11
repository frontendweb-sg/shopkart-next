declare module NodeJS {
  interface ProcessEnv {
    MONGODB_URL: string;
    NEXTAUTH_SECRET: string;
    NEXT_PUBLIC_API_URL: string;
  }
}
type Align = "left" | "center" | "right" | "justify";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "block";
type Color = "primary" | "secondary" | "info" | "warning" | "success" | "danger" | "text";
type ButtonVariant = "filled" | "outlined" | "text";
type TextSizes = Size | "2xl";
type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "caption"
  | "button";

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

type ColumnDefination<T, K extends keyof T> = {
  field: K;
  headerName?: string;
  style?: React.CSSProperties;
  width?: string;
  align?: Align;
  renderValue?: (row: T, column: ColumnDefination<T, K>, index: number) => string;
  renderCell?: (row: T, column: ColumnDefination<T, K>, index: number) => React.ReactElement;
};

type TableProps<T, K extends keyof T> = {
  rows: T[];
  columns: Array<ColumnDefination<T, K>>;
};

type SelectProps<T> = {
  options: T[];
  defaultValue: T;
  getOptionLabel?: (option: T) => string;
};
