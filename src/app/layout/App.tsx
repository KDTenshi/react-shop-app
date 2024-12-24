import { FC } from "react";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemsPage from "../../pages/ItemsPage/ItemsPage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/best" element={<ItemsPage type={"best"} />} />
        <Route path="/popular" element={<ItemsPage type={"popular"} />} />
        <Route path="/sale" element={<ItemsPage type={"sale"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
