import PropType from "prop-types";
import React from "react";
import ButtonEditProduct from "./buttonsProductsActions.js/ButtonEditProduct";
import ButtonDeleteProduct from "./buttonsProductsActions.js/ButtonDeleteProduct";
import { ContentActionsTableProducts } from "./buttonsProductsActions.js/styled";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const ContentActions = ({ data }) => {
  const { productsActions } = useContext(ProductsContext);
  const { handleDelete, handleEdit } = productsActions;

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
};
