import React from "react";
import ProductDetailsContainer from "../components/productDetails/ProductDetailsContainer";
import { Navbar } from "../../../ui/components/Navbar";
import HeaderCustom from "../../main/HeaderCustom";

const ProductDetailsPage = () => {
  return (
    <>
      <Navbar />
      <HeaderCustom />
      <ProductDetailsContainer />
    </>
  );
};

export default ProductDetailsPage;
