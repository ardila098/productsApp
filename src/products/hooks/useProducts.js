import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsService from "../../services/products/productsService";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const { getAllProducts, createProduct, deleteProduct, editProduct } =
    ProductsService();

  const getData = useCallback(async () => {
    console.log('oeeeee')
    const { data } = await getAllProducts();
    setProducts(data);
  }, []);

  const addProduct = async (dataForm) => {
    console.log(dataForm);
    await createProduct(dataForm);
    getData();
  };
  
  const removeProduct = async (producId) => {
    console.log(producId);
    await deleteProduct(producId);
    getData();
  };
  
  const updateProduct = async (product) => {
    await editProduct(product._id, product);
    getData();
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [getData]);

  return {
    products,
    addProduct,
    removeProduct,
    updateProduct,
    getData,
  };
};

export default useProducts;

useProducts.propTypes = {
  updateProd: PropTypes.func,
};
