import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 m-auto max-w">{children}</div>;
};

export default Container;
