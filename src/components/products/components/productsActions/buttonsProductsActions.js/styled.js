import { Button } from "antd";
import styled from "styled-components";

const ContentActionsTableProducts = styled.div`
  display: flex;
  gap: 20px;
`;

const ButtonAddPoduct = styled(Button)`
  background: #abc4a1;
`;

const ButtonUpdateProduct = styled(Button)`
  background: #adb4d1;
`;

const ButtonRemoveProduct = styled(Button)`
  background: #add4c1;
`;

export {
  ButtonAddPoduct,
  ButtonUpdateProduct,
  ButtonRemoveProduct,
  ContentActionsTableProducts,
};
