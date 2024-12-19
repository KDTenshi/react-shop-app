import { FC } from "react";
import style from "./Header.module.css";
import { Button, Icon, Logo } from "../../../shared/ui";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <Logo />
      <div className={style.Buttons}>
        <Button>
          <Icon type="cart" />
        </Button>
        <Button>
          <Icon type="fav" />
        </Button>
        <Button className={style.User}>
          <Icon type="user" /> Username
        </Button>
      </div>
    </header>
  );
};

export default Header;
