import React, { createContext, useMemo } from "react";
import PropTypes from "prop-types";
import useProducts from "../hooks/useProducts";
import useProductsActions from "../components/productsActions/hook/useProductsActions";
import useCart from "../../../cart/hooks/useCart";
import useDrawerCart from "../../drawer/hooks/useDrawerCart";
import useSearchCustom from "../../searchCustom/hooks/useSearchCustom";
import useCategorys from "../components/categories/hooks/useCategorys";
import useSelectGarmentType from "../components/selects/selectGarmentType/hooks/useSelectGarmentType";

export const ProductsContext = createContext();

const useContextValue = () => {
  const productsCrud = useProducts();
  const drawerShoppingCart = useDrawerCart();
  const shoppingCart = useCart();
  const searchCustom = useSearchCustom({ productsCrud });
  const categorysCrud = useCategorys();
  const garmentTypeCrud = useSelectGarmentType();
  const productsActions = useProductsActions({
    removeProduct: productsCrud.removeProduct,
  });

  const contextValue = useMemo(() => {
    return {
      productsCrud,
      productsActions,
      searchCustom,
      drawerShoppingCart,
      shoppingCart,
      categorysCrud,
      garmentTypeCrud,
    };
  }, [
    productsCrud,
    productsActions,
    drawerShoppingCart,
    shoppingCart,
    searchCustom,
    categorysCrud,
    garmentTypeCrud,
  ]);

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
