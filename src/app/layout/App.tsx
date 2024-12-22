import { FC } from "react";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navbar";
import { DisplayCase } from "../../components/displayCase";
import { Banner } from "../../components/banner";
import { BannersGrid } from "../../components/bannersGrid";
import { Footer } from "../../components/footer";

const App: FC = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <DisplayCase type="best" />
      <DisplayCase type="popular" />
      <DisplayCase type="sale" />
      <BannersGrid />
      <Footer />
    </>
  );
};

export default App;
