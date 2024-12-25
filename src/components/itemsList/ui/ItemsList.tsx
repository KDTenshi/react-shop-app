import { FC } from "react";
import { ItemsGroupType } from "../../../shared/types/types";
import { useGetProductsQuery } from "../../../shared/api/api";
import style from "./ItemsList.module.css";
import ItemCardSkeleton from "../../itemCard/ui/ItemCardSkeleton";
import { ItemCard } from "../../itemCard";

interface ItemsListProps {
  type: ItemsGroupType;
}

const ItemsList: FC<ItemsListProps> = ({ type }) => {
  const { data, isLoading } = useGetProductsQuery(type);

  return (
    <div className={style.ItemsList}>
      {isLoading && [...new Array(8)].map((_, index) => <ItemCardSkeleton key={index} />)}
      {data && data.map((item) => <ItemCard key={item.id} item={item} />)}
    </div>
  );
};

export default ItemsList;
