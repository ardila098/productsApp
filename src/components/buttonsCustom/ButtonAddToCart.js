import PropType from "prop-types";
import React from "react";
import { ButtonAddToCartStyled } from "./style";

const ButtonAddToCart = ({ textBtn, onChange }) => {
  return (
    <div>
      <ButtonAddToCartStyled onClick={onChange}>
        {textBtn}
      </ButtonAddToCartStyled>
    </div>
  );
};

export default ButtonAddToCart;

ButtonAddToCart.propType = {
  name: PropType.string,
  onChange: PropType.func,
};
