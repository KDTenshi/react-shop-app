export const formatePrice = (price: number) => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "USD",
  };

  return price.toLocaleString("en-US", options);
};
