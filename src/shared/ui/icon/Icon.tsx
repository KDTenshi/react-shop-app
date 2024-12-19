import { FC } from "react";
import style from "./Icon.module.css";

interface IconProps {
  type: "user" | "fav" | "cart";
}

const icons = {
  user: "account_circle",
  fav: "favorite",
  cart: "shopping_cart",
};

const Icon: FC<IconProps> = ({ type }) => {
  const className = [style.Icon, "material-symbols-outlined"].join(" ");

  const content = icons[type];

  return <span className={className}>{content}</span>;
};

export default Icon;
