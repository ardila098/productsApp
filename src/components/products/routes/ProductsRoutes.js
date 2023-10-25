import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsTablePage from "../pages/ProductsTablePage";

import { ProductsProvider } from "../context/ProductsContext";

import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const ProductsRoutes = () => {
  return (
    <div>
      <ProductsProvider>
        <Routes>
          <Route path="productsTable" element={<ProductsTablePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/:id?" element={<ProductDetailsPage />} />

          <Route path="/" element={<Navigate to={"/products"} />} />
        </Routes>
      </ProductsProvider>
    </div>
  );
};

export default ProductsRoutes;
