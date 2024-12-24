import { FC } from "react";
import style from "./ItemsPage.module.css";
import { ItemsBanner } from "../../components/itemsBanner";
import { ItemsList } from "../../components/itemsList";
import { DisplayCaseType } from "../../shared/types/types";

interface ItemsPageProps {
  type: DisplayCaseType;
}

const ItemsPage: FC<ItemsPageProps> = ({ type }) => {
  return (
    <main className={style.ItemsPage}>
      <ItemsBanner type={type} />
      <div className={style.PageContent}>
        <ItemsList type={type} />
      </div>
    </main>
  );
};

export default ItemsPage;
