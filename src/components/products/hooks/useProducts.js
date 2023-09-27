import { useState, useCallback, useEffect } from "react";
import ProductsService from "../../../services/products/productsService";

const useProducts = () => {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { createProduct, getAllProducts, getProduct, deleteProduct } =
    ProductsService();

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
    // UpdateProduct,
  };
};

export default useProducts;
