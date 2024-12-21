import { FC } from "react";
import { Item } from "../../../shared/types/types";
import style from "./ItemCard.module.css";
import { formatePrice } from "../utils/formatePrice";
import { Image } from "../../../shared/ui";

interface ItemCardProps {
  item: Item;
  saleMark?: boolean;
}

const ItemCard: FC<ItemCardProps> = ({ item, saleMark = false }) => {
  return (
    <div className={style.ItemCard}>
      {saleMark && <p className={style.SaleMark}>SALE!</p>}
      <Image src={item.image} alt={item.name} className={style.Image} />
      <div className={style.Info}>
        <h2 className={style.Name}>{item.name}</h2>
        <p className={style.Price}>{formatePrice(item.price)}</p>
      </div>
    </div>
  );
};

export default ItemCard;
