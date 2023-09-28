import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ModalEditProduct from "./modals/ModalEditProduct";

const InitialProductsContainer = () => {
  const { productsCrud, productsActions } = useContext(ProductsContext);
  const { products } = productsCrud;
  const { handleClose, modalData } = productsActions;

  return (
    <>
      <ProductsHeader />
      <ProductsTable products={products} />
      <ModalEditProduct data={modalData} close={handleClose} />
    </>
  );
};

export default InitialProductsContainer;
