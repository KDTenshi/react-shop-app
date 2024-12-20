import { FC } from "react";
import { Header } from "../../components/header";
import { NavBar } from "../../components/navbar";
import { useGetBestProductsQuery, useGetPopularProductsQuery, useGetSaleProductsQuery } from "../../shared/api/api";
import { DisplayCase } from "../../components/displayCase";

const App: FC = () => {
  const { data: best } = useGetBestProductsQuery();
  const { data: sale } = useGetSaleProductsQuery();
  const { data: popular } = useGetPopularProductsQuery();

  return (
    <>
      <Header />
      <NavBar />
      {best && <DisplayCase title="Best of all time" items={best} />}
      {sale && <DisplayCase title="On sale now" items={sale} />}
      {popular && <DisplayCase title="Popular" items={popular} />}
    </>
  );
};

export default App;
