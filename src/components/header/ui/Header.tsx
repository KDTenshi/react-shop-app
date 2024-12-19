import { FC } from "react";
import style from "./Header.module.css";
import { IconButton, Logo } from "../../../shared/ui";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <Logo />
      <div className={style.Buttons}>
        <IconButton iconType={"cart"} />
        <IconButton iconType={"fav"} />
        <IconButton iconType={"user"} withText="Username" />
      </div>
    </header>
  );
};

export default Header;
