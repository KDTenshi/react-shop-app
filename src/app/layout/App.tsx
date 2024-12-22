import { FC } from "react";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import HomePage from "../../pages/HomePage/HomePage";

const App: FC = () => {
  return (
    <>
      <Header />
      <NavBar />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
