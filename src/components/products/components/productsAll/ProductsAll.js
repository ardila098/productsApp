import React, { useContext, useEffect, useState } from "react";

import {
  HeartOutlined,
  // EyeOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import {
  ButtonsContainer,
  CardProduct,
  ContenCustom,
  ContentImgProduct,
  ContentProducts,
  ItemName,
  ItemPrice,
} from "./style";
import { ProductsContext } from "../../context/ProductsContext";
import TitleCustom from "../../../main/TitleCustom";
import ButtonAddToCart from "../../../buttonsCustom/ButtonAddToCart";

const ProductsAll = () => {
  const { productsCrud, shoppingCart, searchCustom } =
    useContext(ProductsContext);
  const { searchResults, searchTerm } = searchCustom;
  const { onAddToCart } = shoppingCart;
  const { products } = productsCrud;
  const [updateSearch, setUpdateSearch] = useState(products);
  const navigate = useNavigate();
  const [isHoverId, setIsHoverId] = useState();

  const handleMouseEnter = (productId) => {
    console.log(productId);
    setIsHoverId(productId);
  };

  const handleMouseLeave = () => {
    setIsHoverId(null);
  };

  const redirectToProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  console.log(searchResults);
  useEffect(() => {
    if (searchTerm.length < 2) {
      setUpdateSearch(products);
    } else {
      setUpdateSearch(searchResults);
    }
  }, [searchTerm]);

  return (
    <ContenCustom>
      <TitleCustom title={"Nuestros Productos"} />
      <ContentProducts>
        {updateSearch.map((product) => {
          return (
            <CardProduct className="producto" key={product._id}>
              {/* {product.imgs.map((image) => (
                  <div className="image-container" key={image._id}>
                    <img src={image.url} alt={product.description} />
                  </div>
                ))} */}
              <ContentImgProduct
                onMouseEnter={() => handleMouseEnter(product._id)}
                onMouseLeave={handleMouseLeave}
                key={product.imgs[0]._id}
                className="image-container"
              >
                <img
                  src={
                    isHoverId === product._id && product.imgs[1]
                      ? product.imgs[1].url
                      : product.imgs[0].url
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

export default ProductsAll;
