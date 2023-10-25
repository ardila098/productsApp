import { useState } from "react";

const useProductsActions = ({ removeProduct }) => {
  const [modalData, setModalData] = useState({ open: false, id: null });

  const handleCreate = () => {
    console.log("create");
    setModalData({
      open: true,
      id: null,
    });
  };

  const handleEdit = (data) => {
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

  const handleDelete = (data) => {
    console.log(data);
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
