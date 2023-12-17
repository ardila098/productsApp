import { Menu, Modal } from "antd";
import styled from "styled-components";

const FilterMenu = styled(Menu)`
  width: 200px;
`;

const ContentSearch = styled.div`
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  border-bottom: 1px solid #f8f9f9;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  outline: none;
  padding: 5px 10px;
  font-size: 25px;
  color: #f8f9f9;
  ::placeholder {
    color: #f8f9f9;
  }
`;

const SearchIcon = styled.div`
  color: #f8f9f9;
  width: 15px;

  width: 20px;
  height: 20px;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const ContenSearchFirst = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  `;

const ModalSearchStyle = styled(Modal)`
  width: 100%;
   .ant-modal-root {
    background-color: red !important;
  }
  .ant-modal-content {
    background-color: transparent;
    border: none;
    background-color: transparent;
    box-shadow: none;
  }
`;

const ContentSearchCustom = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const ContentResultSearch = styled.div``;

export {
  SearchInput,
  FilterMenu,
  ContentSearch,
  SearchIcon,
  SearchButton,
  ModalSearchStyle,
  ContentSearchCustom,
  ContentResultSearch,
  ContenSearchFirst,
};
