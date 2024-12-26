import { FC, useState } from "react";
import style from "./Dropdown.module.css";

interface DropdownProps {
  title?: string;
  options: string[];
  selectedOption: string;
  selectOption: (option: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ title, options, selectedOption, selectOption }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleOptionChange = (option: string) => {
    selectOption(option);
    setIsMenuShown(false);
  };

  return (
    <div className={style.Wrapper}>
      {title && <h2 className={style.Title}>{title}:</h2>}
      <div className={style.Dropdown}>
        <p className={[style.Arrow, "material-symbols-outlined"].join(" ")}>
          {isMenuShown ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </p>
        <p className={style.Selected} onClick={() => setIsMenuShown((prev) => !prev)}>
          {selectedOption}
        </p>
        {isMenuShown && (
          <div className={style.Menu}>
            {options.map((option) => (
              <div className={style.Option} key={option} onClick={() => handleOptionChange(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
