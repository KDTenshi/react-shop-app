import { FC } from "react";
import style from "./ItemsFilters.module.css";
import { Dropdown } from "../../../shared/ui";
import { FiltersType } from "../../../shared/types/types";

const series = ["Games", "Movies", "Anime", "All"];
const titles = ["Genshin", "DMC", "Batman", "FNaF", "All"];
const types = ["Funko", "Flex", "Acryl", "All"];
const sorts = ["Default", "Price Up", "Price Down"];

interface ItemsFiltersProps {
  filters: FiltersType;
  changeFilters: (name: keyof FiltersType, value: string) => void;
}

const ItemsFilters: FC<ItemsFiltersProps> = ({ filters, changeFilters }) => {
  return (
    <div className={style.ItemsFilters}>
      <div className={style.Wrapper}>
        <Dropdown
          title="Series"
          options={series}
          selectedOption={filters.series}
          selectOption={(option) => changeFilters("series", option)}
        />
        <Dropdown
          title="Title"
          options={titles}
          selectedOption={filters.title}
          selectOption={(option) => changeFilters("title", option)}
        />
        <Dropdown
          title="Type"
          options={types}
          selectedOption={filters.type}
          selectOption={(option) => changeFilters("type", option)}
        />
      </div>
      <Dropdown
        title="Sort By"
        options={sorts}
        selectedOption={filters.sortBy}
        selectOption={(option) => changeFilters("sortBy", option)}
      />
    </div>
  );
};

export default ItemsFilters;
