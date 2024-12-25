import { FC } from "react";
import { Image } from "../../../shared/ui";
import style from "./Banner.module.css";
import { useGetBigBannerQuery } from "../../../shared/api/api";

const Banner: FC = () => {
  const { data } = useGetBigBannerQuery();

  return <>{data && <Image src={data.image} alt={"Banner"} className={style.Banner} />}</>;
};

export default Banner;
