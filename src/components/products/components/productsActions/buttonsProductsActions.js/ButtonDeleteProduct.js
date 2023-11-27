import React from "react";
import PropType from "prop-types";
import { Trash } from "react-feather";
import { ButtonRemoveProduct } from "./styled";

const ButtonDeleteProduct = ({ handleDelete }) => {
  return (
    <>
      <ButtonRemoveProduct icon={<Trash />} onClick={() => handleDelete()} />
    </>
  );
};

export default ButtonDeleteProduct;

ButtonDeleteProduct.propType = {
  handleDelete: PropType.func,
};
