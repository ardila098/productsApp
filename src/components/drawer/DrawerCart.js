import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import useDrawerCart from "./hooks/useDrawerCart";

const DrawerCart = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, toggleDrawer, closeDrawer } = useDrawerCart();

  console.log(isOpen);

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div>Hello World</div>

        <button onClick={closeDrawer}>x</button>
      </Drawer>
    </>
  );
};

export default DrawerCart;
