import { FC } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <div className={style.Wrapper}>
      <nav className={style.NavBar}>
        <Link className={style.Link} to="/">
          Main
        </Link>
        <Link className={style.Link} to="/popular">
          Popular
        </Link>
        <Link className={style.Link} to="/best">
          Best
        </Link>
        <Link className={style.Link} to="/sale">
          Sales
        </Link>
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
