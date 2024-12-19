import { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, className = "", ...restProps }) => {
  const fullClassName = [style.Button, className].join(" ");

  return (
    <button className={fullClassName} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
