import { useCallback, useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = useCallback((item) => {
    setCartItems((currentCart) => [...currentCart, item]);
  }, []);



  return {
    onAddToCart,
    cartItems,
    setCartItems,
  };
};

export default useCart;
