"use client";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaEnvelope, FaKey, FaMobile, FaUser } from "react-icons/fa";
import { authService } from "@/services/auth.services";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { AppContent } from "@/utils/AppContent";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const validation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required!"),
  password: yup.string().required("Password is required!"),
  name: yup.string().required("Name is required!"),
  mobile: yup.string().required("Mobile is requierd!"),
});
/**
 * Login form
 * @returns
 */
const SignupForm = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: authService.getSignupObject(),
    validationSchema: validation,
    async onSubmit(values, { setSubmitting }) {
      try {
        await authService.signup(values);
        setMessage("Successfully signup, please wait...");
        setTimeout(() => {
          router.replace("/login");
        }, 1500);
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.errors.message);
        } else {
          toast.error((error as Error).message);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    return () => {
      setMessage("");
    };
  }, []);

  return (
    <div className="mx-auto md:w-2/4">
      <div className="mb-6">
        <h1 className="text-2xl font-medium text-rose-600">Sign up</h1>
        <p className="text-xs mt-1 text-slate-600">
          If you have an account, please click{" "}
          <Link className="text-rose-600" href="/login">
            login
          </Link>
        </p>
      </div>
      {message && <span>{message}</span>}
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Full name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
          startEl={<FaUser />}
        />
        <Input
          name="email"
          placeholder="Email id"
          type="email"
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
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
          startEl={<FaKey />}
        />
        <Input
          name="mobile"
          placeholder="Mobile no"
          value={values.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors}
          touched={touched}
          startEl={<FaMobile />}
        />
        <Button type="submit">{AppContent.signUp}</Button>
      </Form>
    </div>
  );
};
export default SignupForm;
