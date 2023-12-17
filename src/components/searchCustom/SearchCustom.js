import React, { useState, useEffect, useContext } from "react";
import PropType from "prop-types";
import { SearchOutlined } from "@ant-design/icons";
import {
  ContenSearchFirst,
  ContentSearch,
  SearchButton,
  SearchInput,
} from "./styled";
import { ProductsContext } from "../products/context/ProductsContext";
import ResultSearch from "../products/components/modals/modalSearch/ResultSearch";

const SearchCustom = ({ onClose }) => {
  const [productsSeacrh, setProductsSearch] = useState([]);
  const { productsCrud } = useContext(ProductsContext);
  const { products } = productsCrud;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = productsSeacrh.filter((item) =>
      Object.keys(item).some(
        (key) =>
          typeof item[key] === "string" &&
          item[key].toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(results);
  }, [searchTerm]);

  useEffect(() => {
    setProductsSearch(products);
  }, [products]);

  return (
    <>
      <ContenSearchFirst>
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
        <ResultSearch data={searchResults} onClose={onClose} />
      </ContenSearchFirst>
    </>
  );
};

export default SearchCustom;

SearchCustom.propType = {
  onClose: PropType.func,
};
