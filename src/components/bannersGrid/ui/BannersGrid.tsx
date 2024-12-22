import { FC } from "react";
import style from "./BannersGrid.module.css";
import { useGetBannersQuery } from "../../../shared/api/api";
import { Image } from "../../../shared/ui";

const BannersGrid: FC = () => {
  const { data } = useGetBannersQuery();

  return (
    <div className={style.BannersGrid}>
      {data && data.map((banner) => <Image src={banner} alt="Banner" key={banner} className={style.Image} />)}
    </div>
  );
};

export default BannersGrid;
