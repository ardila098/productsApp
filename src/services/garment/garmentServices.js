import axios from "axios";
import baseUrl from "../../utils/apis/BaseUrl";
import API from "../../utils/apis";

const garmentServices = () => {
  const getAllCategarmentTypes = async () => {
    const garmentType = await axios.get(`${baseUrl}${API.garmentType.root}`);
    console.log(garmentType);
    return {
      data: garmentType.data,
    };
  };

  return {
    getAllCategarmentTypes,
  };
};

export default garmentServices;
