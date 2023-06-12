import { useState } from "react";

const useCarts = () => {
  const [itemsCart, setItemsCart] = useState();

  const addToCart = (items) => {
    setItemsCart((items) => [...itemsCart, items]);
  };

  return {
    addToCart
  };
};

export default useCarts;
