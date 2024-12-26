import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import ItemsPage from "../../pages/ItemsPage/ItemsPage";
import FiguresPage from "../../pages/FiguresPage/FiguresPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/best" element={<ItemsPage type={"best"} />} />
      <Route path="/popular" element={<ItemsPage type={"popular"} />} />
      <Route path="/sale" element={<ItemsPage type={"sale"} />} />
      <Route path="/figures" element={<FiguresPage />} />
    </Routes>
  );
};

export default AppRouter;
