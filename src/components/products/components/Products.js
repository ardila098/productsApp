import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import {
  CardProduct,
  ContentImgProduct,
  ContentProducts,
  ItemName,
  ItemPrice,
  TitleContentProduct,
} from "./style/styleProducts";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { productsCrud } = useContext(ProductsContext);
  const { products } = productsCrud;
  const navigate = useNavigate();
  console.log(products);

  const redirectToProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <TitleContentProduct style={{ textAlign: "center", fontFamily: "" }}>
        Lista de produtos
      </TitleContentProduct>
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
              </ContentImgProduct>
              <ItemName>{product.name}</ItemName>
              <ItemPrice>${product.price.toFixed(2)}</ItemPrice>
            </CardProduct>
          );
        })}
      </ContentProducts>
    </>
  );
};

export default Products;
