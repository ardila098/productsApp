import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsTablePage from "../pages/ProductsTablePage";


const ProductsRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path="products" element={<ProductsTablePage />} />
        <Route path="/" element={<Navigate to={"/products"} />} />
      </Routes>
    </div>
  );
};

export default ProductsRoutes;
