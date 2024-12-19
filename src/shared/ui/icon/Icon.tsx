import { FC } from "react";
import style from "./Icon.module.css";
import { IconType } from "../../types/types";
import { ICONS } from "../../constants/constants";

interface IconProps {
  type: IconType;
}

const Icon: FC<IconProps> = ({ type }) => {
  const className = [style.Icon, "material-symbols-outlined"].join(" ");

  const content = ICONS[type];

  return <span className={className}>{content}</span>;
};

export default Icon;
