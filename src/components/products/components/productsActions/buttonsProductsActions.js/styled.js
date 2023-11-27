import { Button } from "antd";
import styled from "styled-components";

const ContentActionsTableProducts = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonAddPoduct = styled(Button)`
  background: #E6F2C3;
`;

const ButtonUpdateProduct = styled(Button)`
  background: #c3f2e7;
`;

const ButtonRemoveProduct = styled(Button)`
  background: #F3DDD6;
`;

export {
  ButtonAddPoduct,
  ButtonUpdateProduct,
  ButtonRemoveProduct,
  ContentActionsTableProducts,
};
