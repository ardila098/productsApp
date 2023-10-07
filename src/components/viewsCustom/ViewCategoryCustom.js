import React from "react";
import PropType from "prop-types";
import ProductsContainer from "../containers/ProductsContainer";

const ViewCategoryCustom = ({ data }) => {
  return (
    <div>
      <ProductsContainer data={data} />
    </div>
  );
};

export default ViewCategoryCustom;

ViewCategoryCustom.propType = {
  data: PropType.object,
};
