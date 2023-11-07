"use client";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { authService } from "@/services/auth.services";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const validation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required!"),
  password: yup.string().required("Password is required!"),
});
/**
 * Login form
 * @returns
 */
const LoginForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: authService.getLoginObject(),
    validationSchema: validation,
    async onSubmit(values, { resetForm, setSubmitting }) {
      try {
        await signIn("credentials", {
          redirect: false,
          ...values,
        });
        resetForm();
        const user = session?.user;
        if (user?.role === "admin") router.replace("/admin");
        if (user?.role === "user") router.replace("/users");
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (session) {
      const { role } = session.user;
      if (role === "admin") router.replace("/admin");
      if (role === "user") router.replace("/users");
    }
  }, [session, router]);

  return (
    <>
      {error && <span>{error}</span>}
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email id"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
          startEl={<FaEnvelope />}
        />
        <Input
          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
          startEl={<FaKey />}
        />
        <Button type="submit">Login</Button>
        <div className="mt-4">
          <p className="text-sm">
            If you don&apos;t have an account, please click{" "}
            <Link className="text-pink-500" href="/register">
              Register
            </Link>
          </p>
        </div>
      </Form>
    </>
  );
};
export default LoginForm;
