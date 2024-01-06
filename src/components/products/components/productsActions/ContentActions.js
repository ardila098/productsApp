import PropType from "prop-types";
import React from "react";
import ButtonEditProduct from "./buttonsProductsActions.js/ButtonEditProduct";
import ButtonDeleteProduct from "./buttonsProductsActions.js/ButtonDeleteProduct";
import { ContentActionsTableProducts } from "./buttonsProductsActions.js/styled";

const ContentActions = ({ data, handleDelete, handleEdit }) => {
  return (
    <>
      <ContentActionsTableProducts>
        <ButtonEditProduct handleEdit={() => handleEdit(data)} />
        <ButtonDeleteProduct handleDelete={() => handleDelete(data)} />
      </ContentActionsTableProducts>
    </>
  );
};

export default ContentActions;

ContentActions.propType = {
  data: PropType.object,
  handleDelete: PropType.func,
  handleEdit: PropType.func,
};
