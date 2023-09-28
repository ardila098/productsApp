import React, { useContext } from "react";
import { ButtonAddPoduct } from "./styled";
import { ProductsContext } from "../../../context/ProductsContext";

const ButtonCreateProduct = () => {
  const { productsActions } = useContext(ProductsContext);
  const { handleCreate } = productsActions;

  return (
    <>
      <ButtonAddPoduct onClick={() => handleCreate()} />
    </>
  );
};

export default ButtonCreateProduct;
