import PropType from "prop-types";
import React from "react";
import ModalEditProduct from "../modals/ModalEditProduct";
import ButtonEditProduct from "./buttonsProductsActions.js/ButtonEditProduct";
import ButtonDeleteProduct from "./buttonsProductsActions.js/ButtonDeleteProduct";
import { ContentActionsTableProducts } from "./buttonsProductsActions.js/styled";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const ContentActions = ({ data }) => {
  const { productsActions } = useContext(ProductsContext);
  const { handleClose, handleEdit, modalData, handleDelete } = productsActions;

  return (
    <>
      <ContentActionsTableProducts>
        <ButtonEditProduct handleEdit={handleEdit} />

        <ButtonDeleteProduct handleDelete={() => handleDelete(data)} />

        <ModalEditProduct data={modalData} close={handleClose} />
      </ContentActionsTableProducts>
    </>
  );
};

export default ContentActions;

ContentActions.propType = {
  data: PropType.object,
};
