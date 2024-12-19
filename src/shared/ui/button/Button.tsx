import { FC } from "react";
import style from "./Button.module.css";
import { ButtonPropsDefault } from "../../types/types";

const Button: FC<ButtonPropsDefault> = ({ children, className = "", ...restProps }) => {
  const fullClassName = [style.Button, className].join(" ");

  return (
    <button className={fullClassName} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
