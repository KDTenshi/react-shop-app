import { FC } from "react";
import style from "./Logo.module.css";

interface LogoProps {
  color?: "dark" | "light";
}

const Logo: FC<LogoProps> = ({ color = "dark" }) => {
  return (
    <h1 className={[style.Logo, color === "dark" ? "" : style.Logo_Light].join(" ")}>
      Mini<span>FIG</span>
    </h1>
  );
};

export default Logo;
