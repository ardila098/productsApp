import React, { createContext } from "react";
import useDrawer from "../cart/drawerCart/hook/useDrawer";
import useCart from "../cart/hooks/useCart";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { visible, setVisible } = useDrawer();
  const { cartItem, onAddToCart } = useCart();

  return (
    <DataContext.Provider
      value={{
        visible,
        setVisible,
        cartItem,
        onAddToCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
