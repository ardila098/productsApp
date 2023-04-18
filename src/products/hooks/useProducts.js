import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductsService from "../../services/products/productsService";

const useProducts = (options = {}) => {
  const [products, setProducts] = useState([]);
  const { getAllProducts, createProduct, deleteProduct, editProduct } =
    ProductsService();

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
    const dataProduct = await editProduct(product._id, product);
    const datos = dataProduct.data;

    if (options.updateProd) {
      options.updateProd({ datos });
    }
    console.log(datos);
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
