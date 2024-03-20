import { useState, useCallback, useEffect } from "react";
import ProductsService from "../../../services/products/productsService";

const useProducts = () => {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    createProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    editProduct,
  } = ProductsService();

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllProducts();
      console.log(data);
      setproducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getProductById = async (idProduct) => {
    const { data } = await getProduct(idProduct);
    console.log(data);
    return data;
  };

  const addProduct = async (formData) => {
    console.log(formData);
    await createProduct(formData);
    getData();
  };

  const updateProduct = async (idProduct, formData) => {
    try {
      console.log(formData);
      const data = await editProduct(idProduct, formData);
      console.log(data);
      getData();
    } catch (error) {
      console.error("Error update product", error);
    }
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    getData();
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    products,
    getData,
    getProductById,
    addProduct,
    removeProduct,
    isLoading,
    updateProduct,
  };
};

export default useProducts;
