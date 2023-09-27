import { useState } from "react";


const useProductsActions = ({removeProduct}) => {
  const [modalData, setModalData] = useState({ open: false, id: null });
  

  const handleCreate = () => {
    setModalData({
      open: true,
      id: null,
    });
  };

  const handleEdit = () => {
    setModalData({
      open: true,
      id: "",
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
