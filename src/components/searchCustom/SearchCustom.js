import PropType from "prop-types";
import { SearchOutlined } from "@ant-design/icons";
import {
  ContentSearch,
  SearchButton,
  SearchInput,
} from "./styled";

import { useContext } from "react";
import { ProductsContext } from "../products/context/ProductsContext";

const SearchCustom = ({ onClose }) => {
  const { searchCustom } = useContext(ProductsContext);
  const { searchTerm, handleChange,searchResults } = searchCustom;

  return (
    <>
      
        <ContentSearch>
          <SearchInput
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleChange}
          />
          <SearchButton>
            <SearchOutlined style={{ fontSize: "18px", color: "#f8f9f9" }} />
          </SearchButton>
        </ContentSearch>
    
      
    </>
  );
};

export default SearchCustom;

SearchCustom.propType = {
  onClose: PropType.func,
};
