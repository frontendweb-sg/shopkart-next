import { redirect } from "next/navigation";

const Page = () => {
  redirect("/admin/dashboard");
  return <h1>Admins</h1>;
};

export default Page;
