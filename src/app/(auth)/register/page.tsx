import Logo from "@/components/common/Logo";
import SignupForm from "../forms/RegisterForm";
import Footer from "@/components/layouts/Footer";

const Page = () => {
  return (
    <div className="grid md:grid-cols-2 w-full">
      <div className="items-center bg-slate-800 col-span-1 relative flex justify-center">
        <div className="text-white max-w-sm">
          <Logo href="/" />
          <p className="text-sm mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus
            repellendus eligendi placeat quo eos sapiente nesciunt accusantium eaque, debitis
            molestiae excepturi incidunt alias nostrum iusto ullam quas suscipit? Accusantium.
          </p>

          <Footer textSize="xs" theme="light" />
        </div>
      </div>
      <div className="bg-white flex items-center justify-center min-h-screen col-span-1">
        <SignupForm />
      </div>
    </div>
  );
};
export default Page;
