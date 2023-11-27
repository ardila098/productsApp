import React from "react";
import ButtonCreateProduct from "./productsActions/buttonsProductsActions.js/ButtonCreateProduct";
import { ContentHeader } from "./style";

const ProductsHeader = () => {
  return (
    <ContentHeader>
      <div className="container">
        <ButtonCreateProduct />
      </div>
    </ContentHeader>
  );
};

export default ProductsHeader;
