import React, { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import useProducts from "../hooks/useProducts";
import useProductsActions from "../components/productsActions/hook/useProductsActions";
import useCart from "../../../cart/hooks/useCart";
import useDrawerCart from "../../drawer/hooks/useDrawerCart";

export const ProductsContext = createContext();

const useContextValue = () => {
  const productsCrud = useProducts();
  const drawerShoppingCart = useDrawerCart();
  const shoppingCart = useCart();
  const productsActions = useProductsActions({
    removeProduct: productsCrud.removeProduct,
  });

  const contextValue = useMemo(() => {
    return {
      productsCrud,
      productsActions,

      drawerShoppingCart,
      shoppingCart,
    };
  }, [productsCrud, productsActions, drawerShoppingCart, shoppingCart]);

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
