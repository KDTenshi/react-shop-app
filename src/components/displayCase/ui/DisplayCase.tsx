import { FC } from "react";
import { ItemsGroupType } from "../../../shared/types/types";
import style from "./DisplayCase.module.css";
import { ItemCard } from "../../itemCard";
import { useGetProductsQuery } from "../../../shared/api/api";
import ItemCardSkeleton from "../../itemCard/ui/ItemCardSkeleton";

interface DisplayCaseProps {
  type?: ItemsGroupType;
}

const titles: { [key in ItemsGroupType]: string } = {
  best: "Best of all time",
  popular: "Popular",
  sale: "On sale now",
};

const DisplayCase: FC<DisplayCaseProps> = ({ type }) => {
  const { data, isLoading } = useGetProductsQuery(type);
  const selectedItems = data && data.slice(0, 4);

  const title = type ? titles[type] : "Display case";

  return (
    <div className={style.DisplayCase}>
      <h2 className={style.Title}>{title}</h2>
      <div className={style.Wrapper}>
        {isLoading && [...new Array(4)].map((_, index) => <ItemCardSkeleton key={index} />)}
        {selectedItems && selectedItems.map((item) => <ItemCard key={item.id} item={item} saleMark={item.onSale} />)}
      </div>
    </div>
  );
};

export default DisplayCase;
