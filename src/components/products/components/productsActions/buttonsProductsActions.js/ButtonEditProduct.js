import { ButtonUpdateProduct } from "./styled";

const ButtonEditProduct = ({ handleEdit }) => {
  return (
    <>
      <ButtonUpdateProduct onClick={() => handleEdit()} />
    </>
  );
};

export default ButtonEditProduct;
