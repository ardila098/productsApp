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

  const createProduct = async (product) => {
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

    await axios.post(`${baseUrl}${API.products.root}`, formData);
  };

  const getProduct = async (id) => {
    console.log(id);
    const getProduct = await axios.get(
      "http://localhost:3000/api/products/" + id
    );
    return {
      data: getProduct.data,
    };
  };

  const editProduct = async (id, product) => {
    const formData = new FormData();
    formData.append("_id", id);
    formData.append("name", product.name);
    formData.append("category", product.category);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("stock", product.stock);

    // Procesar imágenes nuevas
    product.imgs.forEach((img) => {
      if (img instanceof File) {
        formData.append("imgs", img);
      }
    });

    product.imgs.forEach((img) => {
      if (typeof img._id === "string") {
        formData.append("existingImgs", img._id);
      }
    });

    const { data } = await axios.put(
      `${baseUrl}${API.products.root}${id}`,
      formData
    );

    return { data };
  };

  const deleteProduct = async (id) => {
    console.log(id);
    await axios.delete(`${baseUrl}${API.products.root}${id}`);
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
