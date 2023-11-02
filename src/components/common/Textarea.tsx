import { forwardRef } from "react";
import FormGroup, { FormGroupProps } from "./FormGroup";
import classNames from "classnames";
import type { FormikErrors, FormikTouched } from "formik";
export type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  parentProps?: FormGroupProps;
  startEl?: React.ReactElement;
  endEl?: React.ReactElement;
  errors?: FormikErrors<{ [key: string]: string }>;
  touched?: FormikTouched<{ [key: string]: string }>;
  label?: string;
};
const Textarea = forwardRef<HTMLTextAreaElement, InputProps>(
  (
    { parentProps, label, errors, touched, value, name, className, startEl, endEl, ...rest },
    ref
  ) => {
    const error =
      errors![name as keyof typeof errors] && touched![name as keyof typeof touched]
        ? errors![name as keyof typeof errors]
        : null;

    const classes = classNames(
      "border text-slate-800 hover:text-sky-600 border-slate-300 border-solid rounded-md hover:border-slate-400 flex items-center px-4",
      className
    );
    return (
      <FormGroup label={label} {...parentProps}>
        <div className={classes}>
          {startEl}
          <textarea
            className={classNames(
              "w-full block rounded-md py-2 hover:bg-slate-50 focus:outline-none",
              {
                "pl-4": !!startEl,
              }
            )}
            ref={ref}
            value={value}
            name={name}
            {...rest}
          />
          {endEl}
        </div>
        {error && <span>{error}</span>}
      </FormGroup>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
