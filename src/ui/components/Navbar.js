import {
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
// // import { Link, NavLink } from "react-router-dom";

import {
  // ContentNav,
  // ContentIconsUser,
  // // ContentSeacrh,
  // ContentInitialNav,
  StyledLogo,
  StyledMenuItem,
  MobileNavButton,
  IconsContainer,
  StyledNav,
  ContentMenu,
  ContentMobileNav,
  MenuItems,
} from "./styled";
import { useContext } from "react";
import { Button, Col, Drawer, Menu } from "antd";
import { useState } from "react";
import Logo from "../../components/main/Logo";
import { Link, NavLink } from "react-router-dom";
import { ProductsContext } from "../../components/products/context/ProductsContext";
// import Logo from "../../components/main/Logo";
// import { Button, Menu, Row } from "antd";

export const Navbar = ({ styleNav }) => {
  const [visible, setVisible] = useState(false);
  const { drawerShoppingCart } = useContext(ProductsContext);
  const { toggleDrawer } = drawerShoppingCart;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <StyledNav>
      <ContentMobileNav>
        <MobileNavButton icon={<MenuOutlined />} onClick={showDrawer} />
      </ContentMobileNav>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <ContentMenu>
        <MenuItems>
          <Link className="link" to="/products">
            Home
          </Link>

          <NavLink className="link" to="/productsTable">
            Store
          </NavLink>
          <NavLink className="link" to="/productsTable">
            More
          </NavLink>

          <NavLink className="linkOff" to="/productsTable">
            Off
          </NavLink>
        </MenuItems>
      </ContentMenu>
      <IconsContainer>
        <Col xs={3} className="icons">
          <Button onClick={toggleDrawer}>
            <ShoppingCartOutlined style={{ fontSize: "25px" }} />
          </Button>
        </Col>
        <Col xs={3} className="icons">
          <UserOutlined style={{ fontSize: "25px" }} />
        </Col>
        <Col xs={3} className="icons">
          <HeartOutlined style={{ fontSize: "25px" }} />
        </Col>
      </IconsContainer>
      <Drawer
        title="Menú"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="vertical" theme="light">
          <StyledMenuItem key="inicio" className="link" to="/products">
            Inicio
          </StyledMenuItem>
          <StyledMenuItem key="productos">Productos</StyledMenuItem>
          <StyledMenuItem key="ofertas">Ofertas</StyledMenuItem>
          <StyledMenuItem key="contacto">Contacto</StyledMenuItem>
        </Menu>
      </Drawer>
    </StyledNav>
  );
};
