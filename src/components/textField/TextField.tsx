import React, { FC } from "react";
import { Field } from "formik";

interface TextFieldProps {
  name: string;
  label: string;
}

const TextField: FC<TextFieldProps> = ({ name, label }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <Field name={name} type="text" className="form-control" />
    </div>
  );
};

export default TextField;
