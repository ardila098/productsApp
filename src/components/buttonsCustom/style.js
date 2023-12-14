import { Button } from "antd";
import styled from "styled-components";

const ContentAddBtn = styled.div``;

const ButtonAddToCartStyled = styled(Button)`
  display: flex;
  min-height: 30px;
  color: black;
  align-items: center;
  justify-content: center;
  width: 45px !important;
  height: 45px !important;
  border-radius: 50%;
  :hover {
    border: 1px solid #F2D7D5 !important;
    color: #F2D7D5 !important;
  }
`;

export { ButtonAddToCartStyled, ContentAddBtn };
