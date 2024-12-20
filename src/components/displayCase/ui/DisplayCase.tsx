import { FC } from "react";
import { Item } from "../../../shared/types/types";
import style from "./DisplayCase.module.css";
import { ItemCard } from "../../itemCard";

interface DisplayCaseProps {
  items: Item[];
  title: string;
}

const DisplayCase: FC<DisplayCaseProps> = ({ items, title }) => {
  const selectedItems = items.slice(0, 4);

  return (
    <div className={style.DisplayCase}>
      <h2 className={style.Title}>{title}</h2>
      <div className={style.Wrapper}>
        {selectedItems.map((item) => (
          <ItemCard key={item.id} item={item} saleMark={item.onSale} />
        ))}
      </div>
    </div>
  );
};

export default DisplayCase;
