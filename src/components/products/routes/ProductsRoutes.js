import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsTablePage from "../pages/ProductsTablePage";
import ProductsAll from "../../categories/ProductsAll";
import { ProductsProvider } from "../context/ProductsContext";

const ProductsRoutes = () => {
  return (
    <div>
      <ProductsProvider>
        <Routes>
          <Route path="productsTable" element={<ProductsTablePage />} />
          <Route path="products" element={<ProductsAll />} />

          <Route path="/" element={<Navigate to={"/products"} />} />
        </Routes>
      </ProductsProvider>
    </div>
  );
};

export default ProductsRoutes;
