import {
  ShoppingOutlined,
  UserOutlined,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

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
import ModalSeacrh from "../../components/products/components/modals/modalSearch/ModalSeacrh";

// import Logo from "../../components/main/Logo";
// import { Button, Menu, Row } from "antd";

export const Navbar = ({ styleNav }) => {
  const [visible, setVisible] = useState(false);
  const [visibleNav, setVisibleNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showModalSearch, setShowModalSearch] = useState();
  const { drawerShoppingCart } = useContext(ProductsContext);
  const { toggleDrawer } = drawerShoppingCart;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onshowModalSeacrh = () => {
    setShowModalSearch(true);
  };

  const onCloseModalSeacrh = () => {
    setShowModalSearch(false);
  };

  useScrollPosition(({ currPos }) => {
    const isScrolledDown = currPos.y > prevScrollPos;

    if (isScrolledDown) {
      setVisibleNav(true);
    } else {
      setVisibleNav(false);
    }

    setPrevScrollPos(currPos.y);
  });

  return (
    <StyledNav visibleNav={visibleNav}>
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
          <Button onClick={onshowModalSeacrh}>
            <SearchOutlined style={{ fontSize: "18px" }} />
          </Button>
        </Col>
        <Col xs={3} className="icons">
          <Button onClick={toggleDrawer}>
            <ShoppingOutlined style={{ fontSize: "18px" }} />
          </Button>
        </Col>
        <Col xs={3} className="icons">
          <UserOutlined style={{ fontSize: "18px" }} />
        </Col>
        <Col xs={3} className="icons">
          <HeartOutlined style={{ fontSize: "18px" }} />
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
            Home
          </StyledMenuItem>
          <StyledMenuItem key="productos">
            <Link className="link" to="/products">
              Productos
            </Link>
          </StyledMenuItem>
          <StyledMenuItem key="ofertas">
            <Link className="link" to="/productsTable">
              Crud
            </Link>
          </StyledMenuItem>
          <StyledMenuItem key="contacto">Contacto</StyledMenuItem>
        </Menu>
      </Drawer>
      <ModalSeacrh show={showModalSearch} onClose={onCloseModalSeacrh} />
    </StyledNav>
  );
};
