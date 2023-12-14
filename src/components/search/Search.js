import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
  ContentSearch,
  FilterMenu,
  SearchBar,
  SearchButton,
  SearchIcon,
  SearchInput,
} from "./styled";
import { ProductsContext } from "../products/context/ProductsContext";
import { useContext } from "react";

const Search = () => {
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
      <ContentSearch>
        <SearchInput
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </ContentSearch>

      {searchResults.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Search ;
