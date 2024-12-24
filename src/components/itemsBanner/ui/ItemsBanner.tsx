import { FC } from "react";
import { DisplayCaseType } from "../../../shared/types/types";
import style from "./ItemsBanner.module.css";
import { Image } from "../../../shared/ui";

interface ItemsBannerProps {
  type: DisplayCaseType;
}

const content: { [key in DisplayCaseType]: { title: string; image: string } } = {
  best: {
    title: "The best figurines and models you could find",
    image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  popular: {
    title: "The most popular figurines and models",
    image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  sale: {
    title: "Figurines and models that are currently on sale",
    image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
};

const ItemsBanner: FC<ItemsBannerProps> = ({ type }) => {
  return (
    <div className={style.ItemsBanner}>
      <Image src={content[type].image} alt={content[type].title} className={style.Image} />
      <div className={style.Text}>
        <h2 className={style.Title}>{content[type].title}</h2>
        <p className={style.Description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos ullam illo possimus eveniet
          iure et alias sit, repellendus modi porro voluptatum harum libero cum magnam incidunt repellat exercitationem!
          Eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos ullam illo possimus
          eveniet iure et alias sit, repellendus modi porro voluptatum harum libero cum magnam incidunt repellat
          exercitationem! Eaque?
        </p>
      </div>
    </div>
  );
};

export default ItemsBanner;
