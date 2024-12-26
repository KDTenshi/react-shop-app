import { FC } from "react";
import style from "./ItemsPage.module.css";
import { ItemsBanner } from "../../components/itemsBanner";
import { ItemsList } from "../../components/itemsList";
import { ItemsGroupType } from "../../shared/types/types";
import { useGetProductsQuery } from "../../shared/api/api";

interface ItemsPageProps {
  type: ItemsGroupType;
}

const ItemsPage: FC<ItemsPageProps> = ({ type }) => {
  const { data } = useGetProductsQuery(type);

  return (
    <main className={style.ItemsPage}>
      <ItemsBanner type={type} />
      <div className={style.PageContent}>{data && <ItemsList items={data} />}</div>
    </main>
  );
};

export default ItemsPage;
