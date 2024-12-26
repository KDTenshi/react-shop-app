import { FC } from "react";
import { Item } from "../../../shared/types/types";
import style from "./ItemsList.module.css";
import { ItemCard } from "../../itemCard";

interface ItemsListProps {
  items: Item[];
}

const ItemsList: FC<ItemsListProps> = ({ items }) => {
  return (
    <div className={style.ItemsList}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
