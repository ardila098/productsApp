import {  useState } from "react";
import useProducts from "./useProducts";

const initialForm = {
  name: "",
  category: "",
  price: 0,
  description: "",
  stock: 0,
  imgURL: "",
};

export const useProductsForm = () => {
  const [formState, setFormState] = useState(initialForm);
  const { addProduct } = useProducts();

  const onFormSubmit = (event) => {
    event.preventDefault();
    addProduct(formState);
    onResetForm();
    console.log(formState);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    setFormState,
    onInputChange,
    onResetForm,
    onFormSubmit,
  };
};
