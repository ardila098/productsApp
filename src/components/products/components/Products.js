import React from "react";
import ProductsTable from "./ProductsTable";
import ButtonCreateProduct from "./productsActions/buttonsProductsActions.js/ButtonCreateProduct";

const Products = () => {
  return (
    <>
      <ButtonCreateProduct />
      <ProductsTable />
    </>
  );
};

export default Products;
