import { Button } from "antd";
import styled from "styled-components";

const ContentNav = styled.nav`
  position: fixed;
  top: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  top: 90px;
  gap: 20px;
  background-color: rgba(128, 128, 128, 0.2);
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(128, 128, 128, 0.4);
  }
  div {
    display: flex;
    flex: 1; /* Hace que cada div tenga el mismo tamaño y se reparta el espacio */
    display: flex;
    padding: 20px;
    align-items: center; /* Centra el contenido verticalmente */
    justify-content: center; /* Centra el contenido horizontalmente */
  }

  .link {
    text-decoration: none;
    cursor: pointer;
  }
  .linkOff {
    text-decoration: none;
    cursor: pointer;
    color: red;
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

const ButtonIconsUser = styled(Button)`
  background-color: transparent;
  color: white;
`;

const ContentInitialNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  .link {
    color: white;
  }
`;

const ContentIconsUser = styled.div`
  gap: 15px;
  display: flex;
  justify-content: flex-end;

  .icons {
    display: flex;
  }

  .buttonIcon {
    font-size: 20px;
    border: none;
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
