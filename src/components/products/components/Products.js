import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import {
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

const Products = () => {
  const { productsCrud } = useContext(ProductsContext);
  const { products } = productsCrud;
  const navigate = useNavigate();
  console.log(products);

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
              {/* {product.imgs.map((image) => (
                  <div className="image-container" key={image._id}>
                    <img src={image.url} alt={product.description} />
                  </div>
                ))} */}
              <ContentImgProduct
                key={product.imgs[0]._id}
                className="image-container"
                onClick={() => redirectToProductDetails(product._id)}
              >
                <img src={product.imgs[0].url} alt={product.description} />
                <ItemName>{product.name}</ItemName>
                <ItemPrice>${product.price.toFixed(2)}</ItemPrice>
                <ButtonAddToCart textBtn={"ADD TO CART"} name={"addToCart"} />
              </ContentImgProduct>
            </CardProduct>
          );
        })}
      </ContentProducts>
    </ContenCustom>
  );
};

export default Products;
