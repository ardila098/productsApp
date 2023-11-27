import { useCallback, useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = useCallback((item) => {
    setCartItems((currentCart) => [...currentCart, item]);
  }, []);

  console.log(cartItems);

  return {
    onAddToCart,
    cartItems,
  };
};

export default useCart;
