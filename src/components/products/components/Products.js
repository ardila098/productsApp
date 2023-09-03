import React from "react";
import ProductsTable from "./ProductsTable";
import { ProductsProvider } from "../context/ProductsContext";
import ProductsHeader from "./ProductsHeader";

const Products = () => {
  return (
    <>
      <ProductsProvider>
        <ProductsHeader />
        <ProductsTable />
      </ProductsProvider>
    </>
  );
};

export default Products;
