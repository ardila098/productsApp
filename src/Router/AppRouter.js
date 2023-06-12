import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsRoutes from "../products/routes/ProductsRoutes";
import { Navbar } from "../ui/components/Navbar";
import CarouselProducts from "../products/components/carousel/CarouselProducts";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <CarouselProducts />
      <Routes>
        <Route path="/*" element={<ProductsRoutes />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
