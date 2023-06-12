import React from "react";
import useProducts from "../hooks/useProducts";
import { CardProduct, ContentProductsList } from "./Styled";
import ProductItemList from "./ProductsItemList";
import ButtonsCard from "../components/buttons/buttonsItem/ButtonsCard";

const ProductsList = () => {
  const { products } = useProducts();

  console.log(products);

  return (
    <ContentProductsList>
      {products.map((products) => (
        <CardProduct key={products._id}>
          <ProductItemList key={products._id} {...products} />

          <ButtonsCard />
        </CardProduct>
      ))}
    </ContentProductsList>
  );
};

export default ProductsList;
