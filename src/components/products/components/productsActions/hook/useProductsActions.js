import { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

const useProductsActions = (data) => {
  const [modalData, setModalData] = useState({ open: false, id: null });
  const { productsCrud } = useContext(ProductsContext);
  const { removeProduct } = productsCrud;

  const handleCreate = () => {
    setModalData({
      open: true,
      id: null,
    });
  };

  const handleEdit = () => {
    setModalData({
      open: true,
      id: data._id,
    });
  };

  const handleClose = () => {
    setModalData({
      open: false,
    });
  };

  const handleDelete = () => {
    removeProduct(data._id);
  };

  return {
    handleCreate,
    modalData,
    handleEdit,
    handleClose,
    handleDelete,
  };
};

export default useProductsActions;
