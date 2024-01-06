import React from "react";
import ProductsContainer from "../../containers/ProductsContainer";
import Slider from "../../sliders/Slider";
import { Navbar } from "../../../ui/components/Navbar";
import CategorieSlider from "../components/categories/components/CategorieSlider";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      {/* <WarningNav /> */}
      <Slider />
      <CategorieSlider />
      <ProductsContainer />
    </>
  );
};

export default ProductsPage;
