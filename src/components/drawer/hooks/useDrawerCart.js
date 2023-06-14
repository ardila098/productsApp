import { useState } from "react";

const useDrawerCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  const toggleDrawer = () => {
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
