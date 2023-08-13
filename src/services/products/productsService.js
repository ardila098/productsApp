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

  const createProduct = async (formData) => {
    await axios.post(`${baseUrl}${API.products.root}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const deleteProduct = async (id) => {
    console.log(id);
    await axios.delete(`${baseUrl}${API.products.root}${id}`);
  };

  const getProduct = async ({ id }) => {
    console.log(id);
    const getProduct = await axios.get(
      "http://localhost:3000/api/products/" + id
    );
    return {
      data: getProduct.data,
    };
  };

  const editProduct = async (id, data) => {
    const params = {
      name: data.name,
      category: data.category,
      price: data.price,
      description: data.description,
      stock: data.stock,
      imgURL: data.imgURL,
    };
    console.log(data);
    console.log(id);
    const { dataProduct } = await axios.put(
      "http://localhost:3000/api/products/" + id,
      params
    );
    console.log(dataProduct);
    return { data: dataProduct };
  };

  return {
    getAllProducts,
    deleteProduct,
    editProduct,
    getProduct,
    createProduct,
  };
};
export default ProductsService;
