import React from "react";

import ProductsTableContainer from "../components/ProductsTableContainer";
import Logo from "../../main/Logo";
import { Navbar } from "../../../ui/components/Navbar";

const ProductsTablePage = () => {
  return (
    <div>
      <Logo />
      <Navbar />
      <ProductsTableContainer />
    </div>
  );
};

export default ProductsTablePage;
