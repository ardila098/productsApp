import { Row, Select } from "antd";
import styled from "styled-components";

const StyleSelectSize = styled(Select)`
  width: 100px;
  margin-bottom: 0px;
`;

const ContentSelect = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 50%;
  font-family: "Montserrat", sans-serif;
`;

const ContainerCount = styled(Row)`
  width: 100%;
  display: flex;
  border-radius: 5px;
  border: 1px solid;
  width: 35%;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  border: ${(props) => (props.counterCart ? "none" : "1px solid")};
  span {
  }

  div {
    display: ${(props) => (props.counterCart ? "flex" : "")};
    gap: ${(props) => (props.counterCart ? "10px" : "2px")};
    align-items: center;
  }
`;

const TextParcial = styled.span`
  color: #919191;
`;

const PriceItemTotal = styled.span``;

export {
  StyleSelectSize,
  ContentSelect,
  ContainerCount,
  PriceItemTotal,
  TextParcial,
};
