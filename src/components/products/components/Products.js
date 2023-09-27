import React from "react";

import { ProductsProvider } from "../context/ProductsContext";
import InitialProductsContainer from "./InitialProductsContainer";

const Products = () => {
  return (
    <>
      <ProductsProvider>
        <InitialProductsContainer />
      </ProductsProvider>
    </>
  );
};

export default Products;
