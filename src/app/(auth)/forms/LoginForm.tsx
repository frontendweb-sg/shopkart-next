"use client";

import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useFormik } from "formik";
import { FaEnvelope, FaKey, FaSpinner } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { authService } from "@/services/auth.services";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { signinSchema } from "./validation";

/**
 * Login form
 * @returns
 */
const LoginForm = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { data: session } = useSession();
  const [message, setMessage] = useState<string>("");

  const { isSubmitting, values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: authService.getLoginObject(),
      validationSchema: signinSchema,
      async onSubmit(values, { resetForm, setSubmitting }) {
        try {
          setMessage("Authenticating, please wait....");
          const result = await signIn("credentials", {
            redirect: false,
            ...values,
          });

          if (result?.error) {
            toast.error(result.error);
          }

          resetForm();
          const user = session?.user;
          if (user?.role === "admin") router.replace("/admin");
          if (user?.role === "user") router.replace("/users");
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message);
          }
        } finally {
          setSubmitting(false);
        }
      },
    });

  useEffect(() => {
    if (session) {
      const url = params.get("callbackUrl");
      const { role } = session.user;
      if (role === "admin") router.replace(url ?? "/admin");
      if (role === "user") router.replace(url ?? "/users");
    }

    return () => {
      setMessage("");
    };
  }, [session, router]);

  return (
    <div className="mx-auto md:w-2/4">
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-rose-600">Sign in</h1>
        <p className="text-xs mt-1 text-slate-600">
          If you don't have an account, please click{" "}
          <Link className="text-rose-600" href="/register">
            Register
          </Link>
        </p>
      </div>
      {!!message && (
        <span className="p-2 mb-3 animate-pulse bg-green-100 rounded-sm text-green-800 text-sm block">
          {message}
        </span>
      )}
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="Email id"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
          startEl={<FaEnvelope />}
        />
        <Input
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
          startEl={<FaKey />}
        />
        <div>
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full flex justify-center items-center"
          >
            {isSubmitting && <FaSpinner className="mr-2" />}
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default LoginForm;
