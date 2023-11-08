import React from "react";
import ProductDetailsContainer from "../components/productDetails/ProductDetailsContainer";
import { Navbar } from "../../../ui/components/Navbar";



const ProductDetailsPage = () => {
  return (
    <>
      <Navbar />
      <ProductDetailsContainer />
    </>
  );
};

export default ProductDetailsPage;
