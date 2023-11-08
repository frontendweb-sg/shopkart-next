import { forwardRef } from "react";

export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {};
const Form = forwardRef<HTMLFormElement, FormProps>(({ children, ...rest }, ref) => {
  return (
    <form {...rest} ref={ref} noValidate>
      {children}
    </form>
  );
});
Form.displayName = "Form";
export default Form;
