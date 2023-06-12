import { useState } from "react";

const useDrawerCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  const toggleDrawer = () => {
    console.log("oee");
    setIsOpen(true);
  };

  const closeDrawer = () => {
    console.log("oee");
    setIsOpen(false);
  };

  return {
    toggleDrawer,
    isOpen,
    closeDrawer,
  };
};

export default useDrawerCart;
