import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { FieldProps } from "formik";
import classNames from "classnames";

interface TextFieldProps
  extends FieldProps,
    Omit<
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      "form"
    > {
  label: string;
}

const TextField: FC<TextFieldProps> = ({ label, form, field, ...props }) => {
  const error = form.errors[field.name];
  const isTouched = form.touched[field.name];

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...field}
        {...props}
        value={field.value || props.value || ""}
        className={classNames("form-control", props.className, {
          "is-invalid": error && isTouched,
        })}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default TextField;
