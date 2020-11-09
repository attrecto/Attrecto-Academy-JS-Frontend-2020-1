import React from "react";
import classNames from "classnames";
import { FieldProps } from "formik";

import "./TagField.scss";

interface TagFieldProps<T = any> extends FieldProps<T[]> {
  options: Partial<T>[];
  idKey: keyof T;
  displayKey: keyof T;
}

const TagField = <T extends any>({
  options,
  form,
  field,
  displayKey,
  idKey,
}: TagFieldProps<T>) => {
  return (
    <div className="d-flex flex-wrap">
      {options.map((option) => {
        const isSelected = field.value.find(
          (val: T) => val[idKey] === option[idKey]
        );

        return (
          <span
            key={option[idKey]}
            className={classNames(
              "tag-field-badge badge badge-info mb-3 mr-3",
              {
                selected: isSelected,
              }
            )}
            onClick={() => {
              form.setFieldValue(
                field.name,
                isSelected
                  ? field.value.filter((val: T) => val[idKey] !== option[idKey])
                  : [...field.value, { [idKey]: option[idKey] }]
              );
            }}
          >
            {option[displayKey]}
          </span>
        );
      })}
    </div>
  );
};

export default TagField;
