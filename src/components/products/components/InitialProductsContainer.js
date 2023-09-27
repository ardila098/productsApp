import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const InitialProductsContainer = () => {
  const { productsCrud } = useContext(ProductsContext);
  const { products } = productsCrud;

  return (
    <>
      <ProductsHeader />
      <ProductsTable products={products} />
    </>
  );
};

export default InitialProductsContainer;
