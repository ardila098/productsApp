import React from "react";
import PropType from "prop-types";
import { ButtonRemoveProduct } from "./styled";

const ButtonDeleteProduct = ({handleDelete}) => {
  return (
    <>
      <ButtonRemoveProduct
        onClick={() => handleDelete()}
        
      />
    </>
  );
};

export default ButtonDeleteProduct;

ButtonDeleteProduct.propType = {
  handleDelete: PropType.func,
};
