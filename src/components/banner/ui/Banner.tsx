import { FC } from "react";
import { Image } from "../../../shared/ui";
import style from "./Banner.module.css";

const Banner: FC = () => {
  const image = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

  return <Image src={image} alt={"Banner"} className={style.Banner} />;
};

export default Banner;
