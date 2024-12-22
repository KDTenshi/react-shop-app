import { FC } from "react";
import style from "./Footer.module.css";
import { Logo } from "../../../shared/ui";

const Footer: FC = () => {
  return (
    <footer className={style.Footer}>
      <Logo color="light" />
    </footer>
  );
};

export default Footer;
