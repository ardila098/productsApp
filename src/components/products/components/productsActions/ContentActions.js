import { Button } from "antd";
import React from "react";
import { useState } from "react";
import ModalEditProduct from "../modals/ModalEditProduct";
import useProducts from "../../hooks/useProducts";

const ContentActions = ({ data }) => {
  const [modalData, setModalData] = useState({ open: false, id: null });
  const { removeProduct } = useProducts();

  const handleCreate = () => {
    setModalData({
      open: true,
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

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button
          onClick={() => handleCreate()}
          style={{ background: "#E7F5DA" }}
        />

        <Button
          onClick={() => handleEdit()}
          style={{ background: "#ADB4D1" }}
        />

        <Button
          onClick={() => handleDelete()}
          style={{ background: "#ADB4D1" }}
        />

        <ModalEditProduct data={modalData} close={handleClose} />
      </div>
    </>
  );
};

export default ContentActions;
