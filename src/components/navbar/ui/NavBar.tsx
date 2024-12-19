import { FC } from "react";
import style from "./NavBar.module.css";

const NavBar: FC = () => {
  return (
    <div className={style.Wrapper}>
      <nav className={style.NavBar}>
        <a className={style.Link} href="/">
          Main
        </a>
        <a className={style.Link} href="/">
          New
        </a>
        <a className={style.Link} href="/">
          Best
        </a>
        <a className={style.Link} href="/">
          Sales
        </a>
        <a className={style.Link} href="/">
          Figures
        </a>
        <a className={style.Link} href="/">
          Models
        </a>
        <a className={style.Link} href="/">
          About
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
