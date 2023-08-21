import PropType from "prop-types";
import React from "react";
import ModalEditProduct from "../modals/ModalEditProduct";
import useProductsActions from "./hook/useProductsActions";
import ButtonEditProduct from "./buttonsProductsActions.js/ButtonEditProduct";
import ButtonDeleteProduct from "./buttonsProductsActions.js/ButtonDeleteProduct";
import { ContentActionsTableProducts } from "./buttonsProductsActions.js/styled";

const ContentActions = ({ data }) => {
  const { handleClose, handleEdit, modalData, handleDelete } =
    useProductsActions(data);

  return (
    <>
      <ContentActionsTableProducts>
        <ButtonEditProduct handleEdit={handleEdit} />

        <ButtonDeleteProduct handleDelete={handleDelete} />

        <ModalEditProduct data={modalData} close={handleClose} />
      </ContentActionsTableProducts>
    </>
  );
};

export default ContentActions;

ContentActions.propType = {
  data: PropType.object,
};
