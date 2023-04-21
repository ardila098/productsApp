import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsService from "../../services/products/productsService";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productEdit, setProductEdit] = useState({});
  const { getAllProducts, createProduct, deleteProduct, editProduct } =
    ProductsService();

  console.log(productEdit);

  const getData = useCallback(async () => {
    const { data } = await getAllProducts();
    setProducts(data);
  }, []);

  const addProduct = (dataForm) => {
    console.log(dataForm);
    createProduct(dataForm);
    getData();
  };

  const removeProduct = (producId) => {
    console.log(producId);
    deleteProduct(producId);
    getData();
  };

  const updateProduct = async (product) => {
    await editProduct(product._id, product);
  };

  const getProduct = (product) => {
    setProductEdit(product);
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
    getProduct,
    productEdit,
  };
};

export default useProducts;

useProducts.propTypes = {
  updateProd: PropTypes.func,
};
