import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../ui/components/Navbar";
import { DataProvider } from "../components/context/DataContext";
import DrawerCart from "../components/drawer/DrawerCart";
import Slider from "../components/sliders/Slider";
import ProductsRoutes from "../components/products/routes/ProductsRoutes";
import Logo from "../components/main/Logo";

const AppRouter = () => {
  return (
    <div>
      <DataProvider>
        <Logo />
        <Navbar />
        <Slider />
        <Routes>
          <Route path="/*" element={<ProductsRoutes />} />
        </Routes>
        <DrawerCart />
      </DataProvider>
    </div>
  );
};

export default AppRouter;
