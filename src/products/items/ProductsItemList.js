import React from "react";
import {
  TitleProduct,
  ContentImg,
  // ContentDescription,
  // DescriptionCard,
  ContentTitle,
  PriceText,
  ContentPrice,
} from "./Styled";


const ProductItemList = ({
  id,
  name,
  imgURL,
  category,
  stock,
  price,
  description,
}) => {
  return (
    <>
      <ContentImg>
        <img src={imgURL} alt={name} />
      </ContentImg>

      <ContentTitle>
        <TitleProduct>{name}</TitleProduct>
      </ContentTitle>

      {/* <ContentDescription>
        <DescriptionCard>{description.slice(0, 40)}</DescriptionCard>
      </ContentDescription> */}

      <ContentPrice>
        <PriceText>${price}</PriceText>
      </ContentPrice>
    </>
  );
};

export default ProductItemList;
