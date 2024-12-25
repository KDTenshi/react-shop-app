import { FC } from "react";
import { ItemsGroupType } from "../../../shared/types/types";
import style from "./ItemsBanner.module.css";
import { useGetPageBannersQuery } from "../../../shared/api/api";

interface ItemsBannerProps {
  type: ItemsGroupType;
}

const ItemsBanner: FC<ItemsBannerProps> = ({ type }) => {
  const { data } = useGetPageBannersQuery();

  return (
    <>
      {data && (
        <div className={style.ItemsBanner} style={{ backgroundImage: `url(${data[type].image})` }}>
          <div className={style.Text}>
            <h2 className={style.Title}>{data[type].title}</h2>
            <p className={style.Description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos ullam illo possimus
              eveniet iure et alias sit, repellendus modi porro voluptatum harum libero cum magnam incidunt repellat
              exercitationem! Eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos
              ullam illo possimus eveniet iure et alias sit, repellendus modi porro voluptatum harum libero cum magnam
              incidunt repellat exercitationem! Eaque?
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemsBanner;
