import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsTablePage from "../pages/ProductsTablePage";

import { ProductsProvider } from "../context/ProductsContext";

import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import DrawerCart from "../../drawer/DrawerCart";
import ProductsCustomPage from "../pages/ProductsCustomPage";
import SlidersTablePage from "../../sliders/pages/SlidersTablePage";
import { SlidersProvider } from "../../sliders/context/SlidersContext";

const ProductsRoutes = () => {
  return (
    <div>
      <ProductsProvider>
        <SlidersProvider>
          <Routes>
            <Route path="productsTable" element={<ProductsTablePage />} />
            <Route path="verona" element={<ProductsPage />} />
            <Route path="product/:id?" element={<ProductDetailsPage />} />
            <Route path="products/" element={<ProductsCustomPage />} />
            <Route path="slidersTable" element={<SlidersTablePage />} />
            <Route path="/" element={<Navigate to={"/verona"} />} />
          </Routes>
          <DrawerCart />
        </SlidersProvider>
      </ProductsProvider>
    </div>
  );
};

export default ProductsRoutes;
