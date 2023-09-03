import React, { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import useProducts from "../hooks/useProducts";

export const ProductsContext = createContext();

const useContextValue = () => {
  const productsCrud = useProducts();

  const contextValue = useMemo(() => {
    return { productsCrud };
  }, [productsCrud]);

  return contextValue;
};

export const ProductsProvider = ({ children }) => {
  const contextValue = useContextValue();

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node,
};
