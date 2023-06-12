import {
  ShoppingOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

// import DataContext from "../../context/DataContext";
import {
  ContentNav,
  ButtonIconsUser,
  ContentIconsUser,
  ContentSeacrh,
  ContentInitialNav
} from "./styled";

export const Navbar = () => {
  // const { setVisible } = useContext(DataContext);

  return (
    <ContentNav className="navbar ">
      <ContentInitialNav>
        <Link className="link" to="/products">
          Products
        </Link>

        <NavLink className="link" to="/productsCrud">
          Crud
        </NavLink>
      </ContentInitialNav>

      <ContentSeacrh className="">
       
         
     
      </ContentSeacrh>

      <ContentIconsUser>
        <NavLink className="icons " to="/Like">
          <ButtonIconsUser
            className="buttonIcon"
            icon={<HeartOutlined />}
            // onClick={() => setVisible(true)}
          ></ButtonIconsUser>
        </NavLink>

        <NavLink className="icons " to="/login">
          <ButtonIconsUser
            className="buttonIcon"
            icon={<ShoppingOutlined />}
            // onClick={() => setVisible(true)}
          ></ButtonIconsUser>
        </NavLink>

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
