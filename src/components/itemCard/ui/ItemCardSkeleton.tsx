import { FC } from "react";
import style from "./ItemCard.module.css";

const ItemCardSkeleton: FC = () => {
  return <div className={style.Skeleton}></div>;
};

export default ItemCardSkeleton;
