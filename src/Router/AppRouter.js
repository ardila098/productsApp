import React from "react";
import { Route, Routes } from "react-router-dom";

import ProductsRoutes from "../components/products/routes/ProductsRoutes";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<ProductsRoutes />} />
      </Routes>
     
    </div>
  );
};

export default AppRouter;
