import { useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  

  const onAddToCart = (item) => {
    setCartItems((currenCart) => {
      const newCart = [...currenCart, item];
      console.log({ newCart });
      return newCart;
    });
  };



  return {
    onAddToCart,
    cartItems,
  };
};

export default useCart;
