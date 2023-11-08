import * as yup from "yup";

/**
 * Sign in validaiton
 */
const signinSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required!"),
  password: yup.string().required("Password is required!"),
});

export { signinSchema };
