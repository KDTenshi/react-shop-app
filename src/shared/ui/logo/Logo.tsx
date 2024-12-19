import { FC } from "react";
import style from "./Logo.module.css";

const Logo: FC = () => {
  return (
    <h1 className={style.Logo}>
      Mini<span>FIG</span>
    </h1>
  );
};

export default Logo;
