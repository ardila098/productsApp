import { useEffect, useState } from "react";

const useSearchCustom = ({ productsCrud }) => {
  const [productsSeacrh, setProductsSearch] = useState([]);
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

  return {
    handleChange,
    searchResults,
    searchTerm,
  };
};

export default useSearchCustom;
