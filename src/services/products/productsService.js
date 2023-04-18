import axios from "axios";
import API from "../../utils/apis";
import baseUrl from "../../utils/apis/BaseUrl";

const ProductsService = () => {
  const getAllProducts = async () => {
    const getProducts = await axios.get(`${baseUrl}${API.products.root}`);
    return {
      data: getProducts.data,
    };
  };

  const createProduct = async (dataForm) => {
    await axios.post(`${baseUrl}${API.products.root}`, dataForm);
  };

  const deleteProduct = async (dataForm) => {
    console.log(dataForm);
    await axios.delete(`${baseUrl}${API.products.root}${dataForm}`);
  };

  const editProduct = async (dataFormId, dataForm) => {
    const params = {
      name: dataForm.name,
      category: dataForm.category,
      price: dataForm.price,
      description: dataForm.description,
      stock: dataForm.stock,
      imgURL: dataForm.imgURL,
    };
    console.log(dataForm);
    console.log(dataFormId);
    const { data } = await axios.put(
      "http://localhost:3000/api/products/" + dataFormId,
      params
    );
    console.log(data);
    return {data:data }
  };

  return {
    getAllProducts,
    createProduct,
    deleteProduct,
    editProduct,
  };
};
export default ProductsService;
