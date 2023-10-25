import React from "react";
import ProductsContainer from "../../containers/ProductsContainer";
import Logo from "../../main/Logo";
import { Navbar } from "../../../ui/components/Navbar";
import Slider from "../../sliders/Slider";

const ProductsPage = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Slider />
      <ProductsContainer />
    </>
  );
};

export default ProductsPage;
