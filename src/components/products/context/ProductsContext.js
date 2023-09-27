import React, { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import useProducts from "../hooks/useProducts";
import useProductsActions from "../components/productsActions/hook/useProductsActions";

export const ProductsContext = createContext();

const useContextValue = (initialData) => {
  const productsCrud = useProducts();
  const productsActions = useProductsActions({
    removeProduct: productsCrud.removeProduct,
  });

  productsActions.data = initialData;

  const contextValue = useMemo(() => {
    return { productsCrud, productsActions, initialData };
  }, [productsCrud, productsActions, initialData]);

  return contextValue;
};

export const ProductsProvider = ({ children, initialData }) => {
  const contextValue = useContextValue(initialData);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node,
  initialData: PropTypes.any,
};
