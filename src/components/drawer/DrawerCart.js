import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const DrawerCart = () => {
  const { toggleDrawer,isOpen,closeDrawer } = useContext(DataContext);

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
