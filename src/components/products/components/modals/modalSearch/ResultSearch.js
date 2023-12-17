import React, { useContext } from "react";
import PropType from "prop-types";
import CarouselCustom from "../../../../carouselCustom/CarouselCustom";
import { ProductsContext } from "../../../context/ProductsContext";

const ResultSearch = ({ onClose }) => {
  const { searchCustom } = useContext(ProductsContext);
  const { searchResults } = searchCustom;
  return (
    <>
      <CarouselCustom items={searchResults} onClose={onClose} />
    </>
  );
};

export default ResultSearch;

ResultSearch.propType = {
  data: PropType.array,
  onClose: PropType.func,
};
