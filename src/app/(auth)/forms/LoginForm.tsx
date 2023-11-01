"use client";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";

const validation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required!"),
  password: yup.string().required("Password is required!"),
});
/**
 * Login form
 * @returns
 */
const LoginForm = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "frontendweb.sg@gmail.com",
      password: "Admin@12345",
    },
    validationSchema: validation,
    async onSubmit(values, { resetForm, setSubmitting }) {
      try {
        await signIn("credentials", {
          redirect: false,
          ...values,
        });
      } catch (error) {
        console.log("error", error);
      }
      resetForm();
      setSubmitting(false);
    },
  });

  return (
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
          If you don't have an account, please click <Link href="/register">Register</Link>
        </p>
      </div>
    </Form>
  );
};
export default LoginForm;
