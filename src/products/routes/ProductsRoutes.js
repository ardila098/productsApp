import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsCrudPage from "../pages/ProductsCrudPage";
import ProductsPage from "../pages/ProductsPage";


const ProductsRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path="productsCrud" element={<ProductsCrudPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="/" element={<Navigate to={"/products"} />} />
      </Routes>
    </div>
  );
};

export default ProductsRoutes;
