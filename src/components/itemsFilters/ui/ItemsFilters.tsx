import { FC } from "react";
import style from "./ItemsFilters.module.css";
import { Dropdown } from "../../../shared/ui";
import { FiltersType } from "../../../shared/types/types";
import { useGetFiltersQuery } from "../../../shared/api/api";

interface ItemsFiltersProps {
  filters: FiltersType;
  changeFilters: (name: keyof FiltersType, value: string) => void;
}

const sorts = ["Default", "Price Up", "Price Down"];

const ItemsFilters: FC<ItemsFiltersProps> = ({ filters, changeFilters }) => {
  const { data } = useGetFiltersQuery();

  if (data) console.log(data);

  return (
    <div className={style.ItemsFilters}>
      {data && (
        <div className={style.Wrapper}>
          <Dropdown
            title="Series"
            options={["All", ...data.series]}
            selectedOption={filters.series}
            selectOption={(option) => changeFilters("series", option)}
          />
          <Dropdown
            title="Title"
            options={["All", ...data.titles]}
            selectedOption={filters.title}
            selectOption={(option) => changeFilters("title", option)}
          />
          <Dropdown
            title="Type"
            options={["All", ...data.types]}
            selectedOption={filters.type}
            selectOption={(option) => changeFilters("type", option)}
          />
        </div>
      )}
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
