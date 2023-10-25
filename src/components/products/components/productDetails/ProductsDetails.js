import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import {
  ContentDetailsProduct,
  ContentEspecificationProduct,
  ContentImgsPrev,
  ContentInitialImg,
  ContentSliderDetails,
  NameDetails,
  PriceDetails,
  RowImgPrev,
} from "./style";

const ProductsDetails = () => {
  const id = useParams();
  const { productsCrud } = useContext(ProductsContext);
  const { getProductById } = productsCrud;
  const [product, setproduct] = useState();
  const [imgInitial, setImgInitial] = useState();

  console.log(imgInitial);

  const getProduct = async () => {
    const dataProduct = await getProductById(id);
    setproduct(dataProduct);
    setImgInitial(dataProduct.imgs[0].url);
  };

  console.log(product);

  const onChangeImgInitial = (img) => {
    setImgInitial(img.url);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <ContentDetailsProduct>
        <ContentSliderDetails>
          <ContentInitialImg>
            <img src={imgInitial} alt="" />
          </ContentInitialImg>
          <ContentImgsPrev>
            {product?.imgs.map((img) => (
              <RowImgPrev>
                <img
                  src={img.url}
                  alt=""
                  onClick={() => onChangeImgInitial(img)}
                />
              </RowImgPrev>
            ))}
          </ContentImgsPrev>
        </ContentSliderDetails>
        <ContentEspecificationProduct>
          <NameDetails>{product.name}</NameDetails>
          <PriceDetails></PriceDetails>
        </ContentEspecificationProduct>
      </ContentDetailsProduct>
    </>
  );
};

export default ProductsDetails;
