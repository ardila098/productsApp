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
  display: flex;
  border-radius: 5px;
  border: 1px solid;
  width: 40%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  border: ${(props) => (props.counterCart ? "none" : "1px solid")};

`;

export { StyleSelectSize, ContentSelect, ContainerCount };
