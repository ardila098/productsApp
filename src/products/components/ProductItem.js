import React from "react";
import { CardProduct, TitleProduct, ContentImg } from "./style";

const ProductItem = ({ id,name,imgURL }) => {
  return (
    <CardProduct>
      <ContentImg>
        <img src={imgURL} alt={name} />
      </ContentImg>

      <TitleProduct>{name}</TitleProduct>
    </CardProduct>
  );
};

export default ProductItem;
