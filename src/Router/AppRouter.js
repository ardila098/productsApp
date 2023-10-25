import React from "react";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "../components/context/DataContext";
import DrawerCart from "../components/drawer/DrawerCart";
import ProductsRoutes from "../components/products/routes/ProductsRoutes";

const AppRouter = () => {
  return (
    <div>
      <DataProvider>
        <Routes>
          <Route path="/*" element={<ProductsRoutes />} />
        </Routes>
        <DrawerCart />
      </DataProvider>
    </div>
  );
};

export default AppRouter;
