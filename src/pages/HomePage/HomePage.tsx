import { FC } from "react";
import { Banner } from "../../components/banner";
import { BannersGrid } from "../../components/bannersGrid";
import { DisplayCase } from "../../components/displayCase";
import style from "./HomePage.module.css";

const HomePage: FC = () => {
  return (
    <main className={style.HomePage}>
      <Banner />
      <div className={style.PageContent}>
        <DisplayCase type="best" />
        <DisplayCase type="sale" />
        <DisplayCase type="popular" />
        <BannersGrid />
      </div>
    </main>
  );
};

export default HomePage;
