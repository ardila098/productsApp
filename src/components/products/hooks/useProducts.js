import { useState, useCallback, useEffect } from "react";
import ProductsService from "../../../services/products/ProductsService";

const useProducts = () => {
  const [products, setproducts] = useState();
  const { createProduct, getAllProducts, getProduct } = ProductsService();

  const getData = useCallback(async () => {
    try {
      const { data } = await getAllProducts();
      console.log(data);
      setproducts(data);
    } catch (error) {
      console.log(error);
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
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    products,
    getData,
    getProductById,
    addProduct,
    // UpdateProduct,
  };
};

export default useProducts;
