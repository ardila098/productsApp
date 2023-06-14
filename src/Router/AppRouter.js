import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsRoutes from "../products/routes/ProductsRoutes";
import { Navbar } from "../ui/components/Navbar";
import CarouselProducts from "../products/components/carousel/CarouselProducts";
import { DataProvider } from "../components/context/DataContext";
import DrawerCart from "../components/drawer/DrawerCart";

const AppRouter = () => {
  return (
    <div>
      <DataProvider>
        <Navbar />
        <CarouselProducts />
        <Routes>
          <Route path="/*" element={<ProductsRoutes />} />
        </Routes>
        <DrawerCart />
      </DataProvider>
    </div>
  );
};

export default AppRouter;
