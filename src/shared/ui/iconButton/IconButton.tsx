import { FC } from "react";
import { ButtonPropsDefault, IconType } from "../../types/types";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import style from "./IconButton.module.css";

interface IconButtonProps extends ButtonPropsDefault {
  withText?: string;
  iconType: IconType;
}

const IconButton: FC<IconButtonProps> = ({ iconType, withText }) => {
  const className = withText ? style.IconButton_Big : style.IconButton_Small;

  return (
    <Button className={className}>
      <Icon type={iconType} />
      {withText}
    </Button>
  );
};

export default IconButton;
