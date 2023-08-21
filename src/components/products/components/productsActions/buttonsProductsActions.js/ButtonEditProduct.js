import React from "react";
import PropType from "prop-types";
import { ButtonUpdateProduct } from "./styled";

const ButtonEditProduct = ({ handleEdit }) => {
  return (
    <>
      <ButtonUpdateProduct
        onClick={() => handleEdit()}
      />
    </>
  );
};

export default ButtonEditProduct;

ButtonEditProduct.propType = {
  handleEdit: PropType.func,
};
