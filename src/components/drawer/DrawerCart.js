import "react-modern-drawer/dist/index.css";
import { ProductsContext } from "../products/context/ProductsContext";
import { useContext } from "react";
import ShoppingCart from "../../cart/components/ShoppingCart";
import { DrawerCartStyle } from "./style";

const DrawerCart = () => {
  const { drawerShoppingCart } = useContext(ProductsContext);
  const { isOpen, closeDrawer } = drawerShoppingCart;

  return (
    <>
      <DrawerCartStyle
        title="Shopping Cart"
        placement="right"
        closable={false}
        onClose={closeDrawer}
        visible={isOpen}
        style={{ background: "#f8f9fa" }}
      >
        <ShoppingCart />
      </DrawerCartStyle>
    </>
  );
};

export default DrawerCart;
