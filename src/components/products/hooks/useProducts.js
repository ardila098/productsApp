import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsService from "../../../services/products/ProductsService";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const { getAllProducts, createProduct, editProduct, getProduct } =
    ProductsService();

  const getData = useCallback(async () => {
    try {
      const { data } = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getProductById = async (id) => {
    const { data } = await getProduct(id);
    console.log(data);
    return data;
  };

  const UpdateProduct = async (id, data) => {
    if (id) {
      try {
        await editProduct(id, data);
      } catch (error) {
        console.log("Error updating account", error);
      }
    } else {
      try {
        await createProduct(data);
      } catch (error) {
        console.log("Error creating account", error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    products,
    getProductById,
    UpdateProduct,
    getData,
  };
};

export default useProducts;

useProducts.propTypes = {
  updateProd: PropTypes.func,
};
