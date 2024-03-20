import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import SelectCustom from "../../../SelectCustom/SelectCustom";

const SelectCategory = () => {
  const { categorysCrud } = useContext(ProductsContext);
  const { dataCategorys } = categorysCrud;

  const data = dataCategorys.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  return (
    <>
      <SelectCustom data={data} multiple name="category" label="categoria" />
    </>
  );
};

export default SelectCategory;
