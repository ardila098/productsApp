import {
  ShoppingOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

import {
  ContentNav,
  ButtonIconsUser,
  ContentIconsUser,
  ContentSeacrh,
  ContentInitialNav,
} from "./styled";
import { useContext } from "react";
import DataContext from "../../components/context/DataContext";

export const Navbar = ({ styleNav }) => {
  const { toggleDrawer } = useContext(DataContext);

  return (
    <ContentNav className="navbar" styleNav={styleNav}>
      <ContentSeacrh className=""></ContentSeacrh>
      <ContentInitialNav>
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
      </ContentInitialNav>

      <ContentIconsUser>
        <NavLink className="icons " to="/Like">
          <ButtonIconsUser
            className="buttonIcon"
            icon={<HeartOutlined />}
            // onClick={() => setVisible(true)}
          ></ButtonIconsUser>
        </NavLink>

        <ButtonIconsUser
          className="buttonIcon"
          icon={<ShoppingOutlined />}
          // onClick={() => setVisible(true)}
          onClick={toggleDrawer}
        ></ButtonIconsUser>

        <NavLink className="icons" to="/login">
          <ButtonIconsUser
            className="buttonIcon"
            icon={<UserOutlined />}
            // onClick={() => setVisible(true)}
          ></ButtonIconsUser>
        </NavLink>
      </ContentIconsUser>
    </ContentNav>
  );
};
