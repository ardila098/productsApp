import React, { useContext } from "react";
import { ButtonAddPoduct } from "./styled";
import ModalEditProduct from "../../modals/ModalEditProduct";
import { ProductsContext } from "../../../context/ProductsContext";

const ButtonCreateProduct = () => {
  const { productsActions } = useContext(ProductsContext);
  const { handleCreate, modalData, handleClose } = productsActions;

  return (
    <>
      <ButtonAddPoduct onClick={() => handleCreate()} />
      <ModalEditProduct data={modalData} close={handleClose} />
    </>
  );
};

export default ButtonCreateProduct;
