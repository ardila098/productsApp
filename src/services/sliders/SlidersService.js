import axios from "axios";
import API from "../../utils/apis";
import baseUrl from "../../utils/apis/BaseUrl";

const SlidersService = () => {
  const getAllSliders = async () => {
    const getSliders = await axios.get(`${baseUrl}${API.sliders.root}`);
    return {
      data: getSliders.data,
    };
  };

  const createSlider = async (product) => {
    console.log(product);
    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("stock", product.stock);

    product.imgs.forEach((img) => {
      formData.append("imgs", img);
    });

    await axios.post(`${baseUrl}${API.sliders.root}`, formData);
  };

  const deleteSlider = async (id) => {
    console.log(id);
    await axios.delete(`${baseUrl}${API.sliders.root}${id}`);
  };

  return { getAllSliders, createSlider, deleteSlider };
};

export default SlidersService;
