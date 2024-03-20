import axios from "axios";
import React from "react";
import baseUrl from "../../utils/apis/BaseUrl";
import API from "../../utils/apis";

const CategorysServices = () => {
  const getAllCategorys = async () => {
    const categorys = await axios.get(`${baseUrl}${API.categorys.root}`);
    console.log(categorys);
    return {
      data: categorys.data,
    };
  };

  return {
    getAllCategorys,
  };
};

export default CategorysServices;
