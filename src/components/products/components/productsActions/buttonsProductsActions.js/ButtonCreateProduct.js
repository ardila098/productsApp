import React from "react";
import { ButtonAddPoduct } from "./styled";
import useProductsActions from "../hook/useProductsActions";
import ModalEditProduct from "../../modals/ModalEditProduct";

const ButtonCreateProduct = () => {
  const { handleCreate, modalData, handleClose } = useProductsActions();

  return (
    <>
      <ButtonAddPoduct onClick={() => handleCreate()} />
      <ModalEditProduct data={modalData} close={handleClose} />
    </>
  );
};

export default ButtonCreateProduct;
