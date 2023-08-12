import React from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ButtonAddCard } from '../../../items/Styled';

const ButtonAddCart = () => {
  return (
    
    <ButtonAddCard
    className="buttonIcon"
    icon={<ShoppingCartOutlined />}
  ></ButtonAddCard>
    
  )
}

export default ButtonAddCart
