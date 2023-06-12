import React from "react";
import ProductsList from "../items/ProductsList";
import { ContentInitialProducts } from "./styled";

const ProductsPage = () => {
  return (
    <>
      <ContentInitialProducts>
        <ProductsList />
      </ContentInitialProducts>
    </>
  );
};

export default ProductsPage;
