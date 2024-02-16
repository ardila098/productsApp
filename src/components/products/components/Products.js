import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import {
  HeartOutlined,
  // EyeOutlined,
} from "@ant-design/icons";
import {
  ButtonsContainer,
  CardProduct,
  ContenCustom,
  ContentImgProduct,
  ContentProducts,
  ItemName,
  ItemPrice,
} from "./style/styleProducts";
import { useNavigate } from "react-router-dom";
import TitleCustom from "../../main/TitleCustom";
import ButtonAddToCart from "../../buttonsCustom/ButtonAddToCart";
import { Button } from "antd";

const Products = () => {
  const { productsCrud, shoppingCart } = useContext(ProductsContext);
  const { onAddToCart } = shoppingCart;
  const { products } = productsCrud;
  const navigate = useNavigate();
  const [isHoverId, setIsHoverId] = useState();

  const handleMouseEnter = (productId) => {
    setIsHoverId(productId);
  };

  const handleMouseLeave = () => {
    setIsHoverId(null);
  };

  const redirectToProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <ContenCustom>
      <TitleCustom title={"Nuestros Productos"} />

      <ContentProducts>
        {products.map((product) => {
          return (
            <CardProduct className="producto" key={product._id}>
     
              <ContentImgProduct
                onMouseEnter={() => handleMouseEnter(product._id)}
                onMouseLeave={handleMouseLeave}
                key={product._id} 
                className="image-container"
              >
                <img
                  src={
                    isHoverId === product._id && product.imgs && product.imgs[1]
                      ? product.imgs[1].url
                      : product.imgs && product.imgs[0] && product.imgs[0].url
                  }
                  alt={product.description}
                  onClick={() => redirectToProductDetails(product._id)}
                />
                <ButtonsContainer>
                  <Button>
                    <HeartOutlined style={{ fontSize: "18px" }} />
                  </Button>
                  {/* <Button>
            <EyeOutlined style={{ fontSize: "18px" }} />
          </Button> */}
                </ButtonsContainer>

                <ItemName>{product.name}</ItemName>
                <ItemPrice>${product.price.toFixed(2)} COP</ItemPrice>
                <ButtonAddToCart
                  onChange={() => onAddToCart({ ...product, quantity: 1 })}
                />
              </ContentImgProduct>
            </CardProduct>
          );
        })}
      </ContentProducts>
    </ContenCustom>
  );
};

export default Products;
