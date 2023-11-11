import PropType from "prop-types";
import React from "react";
import { ButtonAddToCartStyled } from "./style";

const ButtonAddToCart = ({ textBtn, name }) => {
  return (
    <div>
      <ButtonAddToCartStyled key="submit" htmlType="submit" name={name}>
        {textBtn}
      </ButtonAddToCartStyled>
      
    </div>
  );
};

export default ButtonAddToCart;

ButtonAddToCart.propType = {
  name: PropType.string,
};
