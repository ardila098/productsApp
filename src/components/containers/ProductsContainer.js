import React from "react";
import PropType from "prop-types";
import { useContext } from "react";
import { ProductsContext } from "../products/context/ProductsContext";
import { Main } from "../products/pages/styled";
import Products from "../products/components/Products";

const ProductsContainer = () => {
  const { productsCrud } = useContext(ProductsContext);
  const { products } = productsCrud;

  return (
    <>
      <Main>
        <Products products={products} />
      </Main>
    </>
  );
};

export default ProductsContainer;

ProductsContainer.propType = {
  data: PropType.object,
};
