import { Input, Menu } from "antd";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  width: 400px;
  margin-bottom: 20px;
`;

const FilterMenu = styled(Menu)`
  width: 200px;
`;

const ContentSearch = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

export { SearchInput, FilterMenu , ContentSearch};
