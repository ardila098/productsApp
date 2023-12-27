import PropType from "prop-types";
import { SearchOutlined } from "@ant-design/icons";
import { ContentSearch, SearchButton, SearchInput } from "./styled";

import { useContext } from "react";
import { ProductsContext } from "../products/context/ProductsContext";

const SearchCustom = ({ modePage }) => {
  const { searchCustom } = useContext(ProductsContext);
  const { searchTerm, handleChange } = searchCustom;

  return (
    <>
      <ContentSearch>
        <SearchInput
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleChange}
          modePage={modePage}
        />
        <SearchButton>
          <SearchOutlined
            style={{ fontSize:modePage? '14px' :"18px", color: modePage ? "black" : "#f8f9f9" }}
          />
        </SearchButton>
      </ContentSearch>
    </>
  );
};

export default SearchCustom;

SearchCustom.propType = {
  onClose: PropType.func,
};
