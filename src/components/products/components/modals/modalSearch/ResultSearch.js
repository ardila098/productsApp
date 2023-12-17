import React from "react";
import PropType from "prop-types";
import CarouselCustom from "../../../../carouselCustom/CarouselCustom";

const ResultSearch = ({ data, onClose }) => {
  return (
    <>
      <CarouselCustom items={data} onClose={onClose} />
    </>
  );
};

export default ResultSearch;

ResultSearch.propType = {
  data: PropType.array,
  onClose: PropType.func,
};
