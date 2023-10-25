import React from "react";
import ProductDetailsContainer from "../components/productDetails/ProductDetailsContainer";
import { Navbar } from "../../../ui/components/Navbar";
import Logo from "../../main/Logo";

const ProductDetailsPage = () => {
  return (
    <>
      <Logo />
      <Navbar/>
      <ProductDetailsContainer />
    </>
  );
};

export default ProductDetailsPage;
