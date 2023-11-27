import React, { useContext } from "react";
import { ButtonAddPoduct } from "./styled";
import { ProductsContext } from "../../../context/ProductsContext";
import { Plus } from "react-feather";
import ModalEditProduct from "../../modals/ModalEditProduct";

const ButtonCreateProduct = () => {
  const { productsActions } = useContext(ProductsContext);
  const { handleCreate, handleClose, modalData } = productsActions;

  return (
    <>
      <ButtonAddPoduct onClick={() => handleCreate()} icon={<Plus />} />
      <ModalEditProduct data={modalData} close={handleClose} />
    </>
  );
};

export default ButtonCreateProduct;
