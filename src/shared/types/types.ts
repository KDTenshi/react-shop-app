import { ButtonHTMLAttributes } from "react";

export type ButtonPropsDefault = ButtonHTMLAttributes<HTMLButtonElement>;

export type IconType = "fav" | "user" | "cart";

export type DisplayCaseType = "best" | "popular" | "sale";

export type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
};
