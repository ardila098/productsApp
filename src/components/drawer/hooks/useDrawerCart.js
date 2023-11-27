import { useState } from "react";

const useDrawerCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  const toggleDrawer = () => {
    console.log('open ')
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggleDrawer,
    closeDrawer,
  };
};

export default useDrawerCart;
