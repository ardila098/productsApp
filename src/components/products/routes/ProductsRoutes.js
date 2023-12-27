import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsTablePage from "../pages/ProductsTablePage";

import { ProductsProvider } from "../context/ProductsContext";

import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import DrawerCart from "../../drawer/DrawerCart";
import ProductsCustomPage from "../pages/ProductsCustomPage";

const ProductsRoutes = () => {
  return (
    <div>
      <ProductsProvider>
        <Routes>
          <Route path="productsTable" element={<ProductsTablePage />} />
          <Route path="verona" element={<ProductsPage />} />
          <Route path="product/:id?" element={<ProductDetailsPage />} />
          <Route path="products/" element={<ProductsCustomPage />} />

          <Route path="/" element={<Navigate to={"/verona"} />} />
        </Routes>
        <DrawerCart />
      </ProductsProvider>
    </div>
  );
};

export default ProductsRoutes;
