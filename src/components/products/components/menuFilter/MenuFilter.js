import React, { useContext } from "react";

import { ProductsContext } from "../../context/ProductsContext";

const MenuFilter = () => {
  const { productsCrud } = useContext(ProductsContext);
  const { products } = productsCrud;

  return <></>;
};
export default MenuFilter;
