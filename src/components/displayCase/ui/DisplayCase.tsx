import { FC } from "react";
import { DisplayCaseType } from "../../../shared/types/types";
import style from "./DisplayCase.module.css";
import { ItemCard } from "../../itemCard";
import { useGetProductsQuery } from "../../../shared/api/api";

interface DisplayCaseProps {
  type?: DisplayCaseType;
}

const titles: { [key in DisplayCaseType]: string } = {
  best: "Best of all time",
  popular: "Popular",
  sale: "On sale now",
};

const DisplayCase: FC<DisplayCaseProps> = ({ type }) => {
  const { data } = useGetProductsQuery(type);
  const selectedItems = data && data.slice(0, 4);

  const title = type ? titles[type] : "Display case";

  return (
    <div className={style.DisplayCase}>
      <h2 className={style.Title}>{title}</h2>
      <div className={style.Wrapper}>
        {selectedItems && selectedItems.map((item) => <ItemCard key={item.id} item={item} saleMark={item.onSale} />)}
      </div>
    </div>
  );
};

export default DisplayCase;
