import { Button, Menu, Row } from "antd";
import styled from "styled-components";

const ContentNav = styled.nav`
  position: ${(props) => (props.styleNav ? "fixed" : "")};
  top: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  top: 90px;
  gap: 20px;
  z-index: 1000;
  transition: background-color 0.3s ease;
  min-width: 768px;
  background-color: ${(props) =>
    props.styleNav ? "rgba(128, 128, 128, 0.2)" : "white"};
  color: ${(props) => (props.styleNav ? "white" : "black")};

  &:hover {
    background-color: ${(props) =>
      props.styleNav ? "rgba(128, 128, 128, 0.4)" : "transparent"};
  }
  div {
    display: flex;

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-width: 768px;
  }
`;

const InputSeacrh = styled.input`
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 10px;
`;

const ContentSeacrh = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
  }
`;

const ContentInitialNav = styled.div`
  display: flex;
`;

const ContentIconsUser = styled.div`
  display: flex;
  div {
    margin: auto;
  }
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  min-width: 768px;
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  div {
    flex: 1;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  margin: auto;
  font-size: 24px;
  font-weight: bold;
  margin-left: 15px;
`;

const MenuItems = styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: center;
  .link {
    text-decoration: none;
    cursor: pointer;

    font-size: 18px;
    color: ${(props) => (props.styleNav ? "white" : "black")};
  font-family: "Montserrat", sans-serif;

  }
  .linkOff {
    text-decoration: none;
    cursor: pointer;
    color: red;
  }
`;

const StyledMenuItem = styled(Menu.Item)`
  font-family: "Montserrat", sans-serif;
`;

const MobileNavButton = styled(Button)`
  display: flex;
  margin: auto;
  border: none;
  justify-content: left;
  margin-left: 0px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: end;
  margin-right: 15px;
  div {
    align-items: center;
    width: 100px;
  }
  button {
    border: none;
  }
`;

const ContentMenu = styled.div`
  display: flex;

  align-items: center;

  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 769px) {
    display: none;
  }
`;

const ContentMobileNav = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: flex;
  }
`;

const WarningNavContent = styled.div`
  width: 100%;
  background-color: black;
  height: 40px;
  text-align: center;
  min-width: 768px;
`;

const MessageWarnign = styled.span`
  color: white;
`;

export {
  ContentNav,
  InputSeacrh,
  ContentSeacrh,
  ContentInitialNav,
  ContentIconsUser,
  StyledLogo,
  StyledMenuItem,
  MobileNavButton,
  IconsContainer,
  StyledNav,
  ContentMenu,
  ContentMobileNav,
  MenuItems,
  WarningNavContent,
  MessageWarnign,
};
