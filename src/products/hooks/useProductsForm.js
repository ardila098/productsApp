import { useEffect, useState } from "react";
import useProducts from "./useProducts";

const initialForm = {
  name: "",
  category: "",
  price: 0,
  description: "",
  stock: 0,
  imgURL: "",
};

export const useProductsForm = (product, onSave) => {
  const [formState, setFormState] = useState(initialForm);
  const { addProduct, updateProduct } = useProducts();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (formState._id) {
      await updateProduct(formState);
      console.log(formState);
    } else {
      await addProduct(formState);
    }
    onResetForm();
    onSave();
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const getProduct = (product) => {
    console.log(product);
    setFormState(product);
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  useEffect(() => {
    setFormState(product ?? initialForm);
  }, [product]);

  return {
    ...formState,
    formState,
    setFormState,
    onInputChange,
    onResetForm,
    onFormSubmit,
    getProduct,
  };
};
