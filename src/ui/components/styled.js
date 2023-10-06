import { Button } from "antd";
import styled from "styled-components";

const ContentNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  background-color: transparent;
  position: fixed;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(5px);
    border: 1px solid;
  }

  div {
    flex: auto;
    padding: 20px;
  }

  .link {
    text-decoration: none;
    cursor: pointer;
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

const ContentIconsUser = styled.div`
  display: flex;
  flex: auto;
  gap: 15px;
  align-content: right;
  align-self: center;
  align-items: center;
  justify-content: flex-end;
  .buttonIcon {
    font-size: 20px;
    border: none;
  }
`;

const ButtonIconsUser = styled(Button)``;

const ContentInitialNav = styled.div`
  .link {
    /* color: white; */
  }
`;

export {
  ContentNav,
  InputSeacrh,
  ButtonIconsUser,
  ContentIconsUser,
  ContentSeacrh,
  ContentInitialNav,
};
