import PropType from "prop-types";

import { ButtonAddToCartStyled, ContentAddBtn } from "./style";
import { ShoppingOutlined } from "@ant-design/icons";


const ButtonAddToCart = ({ textBtn, onChange, }) => {
  



  return (
    <ContentAddBtn >
      <ButtonAddToCartStyled
        onClick={onChange}
        icon={<ShoppingOutlined style={{ fontSize: "18px" }} />}
      ></ButtonAddToCartStyled>
    </ContentAddBtn>
  );
};

export default ButtonAddToCart;

ButtonAddToCart.propType = {
  name: PropType.string,
  onChange: PropType.func,
};
