import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
} from "react";
import classNames from "classnames";

import "./Button.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={classNames(
        "button",
        props.className,
        props.variant,
        props.color,
        {
          disabled: props.disabled,
        }
      )}
    />
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  type: "button",
};

export default Button;
