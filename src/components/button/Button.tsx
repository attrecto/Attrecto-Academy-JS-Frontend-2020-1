import React, { FunctionComponent, MouseEventHandler } from "react";
import classNames from "classnames";

import "./Button.scss";

interface ButtonProps {
  onClick?: MouseEventHandler;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      className={classNames("button", props.variant, props.color, {
        Disabled: props.disabled,
      })}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
};

export default Button;
