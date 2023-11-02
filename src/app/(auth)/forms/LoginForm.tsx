"use client";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { authService } from "@/services/auth.services";
import { useState } from "react";

const validation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required!"),
  password: yup.string().required("Password is required!"),
});
/**
 * Login form
 * @returns
 */
const LoginForm = () => {
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
      } catch (error) {
        console.log("error", error);
        if (error instanceof Error) setError(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

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
        <button type="submit">Login</button>
        <div>
          <p>
            If you don&apos;t have an account, please click <Link href="/register">Register</Link>
          </p>
        </div>
      </Form>
    </>
  );
};
export default LoginForm;
