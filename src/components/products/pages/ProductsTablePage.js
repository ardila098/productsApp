import React from "react";

import ProductsTableContainer from "../components/ProductsTableContainer";
import { Navbar } from "../../../ui/components/Navbar";


const ProductsTablePage = () => {
  return (
    <div>
      <Navbar />
      <ProductsTableContainer />
    </div>
  );
};

export default ProductsTablePage;
