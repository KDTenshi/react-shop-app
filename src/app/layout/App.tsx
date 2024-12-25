import { FC } from "react";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../router/appRouter";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
