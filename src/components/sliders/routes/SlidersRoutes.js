import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SlidersTablePage from "../pages/SlidersTablePage";
import { SlidersProvider } from "../context/SlidersContext";

const   SlidersRoutes = () => {
  return (
    <div>
      <SlidersProvider>
        <Routes>
          <Route path="slidersTable" element={<SlidersTablePage />} />
          <Route path="/" element={<Navigate to={"/slidersTable"} />} />
        </Routes>
      </SlidersProvider>
    </div>
  );
};

export default SlidersRoutes;
