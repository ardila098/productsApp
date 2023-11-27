import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";
import ModalEditProduct from "./modals/ModalEditProduct";

const ProductsTableContainer = () => {
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

export default ProductsTableContainer;
