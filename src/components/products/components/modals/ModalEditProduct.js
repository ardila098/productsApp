import { Modal } from "antd/es";
import React from "react";
import FormEditProduct from "../forms/FormEditProduct";

const ModalEditProduct = ({ data, close }) => {
  console.log(data)
  return (
    <>
      <Modal open={data.open} onCancel={close}>
        <FormEditProduct id={data.id}/>
      </Modal>
    </>
  );
};

export default ModalEditProduct;
