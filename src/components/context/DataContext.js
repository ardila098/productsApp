import React, { createContext } from "react";
import useDrawerCart from "../drawer/hooks/useDrawerCart";
import useCart from "../../cart/hooks/useCart";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { toggleDrawer, isOpen, closeDrawer } = useDrawerCart();
  const { cartItem, onAddToCart } = useCart();

  return (
    <DataContext.Provider
      value={{
        toggleDrawer,
        isOpen,
        cartItem,
        onAddToCart,
        closeDrawer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
