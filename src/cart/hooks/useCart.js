import { useCallback, useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = useCallback((item) => {
    const newItem = { ...item, totalPriceItem: item.price };
    setCartItems((currentCart) => [...currentCart, newItem]);
  }, []);

  console.log(cartItems);

  return {
    onAddToCart,
    cartItems,
    setCartItems,
  };
};

export default useCart;
