import { ButtonHTMLAttributes } from "react";

export type ButtonPropsDefault = ButtonHTMLAttributes<HTMLButtonElement>;

export type IconType = "fav" | "user" | "cart";

export type ItemsGroupType = "best" | "popular" | "sale";

export type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
};

export type FiltersType = {
  title: string;
  series: string;
  type: string;
  sortBy: string;
};
