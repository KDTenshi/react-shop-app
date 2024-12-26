import { FC, useState } from "react";
import style from "./FiguresPage.module.css";
import { useGetProductsQuery } from "../../shared/api/api";
import { ItemsList } from "../../components/itemsList";
import { ItemsFilters } from "../../components/itemsFilters";
import { FiltersType } from "../../shared/types/types";

const FiguresPage: FC = () => {
  const { data } = useGetProductsQuery();
  const [filters, setFilters] = useState<FiltersType>({ series: "All", sortBy: "Default", title: "All", type: "All" });

  const changeFilters = (name: keyof FiltersType, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className={style.FiguresPage}>
      <ItemsFilters filters={filters} changeFilters={changeFilters} />
      {data && <ItemsList items={data} />}
    </main>
  );
};

export default FiguresPage;
