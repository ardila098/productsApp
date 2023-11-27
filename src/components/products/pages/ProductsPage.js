import React from "react";
import ProductsContainer from "../../containers/ProductsContainer";
import Slider from "../../sliders/Slider";
import { Navbar } from "../../../ui/components/Navbar";
import WarningNav from "../../../ui/components/WarningNav";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <WarningNav />
      <Slider />
      <ProductsContainer />
    </>
  );
};

export default ProductsPage;
